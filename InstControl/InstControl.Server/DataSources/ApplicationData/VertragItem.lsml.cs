using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class VertragItem
    {
        partial void bis_Validate(EntityValidationResultsBuilder results)
        {
            if (bis <= von)
            {
                results.AddPropertyError("Bis-Datum liegt vor dem Von-Datum");
            }
            if (StellenanteilItemCollection.Count() <= 0)
            {
                results.AddPropertyError("Kein Stellenanteil erfasst");
            }
        }

        partial void Stellenanteil_Compute(ref decimal? result)
        {
            // Ergebnis auf den gewünschten Feldwert festlegen
            result = StellenanteilItemCollection.Sum(p => p.Stellenanteil);
        }

        partial void Dauer_Compute(ref int result)
        {
            result = (bis.Year - von.Year) * 12 + bis.Month - von.Month;
        }
    }
}