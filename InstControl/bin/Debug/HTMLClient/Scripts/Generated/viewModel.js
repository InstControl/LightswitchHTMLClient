/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAbteilungItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAbteilungItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Gets or sets the abteilungItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAbteilungItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAbteilungItem", parameters);
    }

    function BrowseAbteilungItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAbteilungItemSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AbteilungItemSet" type="msls.VisualCollection" elementType="msls.application.AbteilungItem">
        /// Gets the abteilungItemSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAbteilungItemSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAbteilungItemSet", parameters);
    }

    function ViewAbteilungItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewAbteilungItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Gets or sets the abteilungItem for this screen.
        /// </field>
        /// <field name="MitarbeiterItemCollection" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Gets the mitarbeiterItemCollection for this screen.
        /// </field>
        /// <field name="ProjektItemCollection" type="msls.VisualCollection" elementType="msls.application.ProjektItem">
        /// Gets the projektItemCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewAbteilungItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewAbteilungItem", parameters);
    }

    function AddEditBeschäftigungsArtItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBeschäftigungsArtItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BeschäftigungsArtItem" type="msls.application.BeschäftigungsArtItem">
        /// Gets or sets the beschäftigungsArtItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBeschäftigungsArtItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBeschäftigungsArtItem", parameters);
    }

    function BrowseBeschäftigungsArtItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBeschäftigungsArtItemSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BeschäftigungsArtItemSet" type="msls.VisualCollection" elementType="msls.application.BeschäftigungsArtItem">
        /// Gets the beschäftigungsArtItemSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBeschäftigungsArtItemSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBeschäftigungsArtItemSet", parameters);
    }

    function ViewBeschäftigungsArtItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewBeschäftigungsArtItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BeschäftigungsArtItem" type="msls.application.BeschäftigungsArtItem">
        /// Gets or sets the beschäftigungsArtItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewBeschäftigungsArtItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewBeschäftigungsArtItem", parameters);
    }

    function AddEditKontoItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditKontoItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditKontoItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditKontoItem", parameters);
    }

    function BrowseKontoItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseKontoItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.BrowseKontoItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseKontoItem", parameters);
    }

    function ViewKontoItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewKontoItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.ViewKontoItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewKontoItem", parameters);
    }

    function AddEditMitarbeiter(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditMitarbeiter screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MitarbeiterItem" type="msls.application.MitarbeiterItem">
        /// Gets or sets the mitarbeiterItem for this screen.
        /// </field>
        /// <field name="VertragItemCollection" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItemCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMitarbeiter.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMitarbeiter", parameters);
    }

    function BrowseMitarbeiterSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMitarbeiterSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MitarbeiterAktuell" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Gets the mitarbeiterAktuell for this screen.
        /// </field>
        /// <field name="MitarbeiterOhneAktuellenVertrag" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Gets the mitarbeiterOhneAktuellenVertrag for this screen.
        /// </field>
        /// <field name="MitarbeiterAusgeschieden" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Gets the mitarbeiterAusgeschieden for this screen.
        /// </field>
        /// <field name="MitarbeiterMitAuslaufendenVertrag" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Gets the mitarbeiterMitAuslaufendenVertrag for this screen.
        /// </field>
        /// <field name="Monate" type="Number">
        /// Gets or sets the monate for this screen.
        /// </field>
        /// <field name="VertragBis" type="Date">
        /// Gets or sets the vertragBis for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMitarbeiterSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMitarbeiterSet", parameters);
    }

    function ViewMitarbeiter(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewMitarbeiter screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MitarbeiterItem" type="msls.application.MitarbeiterItem">
        /// Gets or sets the mitarbeiterItem for this screen.
        /// </field>
        /// <field name="VertragItemCollectionCurrent" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItemCollectionCurrent for this screen.
        /// </field>
        /// <field name="VertragItemCollectionPlanned" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItemCollectionPlanned for this screen.
        /// </field>
        /// <field name="VertragItemCollectionEnded" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItemCollectionEnded for this screen.
        /// </field>
        /// <field name="StellenanteilItemCollection" type="msls.VisualCollection" elementType="msls.application.StellenanteilItem">
        /// Gets the stellenanteilItemCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewMitarbeiter.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewMitarbeiter", parameters);
    }

    function AddEditProjektItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjektItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjektItem" type="msls.application.ProjektItem">
        /// Gets or sets the projektItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjektItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjektItem", parameters);
    }

    function BrowseProjektItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjektItemSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjektItemSet" type="msls.VisualCollection" elementType="msls.application.ProjektItem">
        /// Gets the projektItemSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjektItemSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjektItemSet", parameters);
    }

    function ViewProjektItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewProjektItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjektItem" type="msls.application.ProjektItem">
        /// Gets or sets the projektItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewProjektItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewProjektItem", parameters);
    }

    function AddEditStellenanteilItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStellenanteilItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StellenanteilItem" type="msls.application.StellenanteilItem">
        /// Gets or sets the stellenanteilItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStellenanteilItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStellenanteilItem", parameters);
    }

    function BrowseStellenanteilItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseStellenanteilItemSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StellenanteilItemSet" type="msls.VisualCollection" elementType="msls.application.StellenanteilItem">
        /// Gets the stellenanteilItemSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStellenanteilItemSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStellenanteilItemSet", parameters);
    }

    function ViewStellenanteilItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewStellenanteilItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StellenanteilItem" type="msls.application.StellenanteilItem">
        /// Gets or sets the stellenanteilItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewStellenanteilItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewStellenanteilItem", parameters);
    }

    function AddEditVertragItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditVertragItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="VertragItem" type="msls.application.VertragItem">
        /// Gets or sets the vertragItem for this screen.
        /// </field>
        /// <field name="StellenanteilItemCollection" type="msls.VisualCollection" elementType="msls.application.StellenanteilItem">
        /// Gets the stellenanteilItemCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditVertragItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditVertragItem", parameters);
    }

    function BrowseVertragItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseVertragItemSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="VertragItemSet" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Gets the vertragItemSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseVertragItemSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseVertragItemSet", parameters);
    }

    function ViewVertragItem(parameters, dataWorkspace) {
        /// <summary>
        /// zeigt die aktuellen Vertragsdaten
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="VertragItem" type="msls.application.VertragItem">
        /// Gets or sets the vertragItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewVertragItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewVertragItem", parameters);
    }

    function BrowseVertragJeMonatItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseVertragJeMonatItemSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="VertragJeMonatItemSet" type="msls.VisualCollection" elementType="msls.application.VertragJeMonatItem">
        /// Gets the vertragJeMonatItemSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseVertragJeMonatItemSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseVertragJeMonatItemSet", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAbteilungItem: $defineScreen(AddEditAbteilungItem, [
            { name: "AbteilungItem", kind: "local", type: lightSwitchApplication.AbteilungItem }
        ], [
        ]),

        BrowseAbteilungItemSet: $defineScreen(BrowseAbteilungItemSet, [
            {
                name: "AbteilungItemSet", kind: "collection", elementType: lightSwitchApplication.AbteilungItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.AbteilungItemSet;
                }
            }
        ], [
        ]),

        ViewAbteilungItem: $defineScreen(ViewAbteilungItem, [
            { name: "AbteilungItem", kind: "local", type: lightSwitchApplication.AbteilungItem },
            {
                name: "MitarbeiterItemCollection", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                getNavigationProperty: function () {
                    if (this.owner.AbteilungItem) {
                        return this.owner.AbteilungItem.details.properties.MitarbeiterItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "ProjektItemCollection", kind: "collection", elementType: lightSwitchApplication.ProjektItem,
                getNavigationProperty: function () {
                    if (this.owner.AbteilungItem) {
                        return this.owner.AbteilungItem.details.properties.ProjektItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditBeschäftigungsArtItem: $defineScreen(AddEditBeschäftigungsArtItem, [
            { name: "BeschäftigungsArtItem", kind: "local", type: lightSwitchApplication.BeschäftigungsArtItem }
        ], [
        ]),

        BrowseBeschäftigungsArtItemSet: $defineScreen(BrowseBeschäftigungsArtItemSet, [
            {
                name: "BeschäftigungsArtItemSet", kind: "collection", elementType: lightSwitchApplication.BeschäftigungsArtItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.BeschäftigungsArtItemSet;
                }
            }
        ], [
        ]),

        ViewBeschäftigungsArtItem: $defineScreen(ViewBeschäftigungsArtItem, [
            { name: "BeschäftigungsArtItem", kind: "local", type: lightSwitchApplication.BeschäftigungsArtItem }
        ], [
        ]),

        AddEditKontoItem: $defineScreen(AddEditKontoItem, [
        ], [
        ]),

        BrowseKontoItem: $defineScreen(BrowseKontoItem, [
        ], [
        ]),

        ViewKontoItem: $defineScreen(ViewKontoItem, [
        ], [
        ]),

        AddEditMitarbeiter: $defineScreen(AddEditMitarbeiter, [
            { name: "MitarbeiterItem", kind: "local", type: lightSwitchApplication.MitarbeiterItem },
            {
                name: "VertragItemCollection", kind: "collection", elementType: lightSwitchApplication.VertragItem,
                getNavigationProperty: function () {
                    if (this.owner.MitarbeiterItem) {
                        return this.owner.MitarbeiterItem.details.properties.VertragItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "Delete" }
        ]),

        BrowseMitarbeiterSet: $defineScreen(BrowseMitarbeiterSet, [
            {
                name: "MitarbeiterAktuell", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.MitarbeiterMitAktuellemVertrag();
                }
            },
            {
                name: "MitarbeiterOhneAktuellenVertrag", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.MitarbeiterOhneAktuellenVertrag();
                }
            },
            {
                name: "MitarbeiterAusgeschieden", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.MitarbeiterAusgeschieden();
                }
            },
            {
                name: "MitarbeiterMitAuslaufendenVertrag", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                createQuery: function (Monate) {
                    return this.dataWorkspace.ApplicationData.MitarbeiterMitAuslaufendemVertrag(Monate);
                }
            },
            { name: "Monate", kind: "local", type: Number },
            { name: "VertragBis", kind: "local", type: Date }
        ], [
            { name: "Delete" }
        ]),

        ViewMitarbeiter: $defineScreen(ViewMitarbeiter, [
            { name: "MitarbeiterItem", kind: "local", type: lightSwitchApplication.MitarbeiterItem },
            {
                name: "VertragItemCollectionCurrent", kind: "collection", elementType: lightSwitchApplication.VertragItem,
                getNavigationProperty: function () {
                    if (this.owner.MitarbeiterItem) {
                        return this.owner.MitarbeiterItem.details.properties.VertragItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    var today1 = msls.relativeDates.today();
                    return this.filter("(von lt " + $toODataString(today1, "DateTime") + ") and (bis ge " + $toODataString(today1, "DateTime") + ")").orderBy("von").expand("BeschäftigungsArtItem");
                }
            },
            {
                name: "VertragItemCollectionPlanned", kind: "collection", elementType: lightSwitchApplication.VertragItem,
                getNavigationProperty: function () {
                    if (this.owner.MitarbeiterItem) {
                        return this.owner.MitarbeiterItem.details.properties.VertragItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    var today1 = msls.relativeDates.today();
                    return this.filter("(von gt " + $toODataString(today1, "DateTime") + ") and (bis gt " + $toODataString(today1, "DateTime") + ")").orderBy("von");
                }
            },
            {
                name: "VertragItemCollectionEnded", kind: "collection", elementType: lightSwitchApplication.VertragItem,
                getNavigationProperty: function () {
                    if (this.owner.MitarbeiterItem) {
                        return this.owner.MitarbeiterItem.details.properties.VertragItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    var today1 = msls.relativeDates.today();
                    return this.filter("bis lt " + $toODataString(today1, "DateTime") + "").orderByDescending("bis");
                }
            },
            {
                name: "StellenanteilItemCollection", kind: "collection", elementType: lightSwitchApplication.StellenanteilItem,
                getNavigationProperty: function () {
                    if (this.owner.VertragItemCollectionCurrent.selectedItem) {
                        return this.owner.VertragItemCollectionCurrent.selectedItem.details.properties.StellenanteilItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "UpdateTab" },
            { name: "RefreshTabs" }
        ]),

        AddEditProjektItem: $defineScreen(AddEditProjektItem, [
            { name: "ProjektItem", kind: "local", type: lightSwitchApplication.ProjektItem }
        ], [
        ]),

        BrowseProjektItemSet: $defineScreen(BrowseProjektItemSet, [
            {
                name: "ProjektItemSet", kind: "collection", elementType: lightSwitchApplication.ProjektItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ProjektItemSet;
                }
            }
        ], [
        ]),

        ViewProjektItem: $defineScreen(ViewProjektItem, [
            { name: "ProjektItem", kind: "local", type: lightSwitchApplication.ProjektItem }
        ], [
        ]),

        AddEditStellenanteilItem: $defineScreen(AddEditStellenanteilItem, [
            { name: "StellenanteilItem", kind: "local", type: lightSwitchApplication.StellenanteilItem }
        ], [
            { name: "Delete" }
        ]),

        BrowseStellenanteilItemSet: $defineScreen(BrowseStellenanteilItemSet, [
            {
                name: "StellenanteilItemSet", kind: "collection", elementType: lightSwitchApplication.StellenanteilItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.StellenanteilItemSet.expand("VertragItem");
                }
            }
        ], [
        ]),

        ViewStellenanteilItem: $defineScreen(ViewStellenanteilItem, [
            { name: "StellenanteilItem", kind: "local", type: lightSwitchApplication.StellenanteilItem }
        ], [
        ]),

        AddEditVertragItem: $defineScreen(AddEditVertragItem, [
            { name: "VertragItem", kind: "local", type: lightSwitchApplication.VertragItem },
            {
                name: "StellenanteilItemCollection", kind: "collection", elementType: lightSwitchApplication.StellenanteilItem,
                getNavigationProperty: function () {
                    if (this.owner.VertragItem) {
                        return this.owner.VertragItem.details.properties.StellenanteilItemCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("ProjektItem");
                }
            }
        ], [
            { name: "DeleteVertrag" }
        ]),

        BrowseVertragItemSet: $defineScreen(BrowseVertragItemSet, [
            {
                name: "VertragItemSet", kind: "collection", elementType: lightSwitchApplication.VertragItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.VertragItemSet;
                }
            }
        ], [
        ]),

        ViewVertragItem: $defineScreen(ViewVertragItem, [
            { name: "VertragItem", kind: "local", type: lightSwitchApplication.VertragItem }
        ], [
            { name: "Delete" }
        ]),

        BrowseVertragJeMonatItemSet: $defineScreen(BrowseVertragJeMonatItemSet, [
            {
                name: "VertragJeMonatItemSet", kind: "collection", elementType: lightSwitchApplication.VertragJeMonatItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.VertragJeMonatItemSet.orderBy("StellenanteilItem/VertragItem/MitarbeiterItem/Nachname").thenBy("StellenanteilItem/VertragItem/von").expand("StellenanteilItem").expand("StellenanteilItem.ProjektItem").expand("StellenanteilItem.VertragItem").expand("StellenanteilItem.VertragItem.MitarbeiterItem");
                }
            }
        ], [
        ]),

        showAddEditAbteilungItem: $defineShowScreen(function showAddEditAbteilungItem(AbteilungItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAbteilungItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAbteilungItem", parameters, options);
        }),

        showBrowseAbteilungItemSet: $defineShowScreen(function showBrowseAbteilungItemSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAbteilungItemSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAbteilungItemSet", parameters, options);
        }),

        showViewAbteilungItem: $defineShowScreen(function showViewAbteilungItem(AbteilungItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewAbteilungItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewAbteilungItem", parameters, options);
        }),

        showAddEditBeschäftigungsArtItem: $defineShowScreen(function showAddEditBeschäftigungsArtItem(BeschäftigungsArtItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBeschäftigungsArtItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBeschäftigungsArtItem", parameters, options);
        }),

        showBrowseBeschäftigungsArtItemSet: $defineShowScreen(function showBrowseBeschäftigungsArtItemSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBeschäftigungsArtItemSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBeschäftigungsArtItemSet", parameters, options);
        }),

        showViewBeschäftigungsArtItem: $defineShowScreen(function showViewBeschäftigungsArtItem(BeschäftigungsArtItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewBeschäftigungsArtItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewBeschäftigungsArtItem", parameters, options);
        }),

        showAddEditKontoItem: $defineShowScreen(function showAddEditKontoItem(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditKontoItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditKontoItem", parameters, options);
        }),

        showBrowseKontoItem: $defineShowScreen(function showBrowseKontoItem(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseKontoItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseKontoItem", parameters, options);
        }),

        showViewKontoItem: $defineShowScreen(function showViewKontoItem(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewKontoItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ViewKontoItem", parameters, options);
        }),

        showAddEditMitarbeiter: $defineShowScreen(function showAddEditMitarbeiter(MitarbeiterItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditMitarbeiter screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMitarbeiter", parameters, options);
        }),

        showBrowseMitarbeiterSet: $defineShowScreen(function showBrowseMitarbeiterSet(Monate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMitarbeiterSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseMitarbeiterSet", parameters, options);
        }),

        showViewMitarbeiter: $defineShowScreen(function showViewMitarbeiter(MitarbeiterItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewMitarbeiter screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewMitarbeiter", parameters, options);
        }),

        showAddEditProjektItem: $defineShowScreen(function showAddEditProjektItem(ProjektItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjektItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjektItem", parameters, options);
        }),

        showBrowseProjektItemSet: $defineShowScreen(function showBrowseProjektItemSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjektItemSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjektItemSet", parameters, options);
        }),

        showViewProjektItem: $defineShowScreen(function showViewProjektItem(ProjektItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewProjektItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewProjektItem", parameters, options);
        }),

        showAddEditStellenanteilItem: $defineShowScreen(function showAddEditStellenanteilItem(StellenanteilItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStellenanteilItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStellenanteilItem", parameters, options);
        }),

        showBrowseStellenanteilItemSet: $defineShowScreen(function showBrowseStellenanteilItemSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseStellenanteilItemSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStellenanteilItemSet", parameters, options);
        }),

        showViewStellenanteilItem: $defineShowScreen(function showViewStellenanteilItem(StellenanteilItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewStellenanteilItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewStellenanteilItem", parameters, options);
        }),

        showAddEditVertragItem: $defineShowScreen(function showAddEditVertragItem(VertragItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditVertragItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditVertragItem", parameters, options);
        }),

        showBrowseVertragItemSet: $defineShowScreen(function showBrowseVertragItemSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseVertragItemSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseVertragItemSet", parameters, options);
        }),

        showViewVertragItem: $defineShowScreen(function showViewVertragItem(VertragItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewVertragItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewVertragItem", parameters, options);
        }),

        showBrowseVertragJeMonatItemSet: $defineShowScreen(function showBrowseVertragJeMonatItemSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseVertragJeMonatItemSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseVertragJeMonatItemSet", parameters, options);
        })

    });

}(msls.application));
