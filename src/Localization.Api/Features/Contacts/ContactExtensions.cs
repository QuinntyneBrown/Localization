using Localization.Api.Models;

namespace Localization.Api.Features
{
    public static class ContactExtensions
    {
        public static ContactDto ToDto(this Contact contact)
        {
            return new()
            {
                ContactId = contact.ContactId,
                Name = contact.Name,
                Email = contact.Email
            };
        }

    }
}
