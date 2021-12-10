﻿using BinaryQuest.Framework.Core.Implementation;
using BinaryQuest.Framework.Core.Interface;
using Template1.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

namespace Template1.Web.Controllers
{
    public class ApplicationUserController : BaseUserController<ApplicationUser, string>
    {
        public ApplicationUserController(IApplicationService applicationService, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ILogger<ApplicationUserController> logger, MainDataContext context) :
        base(applicationService, userManager, roleManager, logger, new UnitOfWork<ApplicationUser>(context))
        {

        }
    }
}
