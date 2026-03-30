namespace FriendsOf400.Api.Models;

public record ContactRequest(
    string Name,
    string Email,
    string? Phone,
    string Message,
    string Type
);
