using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void StellenanteilItemSet_Inserted(StellenanteilItem entity)
        {  
            for (int i = 0; i <= entity.VertragItem.Dauer; i++)
            {
                VertragJeMonatItem VertragjeMonat=entity.VertragJeMonatCollection.AddNew();
                VertragjeMonat.Monat = entity.VertragItem.von.AddMonths(i);
                VertragjeMonat.Monat = new DateTime(VertragjeMonat.Monat.Year, VertragjeMonat.Monat.Month, 1);
            }
         }
    }
}