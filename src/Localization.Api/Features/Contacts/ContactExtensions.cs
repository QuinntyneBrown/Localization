using Localization.Api.Models;
using System.Linq;

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
                Email = contact.Email,
                ContactPhones = contact.ContactPhones.Select(x => x.ToDto()).ToList()
            };
        }

        public static ContactPhoneDto ToDto(this ContactPhone contact)
        {
            return new()
            {
                ContactId = contact.ContactId,
                Value = contact.Value,
                Type = contact.Type
            };
        }

    }
}
