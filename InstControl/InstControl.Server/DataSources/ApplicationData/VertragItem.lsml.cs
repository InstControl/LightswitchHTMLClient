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
        }

        partial void Dauer_Compute(ref int result)
        {
            result = (bis.Month - von.Month) + 12 * (bis.Year - von.Year);
        }
    }
}