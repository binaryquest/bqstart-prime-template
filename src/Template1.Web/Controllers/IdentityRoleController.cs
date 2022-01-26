using BinaryQuest.Framework.Core.Implementation;
using BinaryQuest.Framework.Core.Interface;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Template1.Data;

namespace Template1.Web.Controllers
{
    public class IdentityRoleController : BaseRoleController
    {
        public IdentityRoleController(IApplicationService applicationService, RoleManager<IdentityRole> roleManager, ILogger<IdentityRoleController> logger, MainDataContext context) :
        base(applicationService, roleManager, logger, new UnitOfWork<ApplicationUser>(context))
        {

        }
    }
}
