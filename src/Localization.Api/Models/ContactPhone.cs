using Microsoft.EntityFrameworkCore;
using System;

namespace Localization.Api.Models
{
    [Owned]
    public class ContactPhone
    {
        public Guid ContactId { get; private set; }
        public string Value { get; private set; }
        public string Type { get; private set; } = PhoneType.Home;

        public ContactPhone(Guid contactId, string value, string type)
        {
            ContactId = contactId;
            Value = value;
            Type = type;
        }

        private ContactPhone()
        {

        }
    }
}
