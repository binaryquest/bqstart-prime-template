using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(Template1.Web.Areas.Identity.IdentityHostingStartup))]
namespace Template1.Web.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}