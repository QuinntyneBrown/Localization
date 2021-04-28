using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Localization.Api.Core;
using Localization.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

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

                await _context.SaveChangesAsync(cancellationToken);

                return new()
                {
                    Contact = contact.ToDto()
                };
            }

        }
    }
}
