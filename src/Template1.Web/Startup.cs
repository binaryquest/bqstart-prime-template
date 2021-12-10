using BinaryQuest.Framework.Core.Extensions;
using BinaryQuest.Framework.Core.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Template1.Data;
using Template1.Web.Controllers;
using TimeZoneConverter;

namespace Template1.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        
        /// <summary>
        /// Configure all required Services here
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            #region Standard Services
            services.AddLogging(loggingBuilder => loggingBuilder.AddSerilog(dispose: true));

            services.AddDbContext<MainDataContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));

            services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<MainDataContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, MainDataContext>()
                .AddProfileService<ProfileService<ApplicationUser>>();
            #endregion

            services.AddAuthentication()
                .AddIdentityServerJwt().AddGoogle(options =>
                {
                    //TODO: if you want to have Google Authentication you need to supply the following
                    //values
                    options.ClientId = "<>";
                    options.ClientSecret = "<>";
                });

            //---------------------------------------------------------------------------------------------
            //BQ Admin related
            //---------------------------------------------------------------------------------------------
            services.AddBqAdminServices<ApplicationUser, MainDataContext>(options =>
                options.SetApplicationName("Template1 bqStart")
                //allow open user registrations
                .SetAllowUserRegistration(false)
                //change default timezone
                .SetDefaultTimeZone(TZConvert.GetTimeZoneInfo("UTC"))
                //change default language
                .SetDefaultLanguage("en_AU")
                .SetSecurityRulesProvider(new FileBasedSecurityRulesProvider("config"))
                //register all OData controllers here
                .RegisterController<IdentityRole, IdentityRoleController>()
                .RegisterController<ApplicationUser, ApplicationUserController>()
                //.RegisterController<Customer, CustomerController>()                
                );
            

            services.AddRazorPages().AddRazorRuntimeCompilation();

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });
        }
        
        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            var logger = loggerFactory.CreateLogger("Startup");

            if (env.IsDevelopment())
            {
                logger.LogDebug("Startup Configure Stage DEBUG");
                app.UseDeveloperExceptionPage();                
                app.UseODataRouteDebug();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            //---------------------------------------------------------------------------------------------
            // Load all middlewares we need from the framework
            // and register the endpoints we will need for data
            //---------------------------------------------------------------------------------------------
            app.UseBQAdmin<MainDataContext>().Build();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    //---------------------------------------------------------------------------------------------
                    // Enable this line if you want to run ng serve command from a console seperate while developing
                    //---------------------------------------------------------------------------------------------
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                    //---------------------------------------------------------------------------------------------
                    // OR
                    //---------------------------------------------------------------------------------------------
                    // Enable this line if you want to run ng serve inside visual studio debuggers
                    //---------------------------------------------------------------------------------------------
                    //spa.UseAngularCliServer(npmScript: "ng serve");
                    //---------------------------------------------------------------------------------------------
                }
            });
        }
    }
}
