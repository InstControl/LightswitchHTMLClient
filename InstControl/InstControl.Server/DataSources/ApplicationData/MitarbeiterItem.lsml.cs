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
    }
}