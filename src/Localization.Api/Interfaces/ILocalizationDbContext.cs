using Localization.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace Localization.Api.Interfaces
{
    public interface ILocalizationDbContext
    {
        DbSet<Contact> Contacts { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

    }
}
