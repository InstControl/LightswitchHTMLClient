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
        /// Represents the AbteilungItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this abteilungItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this abteilungItem.
        /// </field>
        /// <field name="Kürzel" type="String">
        /// Gets or sets the kürzel for this abteilungItem.
        /// </field>
        /// <field name="Langname" type="String">
        /// Gets or sets the langname for this abteilungItem.
        /// </field>
        /// <field name="MitarbeiterItemCollection" type="msls.EntityCollection" elementType="msls.application.MitarbeiterItem">
        /// Gets the mitarbeiterItemCollection for this abteilungItem.
        /// </field>
        /// <field name="ProjektItemCollection" type="msls.EntityCollection" elementType="msls.application.ProjektItem">
        /// Gets the projektItemCollection for this abteilungItem.
        /// </field>
        /// <field name="Abteilungsleiter" type="msls.application.MitarbeiterItem">
        /// Gets or sets the abteilungsleiter for this abteilungItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this abteilungItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this abteilungItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this abteilungItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this abteilungItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this abteilungItem.
        /// </field>
        /// <field name="details" type="msls.application.AbteilungItem.Details">
        /// Gets the details for this abteilungItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function BeschäftigungsArtItem(entitySet) {
        /// <summary>
        /// Represents the BeschäftigungsArtItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this beschäftigungsArtItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this beschäftigungsArtItem.
        /// </field>
        /// <field name="Art" type="String">
        /// Gets or sets the art for this beschäftigungsArtItem.
        /// </field>
        /// <field name="VertragItem" type="msls.EntityCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItem for this beschäftigungsArtItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this beschäftigungsArtItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this beschäftigungsArtItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this beschäftigungsArtItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this beschäftigungsArtItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this beschäftigungsArtItem.
        /// </field>
        /// <field name="details" type="msls.application.BeschäftigungsArtItem.Details">
        /// Gets the details for this beschäftigungsArtItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function MitarbeiterItem(entitySet) {
        /// <summary>
        /// Represents the MitarbeiterItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this mitarbeiterItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this mitarbeiterItem.
        /// </field>
        /// <field name="Nachname" type="String">
        /// Gets or sets the nachname for this mitarbeiterItem.
        /// </field>
        /// <field name="Vorname" type="String">
        /// Gets or sets the vorname for this mitarbeiterItem.
        /// </field>
        /// <field name="Geburtstag" type="Date">
        /// Gets or sets the geburtstag for this mitarbeiterItem.
        /// </field>
        /// <field name="Erstanstellung" type="Date">
        /// Gets or sets the erstanstellung for this mitarbeiterItem.
        /// </field>
        /// <field name="Ausscheidedatum" type="Date">
        /// Gets or sets the ausscheidedatum for this mitarbeiterItem.
        /// </field>
        /// <field name="Bermerkung" type="String">
        /// Gets or sets the bermerkung for this mitarbeiterItem.
        /// </field>
        /// <field name="Raum" type="String">
        /// Raumnummer
        /// </field>
        /// <field name="Telefon" type="String">
        /// Gets or sets the telefon for this mitarbeiterItem.
        /// </field>
        /// <field name="Foto" type="String">
        /// Gets or sets the foto for this mitarbeiterItem.
        /// </field>
        /// <field name="VertragItemCollection" type="msls.EntityCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItemCollection for this mitarbeiterItem.
        /// </field>
        /// <field name="PersonalNr" type="String">
        /// Gets or sets the personalNr for this mitarbeiterItem.
        /// </field>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Gets or sets the abteilungItem for this mitarbeiterItem.
        /// </field>
        /// <field name="Abteilungsleiter" type="msls.application.AbteilungItem">
        /// Gets or sets the abteilungsleiter for this mitarbeiterItem.
        /// </field>
        /// <field name="UserID" type="String">
        /// Eindeutiges Kürzel zur Identifikation der Person
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this mitarbeiterItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this mitarbeiterItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this mitarbeiterItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this mitarbeiterItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this mitarbeiterItem.
        /// </field>
        /// <field name="details" type="msls.application.MitarbeiterItem.Details">
        /// Gets the details for this mitarbeiterItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjektItem(entitySet) {
        /// <summary>
        /// Represents the ProjektItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projektItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this projektItem.
        /// </field>
        /// <field name="ProjektKurzName" type="String">
        /// Gets or sets the projektKurzName for this projektItem.
        /// </field>
        /// <field name="ProjektLangName" type="String">
        /// Gets or sets the projektLangName for this projektItem.
        /// </field>
        /// <field name="Start" type="Date">
        /// Gets or sets the start for this projektItem.
        /// </field>
        /// <field name="Laufzeit" type="Number">
        /// Laufzeit in Monaten
        /// </field>
        /// <field name="PSPElement" type="String">
        /// Gets or sets the pSPElement for this projektItem.
        /// </field>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Gets or sets the abteilungItem for this projektItem.
        /// </field>
        /// <field name="StellenanteilItem" type="msls.EntityCollection" elementType="msls.application.StellenanteilItem">
        /// Gets the stellenanteilItem for this projektItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this projektItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this projektItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this projektItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this projektItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this projektItem.
        /// </field>
        /// <field name="details" type="msls.application.ProjektItem.Details">
        /// Gets the details for this projektItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StellenanteilItem(entitySet) {
        /// <summary>
        /// Represents the StellenanteilItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stellenanteilItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stellenanteilItem.
        /// </field>
        /// <field name="Stellenanteil" type="String">
        /// Gets or sets the stellenanteil for this stellenanteilItem.
        /// </field>
        /// <field name="VertragItem" type="msls.application.VertragItem">
        /// Gets or sets the vertragItem for this stellenanteilItem.
        /// </field>
        /// <field name="ProjektItem" type="msls.application.ProjektItem">
        /// Gets or sets the projektItem for this stellenanteilItem.
        /// </field>
        /// <field name="VertragJeMonatCollection" type="msls.EntityCollection" elementType="msls.application.VertragJeMonatItem">
        /// Gets the vertragJeMonatCollection for this stellenanteilItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stellenanteilItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stellenanteilItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stellenanteilItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stellenanteilItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stellenanteilItem.
        /// </field>
        /// <field name="details" type="msls.application.StellenanteilItem.Details">
        /// Gets the details for this stellenanteilItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function VertragItem(entitySet) {
        /// <summary>
        /// Represents the VertragItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this vertragItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this vertragItem.
        /// </field>
        /// <field name="von" type="Date">
        /// Gets or sets the von for this vertragItem.
        /// </field>
        /// <field name="bis" type="Date">
        /// Gets or sets the bis for this vertragItem.
        /// </field>
        /// <field name="MitarbeiterItem" type="msls.application.MitarbeiterItem">
        /// Gets or sets the mitarbeiterItem for this vertragItem.
        /// </field>
        /// <field name="BeschäftigungsArtItem" type="msls.application.BeschäftigungsArtItem">
        /// Gets or sets the beschäftigungsArtItem for this vertragItem.
        /// </field>
        /// <field name="StellenanteilItemCollection" type="msls.EntityCollection" elementType="msls.application.StellenanteilItem">
        /// Gets the stellenanteilItemCollection for this vertragItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this vertragItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this vertragItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this vertragItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this vertragItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this vertragItem.
        /// </field>
        /// <field name="details" type="msls.application.VertragItem.Details">
        /// Gets the details for this vertragItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function VertragJeMonatItem(entitySet) {
        /// <summary>
        /// Represents the VertragJeMonatItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this vertragJeMonatItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this vertragJeMonatItem.
        /// </field>
        /// <field name="Monat" type="Date">
        /// Monat, in dem ein Vertrag besteht
        /// </field>
        /// <field name="StellenanteilItem" type="msls.application.StellenanteilItem">
        /// Stellenanteil von FTE (Full-time equivalent)
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this vertragJeMonatItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this vertragJeMonatItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this vertragJeMonatItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this vertragJeMonatItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this vertragJeMonatItem.
        /// </field>
        /// <field name="details" type="msls.application.VertragJeMonatItem.Details">
        /// Gets the details for this vertragJeMonatItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EnhancedMitarbeiter(entitySet) {
        /// <summary>
        /// Represents the EnhancedMitarbeiter entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this enhancedMitarbeiter.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this enhancedMitarbeiter.
        /// </field>
        /// <field name="UserID" type="String">
        /// Gets or sets the userID for this enhancedMitarbeiter.
        /// </field>
        /// <field name="aktuellerVertragBis" type="Date">
        /// Gets or sets the aktuellerVertragBis for this enhancedMitarbeiter.
        /// </field>
        /// <field name="details" type="msls.application.EnhancedMitarbeiter.Details">
        /// Gets the details for this enhancedMitarbeiter.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="AbteilungItemSet" type="msls.EntitySet">
        /// Gets the AbteilungItemSet entity set.
        /// </field>
        /// <field name="BeschäftigungsArtItemSet" type="msls.EntitySet">
        /// Gets the BeschäftigungsArtItemSet entity set.
        /// </field>
        /// <field name="MitarbeiterItemSet" type="msls.EntitySet">
        /// Gets the MitarbeiterItemSet entity set.
        /// </field>
        /// <field name="ProjektItemSet" type="msls.EntitySet">
        /// Gets the ProjektItemSet entity set.
        /// </field>
        /// <field name="StellenanteilItemSet" type="msls.EntitySet">
        /// Gets the StellenanteilItemSet entity set.
        /// </field>
        /// <field name="VertragItemSet" type="msls.EntitySet">
        /// Gets the VertragItemSet entity set.
        /// </field>
        /// <field name="VertragJeMonatItemSet" type="msls.EntitySet">
        /// Gets the VertragJeMonatItemSet entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function WCF_RIA_ServiceData(dataWorkspace) {
        /// <summary>
        /// Represents the WCF_RIA_ServiceData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="EnhancedMitarbeiters" type="msls.EntitySet">
        /// Gets the EnhancedMitarbeiters entity set.
        /// </field>
        /// <field name="details" type="msls.application.WCF_RIA_ServiceData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="WCF_RIA_ServiceData" type="msls.application.WCF_RIA_ServiceData">
        /// Gets the WCF_RIA_ServiceData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
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
            { name: "Abteilungsleiter", kind: "reference", type: AbteilungItem },
            { name: "UserID", type: String },
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

        EnhancedMitarbeiter: $defineEntity(EnhancedMitarbeiter, [
            { name: "ID", type: Number },
            { name: "UserID", type: String },
            { name: "aktuellerVertragBis", type: Date }
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

        WCF_RIA_ServiceData: $defineDataService(WCF_RIA_ServiceData, lightSwitchApplication.rootUri + "/WCF_RIA_ServiceData.svc", [
            { name: "EnhancedMitarbeiters", elementType: EnhancedMitarbeiter }
        ], [
            {
                name: "EnhancedMitarbeiters_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.EnhancedMitarbeiters },
                        lightSwitchApplication.rootUri + "/WCF_RIA_ServiceData.svc" + "/EnhancedMitarbeiters(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData },
            { name: "WCF_RIA_ServiceData", type: WCF_RIA_ServiceData }
        ])

    });

}(msls.application));
