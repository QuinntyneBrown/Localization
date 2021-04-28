using Localization.Api.Core;
using Localization.Api.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Localization.Api.Features
{
    public class GetContactById
    {
        public class Request : IRequest<Response>
        {
            public Guid ContactId { get; set; }
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
                return new()
                {
                    Contact = (await _context.Contacts.SingleOrDefaultAsync(x => x.ContactId == request.ContactId)).ToDto()
                };
            }

        }
    }
}
