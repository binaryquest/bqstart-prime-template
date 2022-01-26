using BinaryQuest.Framework.Core.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template1.Data
{
    public class DemoCustomer : BaseEntity<int>
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; } = null!;
    }
}
