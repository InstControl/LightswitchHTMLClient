using System.Linq.Expressions;
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
            query = query.Where(p => !p.VertragItemCollection.Any(q => (q.von <= Today) && (q.bis >= Today)));
        }

        partial void MitarbeiterMitAktuellemVertrag_PreprocessQuery(ref IQueryable<MitarbeiterItem> query)
        {
            //Mitarbeiter, die einen aktuellen Vertrag haben
            DateTime Today = DateTime.Today;
            query = query.Where(p => p.VertragItemCollection.Any(q => (q.von <= Today) && (q.bis >= Today)));
        }

        partial void MitarbeiterMitAuslaufendemVertrag_PreprocessQuery(int? Monate, ref IQueryable<MitarbeiterItem> query)
        {

            //Mitarbeiter, die heute einen... 
            DateTime Today = DateTime.Today;
            query = query.Where(p => p.VertragItemCollection.Any(q => (q.von <= Today) && (q.bis >= Today)));

            if (Monate == null)
            {
                Monate = 0;
            }
            
            //...und in xx Monaten keinen aktuellen Vertrag mehr haben
            DateTime DueDate = new DateTime(DateTime.Today.AddMonths(Monate.Value+1).Year, DateTime.Today.AddMonths(Monate.Value+1).Month,1).Date;
            query = query.Where(p => !p.VertragItemCollection.Any(q => (q.von <= DueDate) && (q.bis >= DueDate)));
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
            if (entity.VertragItem.StellenanteilItemCollection.Sum(P => P.Stellenanteil) > 1)
            {
                results.AddEntityError("Summe der Stellenanteile darf nicht grösser als 1 sein!");
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
            //if (entity.MitarbeiterItem.VertragItemCollection.Where(p => (p.bis >= entity.von && p.von <= entity.bis)).Count() > 1 )
            //    // wenn ein Vertrag in diesem Zeitraum bereits existiert:
            //{
            //    results.AddEntityError("Ein Vertrag in diesem Zeitraum existiert bereits.");
            //}
        }

        partial void StellenanteilItemSet_Deleting(StellenanteilItem entity)
        {
            if (entity.VertragItem != null)
            {
                if (entity.VertragItem.StellenanteilItemCollection.Count() == 0)
                {
                    throw new ValidationException("Es muss mindestens ein Stellenanteil vorhanden sein!");
                }
            }
        }

        //partial void Query_Executing(QueryExecutingDescriptor queryDescriptor)
        //{
        //    foreach (var Mitarbeiter in MitarbeiterItemSet.GetQuery().)
        //    {
        //        if (Mitarbeiter.hatAktuellenVertrag)
        //        {
        //            DateTime Today = DateTime.Today;
        //            Mitarbeiter.aktuellerVertragBis = Mitarbeiter.VertragItemCollectionQuery.Where(q => (q.von <= Today) && (q.bis >= Today)).First().bis;
        //        }
        //        else
        //        {
        //            Mitarbeiter.aktuellerVertragBis = null;
        //        }
        //    }
        //}


    }
}