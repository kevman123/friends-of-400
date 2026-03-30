using FriendsOf400.Api.Models;

namespace FriendsOf400.Api.Services;

public class ContactService : IContactService
{
    public Task<ContactResponse> SubmitContactAsync(ContactRequest request)
    {
        // Stub implementation - email/notification integration will be added later
        return Task.FromResult(new ContactResponse(
            Success: true,
            Message: $"Thank you, {request.Name}! We'll be in touch soon."
        ));
    }
}
