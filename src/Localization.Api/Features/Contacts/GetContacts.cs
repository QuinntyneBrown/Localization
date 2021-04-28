using Localization.Api.Core;
using Localization.Api.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Localization.Api.Features
{
    public class GetContacts
    {
        public class Request : IRequest<Response> { }

        public class Response : ResponseBase
        {
            public List<ContactDto> Contacts { get; set; }
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
                    Contacts = await _context.Contacts.Select(x => x.ToDto()).ToListAsync()
                };
            }

        }
    }
}
