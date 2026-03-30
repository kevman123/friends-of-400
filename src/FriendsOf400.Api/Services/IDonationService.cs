using FriendsOf400.Api.Models;

namespace FriendsOf400.Api.Services;

public interface IDonationService
{
    Task<DonationResponse> ProcessDonationAsync(DonationRequest request);
    IReadOnlyList<DonationCategory> GetCategories();
}
