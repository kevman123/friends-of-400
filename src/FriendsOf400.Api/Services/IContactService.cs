using FriendsOf400.Api.Models;

namespace FriendsOf400.Api.Services;

public interface IContactService
{
    Task<ContactResponse> SubmitContactAsync(ContactRequest request);
}
