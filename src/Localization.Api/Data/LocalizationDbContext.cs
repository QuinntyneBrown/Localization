using Localization.Api.Models;
using Localization.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Localization.Api.Data
{
    public class LocalizationDbContext : DbContext, ILocalizationDbContext
    {
        public DbSet<Contact> Contacts { get; private set; }
        public LocalizationDbContext(DbContextOptions options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(LocalizationDbContext).Assembly);
        }

    }
}
