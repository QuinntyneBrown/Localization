using System;
using System.Collections.Generic;
using System.Linq;

namespace Localization.Api.Models
{
    public class Contact
    {
        public Guid ContactId { get; private set; }
        public string Name { get; private set; }
        public string Email { get; private set; }
        public List<ContactPhone> ContactPhones { get; private set; } = new();

        public Contact(string name, string email)
        {
            Name = name;
            Email = email;
        }

        private Contact()
        {

        }

        public void Update(string name, string email)
        {
            Name = name;
            Email = email;
        }

        public void AddContactPhone(string value, PhoneType type)
        {
            if (ContactPhones.SingleOrDefault(x => x.Value == value && x.Type == type) != null)
            {
                throw new Exception("Phone exists!");
            }
            ContactPhones.Add(new ContactPhone(ContactId, value, type));
        }
    }
}
