using System;

namespace Localization.Api.Features
{
    public class ContactDto
    {
        public Guid? ContactId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
