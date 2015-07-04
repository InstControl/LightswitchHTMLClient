/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.AbteilungItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer abteilungItem erstellt wird.
        /// <br/>created(msls.application.AbteilungItem entity)
        /// </field>
        created: [lightSwitchApplication.AbteilungItem]
    });

    msls._addEntryPoints(lightSwitchApplication.BeschäftigungsArtItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer beschäftigungsArtItem erstellt wird.
        /// <br/>created(msls.application.BeschäftigungsArtItem entity)
        /// </field>
        created: [lightSwitchApplication.BeschäftigungsArtItem]
    });

    msls._addEntryPoints(lightSwitchApplication.MitarbeiterItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer mitarbeiterItem erstellt wird.
        /// <br/>created(msls.application.MitarbeiterItem entity)
        /// </field>
        created: [lightSwitchApplication.MitarbeiterItem]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjektItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer projektItem erstellt wird.
        /// <br/>created(msls.application.ProjektItem entity)
        /// </field>
        created: [lightSwitchApplication.ProjektItem]
    });

    msls._addEntryPoints(lightSwitchApplication.StellenanteilItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer stellenanteilItem erstellt wird.
        /// <br/>created(msls.application.StellenanteilItem entity)
        /// </field>
        created: [lightSwitchApplication.StellenanteilItem]
    });

    msls._addEntryPoints(lightSwitchApplication.VertragItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer vertragItem erstellt wird.
        /// <br/>created(msls.application.VertragItem entity)
        /// </field>
        created: [lightSwitchApplication.VertragItem]
    });

    msls._addEntryPoints(lightSwitchApplication.VertragJeMonatItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer vertragJeMonatItem erstellt wird.
        /// <br/>created(msls.application.VertragJeMonatItem entity)
        /// </field>
        created: [lightSwitchApplication.VertragJeMonatItem]
    });

}(msls.application));
