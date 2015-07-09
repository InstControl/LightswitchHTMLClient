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
            //füllt die Tabelle VertragJeMonat aus

            for (int i = 0; i <= entity.VertragItem.Dauer; i++)
            {
                VertragJeMonatItem VertragJeMonat=entity.VertragJeMonatCollection.AddNew();
                VertragJeMonat.Monat = entity.VertragItem.von.AddMonths(i);
                VertragJeMonat.Monat = new DateTime(VertragJeMonat.Monat.Year, VertragJeMonat.Monat.Month, 1);
            }
         }

        partial void MitarbeiterOhneAktuellenVertrag_PreprocessQuery(ref IQueryable<MitarbeiterItem> query)
        {
            //Mitarbeiter deren letzter Vertrag bereits geendet ist oder die noch keinen Vertrag haben
            query = query.Where(p => (p.VertragItemCollection.Max(q => q.bis) <= DateTime.Today || p.VertragItemCollection.Count() == 0));
        }


        partial void MitarbeiterMitAktuellemVertrag_PreprocessQuery(ref IQueryable<MitarbeiterItem> query)
        {
            //Mitarbeiter, die einen aktuellen Vertrag haben
            query = query.Where(p => p.VertragItemCollection.Max(q => q.bis) >= DateTime.Today);
        }

        partial void MitarbeiterMitAuslaufendemVertrag_PreprocessQuery(int? Monate, ref IQueryable<MitarbeiterItem> query)
        {
            if (Monate == null)
            {
                Monate = 0;
            }
            DateTime DueDate = DateTime.Today.AddMonths(Monate.Value);
            query = query.Where(p => p.VertragItemCollection.Max(q => q.bis) < DueDate);
        }

        partial void Query_Executing(QueryExecutingDescriptor queryDescriptor)
        {

        }
    }
}