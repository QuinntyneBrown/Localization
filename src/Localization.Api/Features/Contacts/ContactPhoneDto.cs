using Localization.Api.Models;
using System;

namespace Localization.Api.Features
{
    public class ContactPhoneDto
    {
        public Guid? ContactId { get; set; }
        public string Value { get; set; }
        public string Type { get; set; }
    }
}
