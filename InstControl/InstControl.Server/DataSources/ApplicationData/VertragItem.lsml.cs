using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class VertragItem
    {
        private DateTime VertragAb;

        partial void bis_Validate(EntityValidationResultsBuilder results)
        {
            if (bis <= von)
            {
                results.AddPropertyError("Bis-Datum liegt vor dem Von-Datum");
            }
            if (MitarbeiterItem.VertragItemCollection.Any(p => p.von <= bis && p.bis >= bis && p.Id != Id))
            {
                VertragAb = MitarbeiterItem.VertragItemCollection.Where(p => p.von <= bis && p.bis >= bis && p.Id!=Id).OrderBy(q=>q.von).First().von;
                results.AddPropertyError("Ein weiterer Vertrag ab "+ VertragAb.ToShortDateString() + " existiert bereits. Bitte ändern Sie das Bis-Datum!");
            }
        }

        partial void Dauer_Compute(ref int result)
        {
            result = (bis.Month - von.Month) + 12 * (bis.Year - von.Year);
        }

    }
}