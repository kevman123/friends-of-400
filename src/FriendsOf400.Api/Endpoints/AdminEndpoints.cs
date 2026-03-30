namespace FriendsOf400.Api.Endpoints;

public static class AdminEndpoints
{
    public static void MapAdminEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/admin").RequireAuthorization();

        group.MapGet("/stats", () =>
        {
            return Results.Ok(new
            {
                totalDonations = 24,
                totalAmount = 4850.00m,
                totalContacts = 12
            });
        });

        group.MapGet("/donations", () =>
        {
            var donations = new[]
            {
                new { id = "1", donorName = "John Smith", donorEmail = "john@example.com", amount = 100.00m, category = "General Fund", frequency = "one-time", date = "2026-03-15", referenceId = "FO400-20260315-A1B2C3D4" },
                new { id = "2", donorName = "Jane Doe", donorEmail = "jane@example.com", amount = 250.00m, category = "Educational Incentives", frequency = "monthly", date = "2026-03-18", referenceId = "FO400-20260318-E5F6G7H8" },
                new { id = "3", donorName = "Bob Wilson", donorEmail = "bob@example.com", amount = 50.00m, category = "Hygiene Kits", frequency = "one-time", date = "2026-03-20", referenceId = "FO400-20260320-I9J0K1L2" },
                new { id = "4", donorName = "Alice Johnson", donorEmail = "alice@example.com", amount = 500.00m, category = "Soccer Sponsorships", frequency = "monthly", date = "2026-03-22", referenceId = "FO400-20260322-M3N4O5P6" },
                new { id = "5", donorName = "Charlie Brown", donorEmail = "charlie@example.com", amount = 75.00m, category = "Transportation Fund", frequency = "one-time", date = "2026-03-25", referenceId = "FO400-20260325-Q7R8S9T0" },
            };
            return Results.Ok(donations);
        });

        group.MapGet("/contacts", () =>
        {
            var contacts = new[]
            {
                new { id = "1", name = "Maria Garcia", email = "maria@example.com", phone = "555-0101", message = "I'd like to volunteer on weekends with the youth soccer program.", type = "volunteer", date = "2026-03-14" },
                new { id = "2", name = "David Lee", email = "david@example.com", phone = "", message = "Our company is interested in sponsoring the educational incentives program.", type = "sponsor", date = "2026-03-17" },
                new { id = "3", name = "Sarah Kim", email = "sarah@example.com", phone = "555-0202", message = "How can I get my child involved in the programs?", type = "general", date = "2026-03-21" },
                new { id = "4", name = "Tom Martinez", email = "tom@example.com", phone = "555-0303", message = "I'm a retired teacher and would love to help with tutoring.", type = "volunteer", date = "2026-03-24" },
            };
            return Results.Ok(contacts);
        });
    }
}
