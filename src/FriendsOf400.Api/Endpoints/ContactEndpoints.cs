using FriendsOf400.Api.Models;
using FriendsOf400.Api.Services;

namespace FriendsOf400.Api.Endpoints;

public static class ContactEndpoints
{
    private static readonly HashSet<string> ValidTypes = ["general", "volunteer", "sponsor"];

    public static void MapContactEndpoints(this WebApplication app)
    {
        app.MapPost("/api/contact", async (ContactRequest request, IContactService service) =>
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                return Results.BadRequest("Name is required.");

            if (string.IsNullOrWhiteSpace(request.Email) || !request.Email.Contains('@'))
                return Results.BadRequest("A valid email is required.");

            if (string.IsNullOrWhiteSpace(request.Message))
                return Results.BadRequest("Message is required.");

            if (string.IsNullOrWhiteSpace(request.Type) || !ValidTypes.Contains(request.Type))
                return Results.BadRequest("Invalid contact type.");

            var response = await service.SubmitContactAsync(request);
            return Results.Ok(response);
        });
    }
}
