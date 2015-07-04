/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAbteilungItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditAbteilungItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Ruft den abteilungItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAbteilungItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAbteilungItem", parameters);
    }

    function BrowseAbteilungItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseAbteilungItemSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="AbteilungItemSet" type="msls.VisualCollection" elementType="msls.application.AbteilungItem">
        /// Ruft den abteilungItemSet für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAbteilungItemSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAbteilungItemSet", parameters);
    }

    function ViewAbteilungItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm ViewAbteilungItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="AbteilungItem" type="msls.application.AbteilungItem">
        /// Ruft den abteilungItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="MitarbeiterItemCollection" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Ruft den mitarbeiterItemCollection für diesen Bildschirm ab.
        /// </field>
        /// <field name="ProjektItemCollection" type="msls.VisualCollection" elementType="msls.application.ProjektItem">
        /// Ruft den projektItemCollection für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.ViewAbteilungItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewAbteilungItem", parameters);
    }

    function AddEditBeschäftigungsArtItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditBeschäftigungsArtItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="BeschäftigungsArtItem" type="msls.application.BeschäftigungsArtItem">
        /// Ruft den beschäftigungsArtItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBeschäftigungsArtItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBeschäftigungsArtItem", parameters);
    }

    function BrowseBeschäftigungsArtItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseBeschäftigungsArtItemSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="BeschäftigungsArtItemSet" type="msls.VisualCollection" elementType="msls.application.BeschäftigungsArtItem">
        /// Ruft den beschäftigungsArtItemSet für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBeschäftigungsArtItemSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBeschäftigungsArtItemSet", parameters);
    }

    function ViewBeschäftigungsArtItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm ViewBeschäftigungsArtItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="BeschäftigungsArtItem" type="msls.application.BeschäftigungsArtItem">
        /// Ruft den beschäftigungsArtItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.ViewBeschäftigungsArtItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewBeschäftigungsArtItem", parameters);
    }

    function AddEditKontoItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditKontoItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="details" type="msls.application.AddEditKontoItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditKontoItem", parameters);
    }

    function BrowseKontoItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseKontoItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="details" type="msls.application.BrowseKontoItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseKontoItem", parameters);
    }

    function ViewKontoItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm ViewKontoItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="details" type="msls.application.ViewKontoItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewKontoItem", parameters);
    }

    function AddEditMitarbeiter(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditMitarbeiter dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="MitarbeiterItem" type="msls.application.MitarbeiterItem">
        /// Ruft den mitarbeiterItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragItemCollection" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItemCollection für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMitarbeiter.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMitarbeiter", parameters);
    }

    function BrowseMitarbeiterSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseMitarbeiterSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="ausgeschiedeneMitarbeiter" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Ruft den ausgeschiedeneMitarbeiter für diesen Bildschirm ab.
        /// </field>
        /// <field name="aktuelleMitarbeiter" type="msls.VisualCollection" elementType="msls.application.MitarbeiterItem">
        /// Ruft den aktuelleMitarbeiter für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMitarbeiterSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMitarbeiterSet", parameters);
    }

    function ViewMitarbeiter(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm ViewMitarbeiter dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="MitarbeiterItem" type="msls.application.MitarbeiterItem">
        /// Ruft den mitarbeiterItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragItemCollectionCurrent" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItemCollectionCurrent für diesen Bildschirm ab.
        /// </field>
        /// <field name="Stellenanteil" type="String">
        /// Ruft den stellenanteil für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="VertragItemCollectionPlanned" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItemCollectionPlanned für diesen Bildschirm ab.
        /// </field>
        /// <field name="VertragItemCollectionEnded" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItemCollectionEnded für diesen Bildschirm ab.
        /// </field>
        /// <field name="StellenanteilItemCollection" type="msls.VisualCollection" elementType="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItemCollection für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.ViewMitarbeiter.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewMitarbeiter", parameters);
    }

    function AddEditProjektItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditProjektItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="ProjektItem" type="msls.application.ProjektItem">
        /// Ruft den projektItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjektItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjektItem", parameters);
    }

    function BrowseProjektItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseProjektItemSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="ProjektItemSet" type="msls.VisualCollection" elementType="msls.application.ProjektItem">
        /// Ruft den projektItemSet für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjektItemSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjektItemSet", parameters);
    }

    function ViewProjektItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm ViewProjektItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="ProjektItem" type="msls.application.ProjektItem">
        /// Ruft den projektItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.ViewProjektItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewProjektItem", parameters);
    }

    function AddEditStellenanteilItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditStellenanteilItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="StellenanteilItem" type="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStellenanteilItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStellenanteilItem", parameters);
    }

    function BrowseStellenanteilItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseStellenanteilItemSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="StellenanteilItemSet" type="msls.VisualCollection" elementType="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItemSet für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStellenanteilItemSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStellenanteilItemSet", parameters);
    }

    function ViewStellenanteilItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm ViewStellenanteilItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="StellenanteilItem" type="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.ViewStellenanteilItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewStellenanteilItem", parameters);
    }

    function AddEditVertragItem(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm AddEditVertragItem dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="VertragItem" type="msls.application.VertragItem">
        /// Ruft den vertragItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="StellenanteilItemCollection" type="msls.VisualCollection" elementType="msls.application.StellenanteilItem">
        /// Ruft den stellenanteilItemCollection für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.AddEditVertragItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditVertragItem", parameters);
    }

    function BrowseVertragItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseVertragItemSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="VertragItemSet" type="msls.VisualCollection" elementType="msls.application.VertragItem">
        /// Ruft den vertragItemSet für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseVertragItemSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
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
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="VertragItem" type="msls.application.VertragItem">
        /// Ruft den vertragItem für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.ViewVertragItem.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewVertragItem", parameters);
    }

    function Browse(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm Browse dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="Property1" type="String">
        /// Ruft den property1 für diesen Bildschirm ab oder legt diesen fest.
        /// </field>
        /// <field name="details" type="msls.application.Browse.Details">
        /// Ruft die Details für diesen Bildschirm ab.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Browse", parameters);
    }

    function BrowseVertragJeMonatItemSet(parameters, dataWorkspace) {
        /// <summary>
        /// Stellt den Bildschirm BrowseVertragJeMonatItemSet dar.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// Ein Array von Bildschirm-Parameterwerten.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// Ein bestehender Datenarbeitsbereich, der für diesen Bildschirm benutzt werden soll. Standardmäßig wird ein neuer Datenarbeitsbereich erstellt.
        /// </param>
        /// <field name="VertragJeMonatItemSet" type="msls.VisualCollection" elementType="msls.application.VertragJeMonatItem">
        /// Ruft den vertragJeMonatItemSet für diesen Bildschirm ab.
        /// </field>
        /// <field name="details" type="msls.application.BrowseVertragJeMonatItemSet.Details">
        /// Ruft die Details für diesen Bildschirm ab.
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
                    return this.dataWorkspace.ApplicationData.AbteilungItemSet.expand("Abteilungsleiter");
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
                name: "ausgeschiedeneMitarbeiter", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ausgeschiedeneMitarbeiter();
                }
            },
            {
                name: "aktuelleMitarbeiter", kind: "collection", elementType: lightSwitchApplication.MitarbeiterItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.aktuelleMitarbeiter();
                }
            }
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
            { name: "Stellenanteil", kind: "local", type: String },
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
                    return this.filter("(von gt " + $toODataString(today1, "DateTime") + ") and (bis gt " + $toODataString(today1, "DateTime") + ")").orderBy("von").expand("BeschäftigungsArtItem");
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
            { name: "RefreshTabs" },
            { name: "DeleteVertrag" }
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
        ]),

        Browse: $defineScreen(Browse, [
            { name: "Property1", kind: "local", type: String }
        ], [
        ]),

        BrowseVertragJeMonatItemSet: $defineScreen(BrowseVertragJeMonatItemSet, [
            {
                name: "VertragJeMonatItemSet", kind: "collection", elementType: lightSwitchApplication.VertragJeMonatItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.VertragJeMonatItemSet.expand("StellenanteilItem").expand("StellenanteilItem.ProjektItem").expand("StellenanteilItem.VertragItem").expand("StellenanteilItem.VertragItem.MitarbeiterItem").expand("StellenanteilItem.VertragItem.MitarbeiterItem.AbteilungItem").expand("StellenanteilItem.VertragItem.BeschäftigungsArtItem");
                }
            }
        ], [
        ]),

        showAddEditAbteilungItem: $defineShowScreen(function showAddEditAbteilungItem(AbteilungItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditAbteilungItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAbteilungItem", parameters, options);
        }),

        showBrowseAbteilungItemSet: $defineShowScreen(function showBrowseAbteilungItemSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseAbteilungItemSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAbteilungItemSet", parameters, options);
        }),

        showViewAbteilungItem: $defineShowScreen(function showViewAbteilungItem(AbteilungItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewAbteilungItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewAbteilungItem", parameters, options);
        }),

        showAddEditBeschäftigungsArtItem: $defineShowScreen(function showAddEditBeschäftigungsArtItem(BeschäftigungsArtItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditBeschäftigungsArtItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBeschäftigungsArtItem", parameters, options);
        }),

        showBrowseBeschäftigungsArtItemSet: $defineShowScreen(function showBrowseBeschäftigungsArtItemSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseBeschäftigungsArtItemSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBeschäftigungsArtItemSet", parameters, options);
        }),

        showViewBeschäftigungsArtItem: $defineShowScreen(function showViewBeschäftigungsArtItem(BeschäftigungsArtItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewBeschäftigungsArtItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewBeschäftigungsArtItem", parameters, options);
        }),

        showAddEditKontoItem: $defineShowScreen(function showAddEditKontoItem(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditKontoItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditKontoItem", parameters, options);
        }),

        showBrowseKontoItem: $defineShowScreen(function showBrowseKontoItem(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseKontoItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseKontoItem", parameters, options);
        }),

        showViewKontoItem: $defineShowScreen(function showViewKontoItem(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewKontoItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ViewKontoItem", parameters, options);
        }),

        showAddEditMitarbeiter: $defineShowScreen(function showAddEditMitarbeiter(MitarbeiterItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditMitarbeiter.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMitarbeiter", parameters, options);
        }),

        showBrowseMitarbeiterSet: $defineShowScreen(function showBrowseMitarbeiterSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseMitarbeiterSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMitarbeiterSet", parameters, options);
        }),

        showViewMitarbeiter: $defineShowScreen(function showViewMitarbeiter(MitarbeiterItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewMitarbeiter.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewMitarbeiter", parameters, options);
        }),

        showAddEditProjektItem: $defineShowScreen(function showAddEditProjektItem(ProjektItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditProjektItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjektItem", parameters, options);
        }),

        showBrowseProjektItemSet: $defineShowScreen(function showBrowseProjektItemSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseProjektItemSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjektItemSet", parameters, options);
        }),

        showViewProjektItem: $defineShowScreen(function showViewProjektItem(ProjektItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewProjektItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewProjektItem", parameters, options);
        }),

        showAddEditStellenanteilItem: $defineShowScreen(function showAddEditStellenanteilItem(StellenanteilItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditStellenanteilItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStellenanteilItem", parameters, options);
        }),

        showBrowseStellenanteilItemSet: $defineShowScreen(function showBrowseStellenanteilItemSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseStellenanteilItemSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStellenanteilItemSet", parameters, options);
        }),

        showViewStellenanteilItem: $defineShowScreen(function showViewStellenanteilItem(StellenanteilItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewStellenanteilItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewStellenanteilItem", parameters, options);
        }),

        showAddEditVertragItem: $defineShowScreen(function showAddEditVertragItem(VertragItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm AddEditVertragItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditVertragItem", parameters, options);
        }),

        showBrowseVertragItemSet: $defineShowScreen(function showBrowseVertragItemSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseVertragItemSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseVertragItemSet", parameters, options);
        }),

        showViewVertragItem: $defineShowScreen(function showViewVertragItem(VertragItem, options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm ViewVertragItem.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewVertragItem", parameters, options);
        }),

        showBrowse: $defineShowScreen(function showBrowse(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm Browse.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Browse", parameters, options);
        }),

        showBrowseVertragJeMonatItemSet: $defineShowScreen(function showBrowseVertragJeMonatItemSet(options) {
            /// <summary>
            /// Navigiert asynchron vorwärts zum Bildschirm BrowseVertragJeMonatItemSet.
            /// </summary>
            /// <param name="options" optional="true">
            /// Ein Objekt, das eine oder mehrere der folgenden Optionen bietet:<br/>- beforeShown: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet wurde, jedoch bevor der Bildschirm angezeigt wird.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: Eine Funktion, die aufgerufen wird, nachdem Grenzverhalten angewendet und der Bildschirm geschlossen wurde.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseVertragJeMonatItemSet", parameters, options);
        })

    });

}(msls.application));
