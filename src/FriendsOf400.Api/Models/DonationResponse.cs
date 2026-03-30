namespace FriendsOf400.Api.Models;

public record DonationResponse(
    bool Success,
    string ReferenceId,
    string Message
);
