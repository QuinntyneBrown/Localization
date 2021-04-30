using FluentValidation;
using Localization.Api.Core;
using Localization.Api.Interfaces;
using Localization.Api.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Localization.Api.Features
{
    public class UpdateContact
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(request => request.Contact).NotNull();
                RuleFor(request => request.Contact).SetValidator(new ContactValidator());
            }

        }

        public class Request : IRequest<Response>
        {
            public ContactDto Contact { get; set; }
        }

        public class Response : ResponseBase
        {
            public ContactDto Contact { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILocalizationDbContext _context;

            public Handler(ILocalizationDbContext context)
                => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var contact = await _context.Contacts.SingleAsync(x => x.ContactId == request.Contact.ContactId);

                contact.Update(request.Contact.Name, request.Contact.Email);

                contact.ContactPhones.Clear();

                foreach (var contactPhone in request.Contact.ContactPhones)
                {
                    contact.AddContactPhone(contactPhone.Value, (PhoneType)Enum.Parse(typeof(PhoneType), contactPhone.Type));
                }

                await _context.SaveChangesAsync(cancellationToken);

                return new()
                {
                    Contact = contact.ToDto()
                };
            }

        }
    }
}
