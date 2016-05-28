using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class MitarbeiterItem
    {
        partial void Name_Compute(ref string result)
        {
            result = Name +", "+ Vorname.ElementAtOrDefault(1);
        }

        partial void hatAktuellenVertrag_Compute(ref bool result)
        {
            DateTime Today = DateTime.Today;
            if (VertragItemCollection.Count(q => (q.von <= Today) && (q.bis >= Today))==1)
            {
                result = true;
            }
        }

        partial void UserID_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
        }
    }
}