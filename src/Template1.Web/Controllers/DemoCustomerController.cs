using BinaryQuest.Framework.Core.Implementation;
using BinaryQuest.Framework.Core.Interface;
using Microsoft.Extensions.Logging;
using Template1.Data;

namespace Template1.Web.Controllers
{
    public class DemoCustomerController : GenericDataController<DemoCustomer, int>
    {
        public DemoCustomerController(IApplicationService applicationService, ILogger<DemoCustomerController> logger, MainDataContext context) :
        base(applicationService, logger, new UnitOfWork<ApplicationUser>(context))
        {

        }

        protected override dynamic OnGetLookupData()
        {
            var ret = new
            {
            };
            return ret;
        }
    }
}
