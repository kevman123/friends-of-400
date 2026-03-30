namespace FriendsOf400.Api.Models;

public record DonationRequest(
    string Category,
    decimal Amount,
    string Frequency,
    string? DonorName,
    string? DonorEmail
);
