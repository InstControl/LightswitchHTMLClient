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
            DateTime Today = DateTime.Today;
            query = query.Where(
                p => !p.VertragItemCollection.Any(q => (q.von <= Today) && (q.bis >= Today))
            );
        }

        partial void MitarbeiterMitAktuellemVertrag_PreprocessQuery(ref IQueryable<MitarbeiterItem> query)
        {
            //Mitarbeiter, die einen aktuellen Vertrag haben
            DateTime Today = DateTime.Today;
            query = query.Where(p => p.VertragItemCollection.Any(q => (q.von <= Today) && (q.bis >= Today)));
        }

        partial void MitarbeiterMitAuslaufendemVertrag_PreprocessQuery(int? Monate, ref IQueryable<MitarbeiterItem> query)
        {

            //Mitarbeiter, die heute einen und in xx Monaten keinen aktuellen Vertrag mehr haben

            if (Monate == null)
            {
                Monate = 0;
            }
            DateTime DueDate = DateTime.Today.AddMonths(Monate.Value);
            query = query.Where(p => (p.VertragItemCollection.Max(q => q.bis) < DueDate) && (p.VertragItemCollection.Max(q => q.bis) >= DateTime.Today));
        }

        partial void VertragItemSet_Updated(VertragItem entity)
        {
            //Löscht die Einträge in VertragJeMonat und legt sie neu an.

            foreach (var Stellenanteil in entity.StellenanteilItemCollection)
            {
                Stellenanteil.VertragJeMonatCollection.ToList().ForEach(p=>p.Delete());
                StellenanteilItemSet_Inserted(Stellenanteil);
            }
        }

        partial void StellenanteilItemSet_Validate(StellenanteilItem entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.ProjektItem==null)
            {
                results.AddEntityError("Kein Projekt ausgewählt.");
            }
        }

        partial void VertragItemSet_Validate(VertragItem entity, EntitySetValidationResultsBuilder results)
        {
           
            if (entity.BeschäftigungsArtItem == null)
            {
                results.AddEntityError("Keine Beschäftigungsart ausgewählt.");
            }
            if (entity.StellenanteilItemCollection.Count() == 0 )
            {
                results.AddEntityError("Kein Stellenanteil hinzugefügt.");
                
            }
            if (entity.StellenanteilItemCollection.Sum(P => P.Stellenanteil ) >1 )
            {
                results.AddEntityError("Summe Stellenanteile grösser als 1,0.");
            }
            if (entity.MitarbeiterItem.VertragItemCollection.Count(
                p => p.StellenanteilItemCollection.Any(
                    q => q.VertragJeMonatCollection.Any(
                        r => (r.Monat.Month == p.von.Month) && (r.Monat.Year == p.von.Year)))) > 0)
            {
                //results.AddEntityError("Ein Vertrag in diesem Zeitraum existiert bereits.");
            }
        }

    }
}