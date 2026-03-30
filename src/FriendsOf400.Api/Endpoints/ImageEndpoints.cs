namespace FriendsOf400.Api.Endpoints;

public static class ImageEndpoints
{
    public static void MapImageEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/admin/images").RequireAuthorization();

        group.MapGet("/", (IWebHostEnvironment env) =>
        {
            var uploadsDir = Path.Combine(env.WebRootPath, "uploads", "images");
            var metaDir = Path.Combine(uploadsDir, ".meta");

            if (!Directory.Exists(uploadsDir))
                return Results.Ok(Array.Empty<object>());

            var images = Directory.GetFiles(uploadsDir)
                .Where(f => !Path.GetFileName(f).StartsWith('.'))
                .Select(f =>
                {
                    var fileName = Path.GetFileName(f);
                    var metaFile = Path.Combine(metaDir, fileName + ".txt");
                    var altText = "";
                    var category = "general";

                    if (File.Exists(metaFile))
                    {
                        var lines = File.ReadAllLines(metaFile);
                        if (lines.Length > 0) altText = lines[0];
                        if (lines.Length > 1) category = lines[1];
                    }

                    return new
                    {
                        id = Path.GetFileNameWithoutExtension(f),
                        fileName,
                        altText,
                        category,
                        url = $"/uploads/images/{fileName}",
                        uploadedAt = File.GetCreationTimeUtc(f).ToString("yyyy-MM-dd")
                    };
                })
                .OrderByDescending(i => i.uploadedAt)
                .ToList();

            return Results.Ok(images);
        });

        group.MapPost("/", async (HttpRequest request, IWebHostEnvironment env) =>
        {
            if (!request.HasFormContentType)
                return Results.BadRequest(new { error = "Expected multipart form data." });

            var form = await request.ReadFormAsync();
            var file = form.Files.GetFile("file");

            if (file is null || file.Length == 0)
                return Results.BadRequest(new { error = "No file provided." });

            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg" };
            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!allowedExtensions.Contains(ext))
                return Results.BadRequest(new { error = $"File type '{ext}' is not allowed. Allowed: {string.Join(", ", allowedExtensions)}" });

            const long maxSize = 10 * 1024 * 1024; // 10 MB
            if (file.Length > maxSize)
                return Results.BadRequest(new { error = "File size must be under 10 MB." });

            var uploadsDir = Path.Combine(env.WebRootPath, "uploads", "images");
            var metaDir = Path.Combine(uploadsDir, ".meta");
            Directory.CreateDirectory(uploadsDir);
            Directory.CreateDirectory(metaDir);

            var uniqueName = $"{Guid.NewGuid():N}{ext}";
            var filePath = Path.Combine(uploadsDir, uniqueName);

            await using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var altText = form.TryGetValue("altText", out var alt) ? alt.ToString() : "";
            var category = form.TryGetValue("category", out var cat) ? cat.ToString() : "general";

            var metaFile = Path.Combine(metaDir, uniqueName + ".txt");
            await File.WriteAllLinesAsync(metaFile, new[] { altText, category });

            return Results.Ok(new
            {
                id = Path.GetFileNameWithoutExtension(uniqueName),
                fileName = uniqueName,
                altText,
                category,
                url = $"/uploads/images/{uniqueName}",
                uploadedAt = DateTime.UtcNow.ToString("yyyy-MM-dd")
            });
        }).DisableAntiforgery();

        group.MapDelete("/{id}", (string id, IWebHostEnvironment env) =>
        {
            var uploadsDir = Path.Combine(env.WebRootPath, "uploads", "images");
            var metaDir = Path.Combine(uploadsDir, ".meta");

            var matchingFile = Directory.Exists(uploadsDir)
                ? Directory.GetFiles(uploadsDir).FirstOrDefault(f => Path.GetFileNameWithoutExtension(f) == id)
                : null;

            if (matchingFile is null)
                return Results.NotFound(new { error = "Image not found." });

            var fileName = Path.GetFileName(matchingFile);
            File.Delete(matchingFile);

            var metaFile = Path.Combine(metaDir, fileName + ".txt");
            if (File.Exists(metaFile))
                File.Delete(metaFile);

            return Results.Ok(new { success = true });
        });
    }
}
