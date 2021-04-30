using System;
using System.Collections.Generic;

namespace Localization.Api.Features
{
    public class ContactDto
    {
        public Guid? ContactId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public List<ContactPhoneDto> ContactPhones { get; set; } = new ();
    }
}
