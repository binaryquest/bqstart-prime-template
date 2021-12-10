using BinaryQuest.Framework.Core.Implementation;
using BinaryQuest.Framework.Core.Interface;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

namespace Template1.Web.Controllers
{
    public class IdentityRoleController : BaseRoleController
    {
        public IdentityRoleController(IApplicationService applicationService, RoleManager<IdentityRole> roleManager, ILogger<IdentityRoleController> logger) :
        base(applicationService, roleManager, logger)
        {

        }
    }
}
