/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.AbteilungItem, {
        /// <field>
        /// Called when a new abteilungItem is created.
        /// <br/>created(msls.application.AbteilungItem entity)
        /// </field>
        created: [lightSwitchApplication.AbteilungItem]
    });

    msls._addEntryPoints(lightSwitchApplication.BeschäftigungsArtItem, {
        /// <field>
        /// Called when a new beschäftigungsArtItem is created.
        /// <br/>created(msls.application.BeschäftigungsArtItem entity)
        /// </field>
        created: [lightSwitchApplication.BeschäftigungsArtItem]
    });

    msls._addEntryPoints(lightSwitchApplication.MitarbeiterItem, {
        /// <field>
        /// Called when a new mitarbeiterItem is created.
        /// <br/>created(msls.application.MitarbeiterItem entity)
        /// </field>
        created: [lightSwitchApplication.MitarbeiterItem]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjektItem, {
        /// <field>
        /// Called when a new projektItem is created.
        /// <br/>created(msls.application.ProjektItem entity)
        /// </field>
        created: [lightSwitchApplication.ProjektItem]
    });

    msls._addEntryPoints(lightSwitchApplication.StellenanteilItem, {
        /// <field>
        /// Called when a new stellenanteilItem is created.
        /// <br/>created(msls.application.StellenanteilItem entity)
        /// </field>
        created: [lightSwitchApplication.StellenanteilItem]
    });

    msls._addEntryPoints(lightSwitchApplication.VertragItem, {
        /// <field>
        /// Called when a new vertragItem is created.
        /// <br/>created(msls.application.VertragItem entity)
        /// </field>
        created: [lightSwitchApplication.VertragItem]
    });

    msls._addEntryPoints(lightSwitchApplication.VertragJeMonatItem, {
        /// <field>
        /// Called when a new vertragJeMonatItem is created.
        /// <br/>created(msls.application.VertragJeMonatItem entity)
        /// </field>
        created: [lightSwitchApplication.VertragJeMonatItem]
    });

    msls._addEntryPoints(lightSwitchApplication.EnhancedMitarbeiter, {
        /// <field>
        /// Called when a new enhancedMitarbeiter is created.
        /// <br/>created(msls.application.EnhancedMitarbeiter entity)
        /// </field>
        created: [lightSwitchApplication.EnhancedMitarbeiter]
    });

}(msls.application));
