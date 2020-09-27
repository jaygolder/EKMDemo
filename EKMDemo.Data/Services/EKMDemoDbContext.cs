using EKMDemo.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EKMDemo.Data.Services
{
    public class EKMDemoDbContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; }
    }
}
