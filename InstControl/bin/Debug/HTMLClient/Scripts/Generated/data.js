/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function AbteilungItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp AbteilungItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen abteilungItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Kürzel" type="String">
        /// Ruft den kürzel für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Langname" type="String">
        /// Ruft den langname für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="MitarbeiterItemCollection" type="msls.EntityCollection" elementType="msls.application.MitarbeiterItem">
        /// Ruft den mitarbeiterItemCollection für diesen abteilungItem ab.
        /// </field>
        /// <field name="ProjektItemCollection" type="msls.EntityCollection" elementType="msls.application.ProjektItem">
        /// Ruft den projektItemCollection für diesen abteilungItem ab.
        /// </field>
        /// <field name="Abteilungsleiter" type="msls.application.MitarbeiterItem">
        /// Ruft den abteilungsleiter für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen abteilungItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.AbteilungItem.Details">
        /// Ruft die Details für diesen abteilungItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function BeschäftigungsArtItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp BeschäftigungsArtItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen beschäftigungsArtItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Art" type="String">
        /// Ruft den art für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragItem" type="msls.EntityCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItem für diesen beschäftigungsArtItem ab.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen beschäftigungsArtItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.BeschäftigungsArtItem.Details">
        /// Ruft die Details für diesen beschäftigungsArtItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function MitarbeiterItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp MitarbeiterItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen mitarbeiterItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Nachname" type="String">
        /// Ruft den nachname für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Vorname" type="String">
        /// Ruft den vorname für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Geburtstag" type="Date">
        /// Ruft den geburtstag für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Erstanstellung" type="Date">
        /// Ruft den erstanstellung für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Ausscheidedatum" type="Date">
        /// Ruft den ausscheidedatum für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Bermerkung" type="String">
        /// Ruft den bermerkung für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Raum" type="String">
        /// Raumnummer
        /// </field>
        /// <field name="Telefon" type="String">
        /// Ruft den telefon für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Foto" type="String">
        /// Ruft den foto für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragItemCollection" type="msls.EntityCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItemCollection für diesen mitarbeiterItem ab.
        /// </field>
        /// <field name="PersonalNr" type="String">
        /// Ruft den personalNr für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Ruft den abteilungItem für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Abteilungsleiter" type="msls.EntityCollection" elementType="msls.application.AbteilungItem">
        /// Ruft den abteilungsleiter für diesen mitarbeiterItem ab.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen mitarbeiterItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.MitarbeiterItem.Details">
        /// Ruft die Details für diesen mitarbeiterItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjektItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp ProjektItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen projektItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ProjektKurzName" type="String">
        /// Ruft den projektKurzName für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ProjektLangName" type="String">
        /// Ruft den projektLangName für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Start" type="Date">
        /// Ruft den start für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Laufzeit" type="Number">
        /// Laufzeit in Monaten
        /// </field>
        /// <field name="PSPElement" type="String">
        /// Ruft den pSPElement für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Ruft den abteilungItem für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="StellenanteilItem" type="msls.EntityCollection" elementType="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItem für diesen projektItem ab.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen projektItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.ProjektItem.Details">
        /// Ruft die Details für diesen projektItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StellenanteilItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp StellenanteilItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen stellenanteilItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Stellenanteil" type="String">
        /// Ruft den stellenanteil für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragItem" type="msls.application.VertragItem">
        /// Ruft den vertragItem für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ProjektItem" type="msls.application.ProjektItem">
        /// Ruft den projektItem für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragJeMonatCollection" type="msls.EntityCollection" elementType="msls.application.VertragJeMonatItem">
        /// Ruft den vertragJeMonatCollection für diesen stellenanteilItem ab.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen stellenanteilItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.StellenanteilItem.Details">
        /// Ruft die Details für diesen stellenanteilItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function VertragItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp VertragItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen vertragItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="von" type="Date">
        /// Ruft den von für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="bis" type="Date">
        /// Ruft den bis für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="MitarbeiterItem" type="msls.application.MitarbeiterItem">
        /// Ruft den mitarbeiterItem für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="BeschäftigungsArtItem" type="msls.application.BeschäftigungsArtItem">
        /// Ruft den beschäftigungsArtItem für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="StellenanteilItemCollection" type="msls.EntityCollection" elementType="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItemCollection für diesen vertragItem ab.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen vertragItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.VertragItem.Details">
        /// Ruft die Details für diesen vertragItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function VertragJeMonatItem(entitySet) {
        /// <summary>
        /// Stellt den Entitätstyp VertragJeMonatItem dar.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// Der Entitätssatz, der diesen vertragJeMonatItem enthalten sollte.
        /// </param>
        /// <field name="Id" type="Number">
        /// Ruft den id für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Monat" type="Date">
        /// Ruft den monat für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="StellenanteilItem" type="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItem für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Ruft den createdBy für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Ruft den created für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Ruft den modifiedBy für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Ruft den modified für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Ruft den rowVersion für diesen vertragJeMonatItem ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.VertragJeMonatItem.Details">
        /// Ruft die Details für diesen vertragJeMonatItem ab.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Stellt den Datendienst ApplicationData dar.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// Der Datenarbeitsbereich, der diesen Datendienst erstellt hat.
        /// </param>
        /// <field name="AbteilungItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge AbteilungItemSet ab.
        /// </field>
        /// <field name="BeschäftigungsArtItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge BeschäftigungsArtItemSet ab.
        /// </field>
        /// <field name="MitarbeiterItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge MitarbeiterItemSet ab.
        /// </field>
        /// <field name="ProjektItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge ProjektItemSet ab.
        /// </field>
        /// <field name="StellenanteilItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge StellenanteilItemSet ab.
        /// </field>
        /// <field name="VertragItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge VertragItemSet ab.
        /// </field>
        /// <field name="VertragJeMonatItemSet" type="msls.EntitySet">
        /// Ruft die Entitätenmenge VertragJeMonatItemSet ab.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Ruft die Details für diesen Datendienst ab.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Stellt den Datenarbeitsbereich dar.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Ruft den Datendienst ApplicationData auf.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Ruft die Details für diesen Arbeitsbereich ab.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        AbteilungItem: $defineEntity(AbteilungItem, [
            { name: "Id", type: Number },
            { name: "Kürzel", type: String },
            { name: "Langname", type: String },
            { name: "MitarbeiterItemCollection", kind: "collection", elementType: MitarbeiterItem },
            { name: "ProjektItemCollection", kind: "collection", elementType: ProjektItem },
            { name: "Abteilungsleiter", kind: "reference", type: MitarbeiterItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        BeschäftigungsArtItem: $defineEntity(BeschäftigungsArtItem, [
            { name: "Id", type: Number },
            { name: "Art", type: String },
            { name: "VertragItem", kind: "collection", elementType: VertragItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        MitarbeiterItem: $defineEntity(MitarbeiterItem, [
            { name: "Id", type: Number },
            { name: "Nachname", type: String },
            { name: "Vorname", type: String },
            { name: "Geburtstag", type: Date },
            { name: "Erstanstellung", type: Date },
            { name: "Ausscheidedatum", type: Date },
            { name: "Bermerkung", type: String },
            { name: "Raum", type: String },
            { name: "Telefon", type: String },
            { name: "Foto", type: String },
            { name: "VertragItemCollection", kind: "collection", elementType: VertragItem },
            { name: "PersonalNr", type: String },
            { name: "AbteilungItem", kind: "reference", type: AbteilungItem },
            { name: "Abteilungsleiter", kind: "collection", elementType: AbteilungItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProjektItem: $defineEntity(ProjektItem, [
            { name: "Id", type: Number },
            { name: "ProjektKurzName", type: String },
            { name: "ProjektLangName", type: String },
            { name: "Start", type: Date },
            { name: "Laufzeit", type: Number },
            { name: "PSPElement", type: String },
            { name: "AbteilungItem", kind: "reference", type: AbteilungItem },
            { name: "StellenanteilItem", kind: "collection", elementType: StellenanteilItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StellenanteilItem: $defineEntity(StellenanteilItem, [
            { name: "Id", type: Number },
            { name: "Stellenanteil", type: String },
            { name: "VertragItem", kind: "reference", type: VertragItem },
            { name: "ProjektItem", kind: "reference", type: ProjektItem },
            { name: "VertragJeMonatCollection", kind: "collection", elementType: VertragJeMonatItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        VertragItem: $defineEntity(VertragItem, [
            { name: "Id", type: Number },
            { name: "von", type: Date },
            { name: "bis", type: Date },
            { name: "MitarbeiterItem", kind: "reference", type: MitarbeiterItem },
            { name: "BeschäftigungsArtItem", kind: "reference", type: BeschäftigungsArtItem },
            { name: "StellenanteilItemCollection", kind: "collection", elementType: StellenanteilItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        VertragJeMonatItem: $defineEntity(VertragJeMonatItem, [
            { name: "Id", type: Number },
            { name: "Monat", type: Date },
            { name: "StellenanteilItem", kind: "reference", type: StellenanteilItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "AbteilungItemSet", elementType: AbteilungItem },
            { name: "BeschäftigungsArtItemSet", elementType: BeschäftigungsArtItem },
            { name: "MitarbeiterItemSet", elementType: MitarbeiterItem },
            { name: "ProjektItemSet", elementType: ProjektItem },
            { name: "StellenanteilItemSet", elementType: StellenanteilItem },
            { name: "VertragItemSet", elementType: VertragItem },
            { name: "VertragJeMonatItemSet", elementType: VertragJeMonatItem }
        ], [
            {
                name: "AbteilungItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AbteilungItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AbteilungItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BeschäftigungsArtItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.BeschäftigungsArtItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/BeschäftigungsArtItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MitarbeiterItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.MitarbeiterItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MitarbeiterItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MitarbeiterAusgeschieden", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.MitarbeiterItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MitarbeiterAusgeschieden()",
                        {
                        });
                }
            },
            {
                name: "MitarbeiterMitAktuellemVertrag", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.MitarbeiterItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MitarbeiterMitAktuellemVertrag()",
                        {
                        });
                }
            },
            {
                name: "MitarbeiterMitAuslaufendemVertrag", value: function (Monate) {
                    return new $DataServiceQuery({ _entitySet: this.MitarbeiterItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MitarbeiterMitAuslaufendemVertrag()",
                        {
                            Monate: $toODataString(Monate, "Int32?")
                        });
                }
            },
            {
                name: "MitarbeiterOhneAktuellenVertrag", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.MitarbeiterItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MitarbeiterOhneAktuellenVertrag()",
                        {
                        });
                }
            },
            {
                name: "ProjektItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProjektItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProjektItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StellenanteilItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StellenanteilItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StellenanteilItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "VertragItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.VertragItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/VertragItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "VertragJeMonatItemSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.VertragJeMonatItemSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/VertragJeMonatItemSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
