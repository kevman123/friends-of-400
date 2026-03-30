using FriendsOf400.Api.Models;

namespace FriendsOf400.Api.Services;

public class DonationService : IDonationService
{
    private static readonly List<DonationCategory> Categories =
    [
        new("general-fund", "General Fund", "Help meet urgent needs and sustain vital programs for local families and children."),
        new("monthly-support", "Monthly Support", "Become a monthly donor to provide consistent, reliable support."),
        new("educational-incentives", "Educational Incentives", "Fund prizes and rewards that keep students motivated to learn and grow."),
        new("hygiene-kits", "Hygiene Kits", "Provide essential hygiene supplies to kids in need."),
        new("soccer-sponsorships", "Soccer Sponsorships", "Cover uniforms, equipment, and league fees so every child can play."),
        new("transportation-fund", "Transportation Fund", "Help us purchase a van to transport kids to events and programs.")
    ];

    public Task<DonationResponse> ProcessDonationAsync(DonationRequest request)
    {
        // Stub implementation - payment processor integration will be added later
        var referenceId = $"FO400-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..8].ToUpperInvariant()}";

        return Task.FromResult(new DonationResponse(
            Success: true,
            ReferenceId: referenceId,
            Message: $"Thank you for your ${request.Amount} donation to {request.Category}!"
        ));
    }

    public IReadOnlyList<DonationCategory> GetCategories() => Categories;
}
