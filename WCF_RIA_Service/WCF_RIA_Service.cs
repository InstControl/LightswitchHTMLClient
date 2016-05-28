using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.EntityClient;
using System.Web.Configuration;
using LightSwitchApplication.Implementation;
using System.ServiceModel.DomainServices.Server;
using System.ComponentModel.DataAnnotations;

namespace WCF_RIA_Service
{
    // This class is used as the class that is returned
    // This can have any 'shape' you desire
    // Make sure this is outside of the WCF_RIA_Service class
    // but inside the WCF_RIA_Project namespace
    public class EnhancedMitarbeiter
    {
        [Key]
        public int ID { get; set; }
        public string UserID { get; set; }
        public DateTime aktuellerVertragBis { get; set; }
        //public decimal? OrderTotal { get; set; }
    }
    public class WCF_RIA_Service : DomainService
    {
        DateTime Today = DateTime.Today;
        // This Context property is code that connects to the LightSwitch database
        // The code in the Database connection region can be reused as it is 
        #region Database connection
        private ApplicationData m_context;
        public ApplicationData Context
        {
            get
            {
                if (this.m_context == null)
                {
                    string connString =
                        System.Web.Configuration.WebConfigurationManager
                        .ConnectionStrings["_IntrinsicData"].ConnectionString;
                    EntityConnectionStringBuilder builder = new EntityConnectionStringBuilder();
                    builder.Metadata =
                        "res://*/ApplicationData.csdl|res://*/ApplicationData.ssdl|res://*/ApplicationData.msl";
                    builder.Provider =
                        "System.Data.SqlClient";
                    builder.ProviderConnectionString = connString;
                    this.m_context = new ApplicationData(builder.ConnectionString);
                }
                return this.m_context;
            }
        }
        #endregion
        [Query(IsDefault = true)]
        public IQueryable<EnhancedMitarbeiter> GetAllRecords()
        {
            // Get all the Order Details
            var colEnhancedMitarbeiter= from Mitarbeiter in this.Context.MitarbeiterItemSet
                                       // Shape the results into the 
                                       // EnhancedOrderDetail class
                                   select new EnhancedMitarbeiter
                                   {
                                       // Die Mitarbeiter ID
                                       ID = Mitarbeiter.Id,
                                       // Das Namenskürzel
                                       UserID = Mitarbeiter.UserID,
                                       // Das Datum des aktuellen Vertrages
                                       aktuellerVertragBis = Today,
                                       //Mitarbeiter.VertragItemCollection.FirstOrDefault(q => (q.von <= Today) && (q.bis >= Today)).bis,
                                       // Get all order details lines of the Order
                                       //(from OrderDetails in Mitarbeiter.OrderDetails
                                       //     // Group the products in the Order Details
                                       // group OrderDetails
                                       // by OrderDetails.OrderDetail_Product into grouping
                                       // // Shape a new entity
                                       // select new
                                       // {
                                       //     // Create a total property that is the Quantity times the
                                       //     // Product price
                                       //     TotalOrder = grouping.Sum(x => x.Quantity)
                                       //     * grouping.Sum(x => x.Product.ProductPrice),
                                       // }).Sum(x => x.TotalOrder) // Add the sum of all the TotalOrders
                                   };
            return colEnhancedMitarbeiter;
        }
        // Override the Count method in order for paging to work correctly
        protected override int Count<T>(IQueryable<T> query)
        {
            return query.Count();
        }
    }
}
