using FriendsOf400.Api.Models;
using FriendsOf400.Api.Services;

namespace FriendsOf400.Api.Endpoints;

public static class DonationEndpoints
{
    private static readonly HashSet<string> ValidCategories =
    [
        "General Fund", "Monthly Support", "Educational Incentives",
        "Hygiene Kits", "Soccer Sponsorships", "Transportation Fund"
    ];

    private static readonly HashSet<string> ValidFrequencies = ["one-time", "monthly"];

    public static void MapDonationEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/donations");

        group.MapPost("/", async (DonationRequest request, IDonationService service) =>
        {
            if (request.Amount <= 0 || request.Amount > 50000)
                return Results.BadRequest("Amount must be between $1 and $50,000.");

            if (string.IsNullOrWhiteSpace(request.Category) || !ValidCategories.Contains(request.Category))
                return Results.BadRequest("Invalid donation category.");

            if (string.IsNullOrWhiteSpace(request.Frequency) || !ValidFrequencies.Contains(request.Frequency))
                return Results.BadRequest("Frequency must be 'one-time' or 'monthly'.");

            var response = await service.ProcessDonationAsync(request);
            return Results.Ok(response);
        });

        group.MapGet("/categories", (IDonationService service) =>
        {
            return Results.Ok(service.GetCategories());
        });
    }
}
