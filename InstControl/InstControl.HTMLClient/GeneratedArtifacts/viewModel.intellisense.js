/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAbteilungItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAbteilungItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AddEditAbteilungItem,
            value: lightSwitchApplication.AddEditAbteilungItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AddEditAbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        Kürzel: {
            _$class: msls.ContentItem,
            _$name: "Kürzel",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        Langname: {
            _$class: msls.ContentItem,
            _$name: "Langname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAbteilungItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAbteilungItem, {
        /// <field>
        /// Called when a new AddEditAbteilungItem screen is created.
        /// <br/>created(msls.application.AddEditAbteilungItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAbteilungItem],
        /// <field>
        /// Called before changes on an active AddEditAbteilungItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAbteilungItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAbteilungItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Kürzel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Kürzel"); }],
        /// <field>
        /// Called after the Langname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Langname_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Langname"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseAbteilungItemSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAbteilungItemSet
        },
        AbteilungItemList: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAbteilungItemSet,
            data: lightSwitchApplication.BrowseAbteilungItemSet,
            value: lightSwitchApplication.BrowseAbteilungItemSet
        },
        AbteilungItemSet: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItemSet",
            _$parentName: "AbteilungItemList",
            screen: lightSwitchApplication.BrowseAbteilungItemSet,
            data: lightSwitchApplication.BrowseAbteilungItemSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAbteilungItemSet,
                _$entry: {
                    elementType: lightSwitchApplication.AbteilungItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "AbteilungItemSet",
            screen: lightSwitchApplication.BrowseAbteilungItemSet,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        Kürzel: {
            _$class: msls.ContentItem,
            _$name: "Kürzel",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAbteilungItemSet,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        Langname: {
            _$class: msls.ContentItem,
            _$name: "Langname",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAbteilungItemSet,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAbteilungItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAbteilungItemSet, {
        /// <field>
        /// Called when a new BrowseAbteilungItemSet screen is created.
        /// <br/>created(msls.application.BrowseAbteilungItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAbteilungItemSet],
        /// <field>
        /// Called before changes on an active BrowseAbteilungItemSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAbteilungItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAbteilungItemSet],
        /// <field>
        /// Called after the AbteilungItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("AbteilungItemList"); }],
        /// <field>
        /// Called after the AbteilungItemSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("AbteilungItemSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Kürzel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("Kürzel"); }],
        /// <field>
        /// Called after the Langname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Langname_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("Langname"); }]
    });

    lightSwitchApplication.ViewAbteilungItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewAbteilungItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ViewAbteilungItem,
            value: lightSwitchApplication.ViewAbteilungItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ViewAbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        Kürzel: {
            _$class: msls.ContentItem,
            _$name: "Kürzel",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        Langname: {
            _$class: msls.ContentItem,
            _$name: "Langname",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: Date
        },
        MitarbeiterItemCollection: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterItemCollection",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ViewAbteilungItem,
            value: lightSwitchApplication.ViewAbteilungItem
        },
        MitarbeiterItemCollection1: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterItemCollection1",
            _$parentName: "MitarbeiterItemCollection",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ViewAbteilungItem,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewAbteilungItem,
                _$entry: {
                    elementType: lightSwitchApplication.MitarbeiterItem
                }
            }
        },
        columns1: {
            _$class: msls.ContentItem,
            _$name: "columns1",
            _$parentName: "MitarbeiterItemCollection1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Foto: {
            _$class: msls.ContentItem,
            _$name: "Foto",
            _$parentName: "columns1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "columns1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Nachname: {
            _$class: msls.ContentItem,
            _$name: "Nachname",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname: {
            _$class: msls.ContentItem,
            _$name: "Vorname",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Geburtstag: {
            _$class: msls.ContentItem,
            _$name: "Geburtstag",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        ProjektItemCollection: {
            _$class: msls.ContentItem,
            _$name: "ProjektItemCollection",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ViewAbteilungItem,
            value: lightSwitchApplication.ViewAbteilungItem
        },
        ProjektItemCollection1: {
            _$class: msls.ContentItem,
            _$name: "ProjektItemCollection1",
            _$parentName: "ProjektItemCollection",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ViewAbteilungItem,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewAbteilungItem,
                _$entry: {
                    elementType: lightSwitchApplication.ProjektItem
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "ProjektItemCollection1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        ProjektKurzName: {
            _$class: msls.ContentItem,
            _$name: "ProjektKurzName",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        ProjektLangName: {
            _$class: msls.ContentItem,
            _$name: "ProjektLangName",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Start: {
            _$class: msls.ContentItem,
            _$name: "Start",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.ProjektItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewAbteilungItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewAbteilungItem, {
        /// <field>
        /// Called when a new ViewAbteilungItem screen is created.
        /// <br/>created(msls.application.ViewAbteilungItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewAbteilungItem],
        /// <field>
        /// Called before changes on an active ViewAbteilungItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewAbteilungItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewAbteilungItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Kürzel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Kürzel"); }],
        /// <field>
        /// Called after the Langname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Langname_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Langname"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("right"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Modified"); }],
        /// <field>
        /// Called after the MitarbeiterItemCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterItemCollection_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("MitarbeiterItemCollection"); }],
        /// <field>
        /// Called after the MitarbeiterItemCollection1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterItemCollection1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("MitarbeiterItemCollection1"); }],
        /// <field>
        /// Called after the columns1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("columns1"); }],
        /// <field>
        /// Called after the Foto content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Foto_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Foto"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("rows"); }],
        /// <field>
        /// Called after the Nachname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Nachname"); }],
        /// <field>
        /// Called after the Vorname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Vorname"); }],
        /// <field>
        /// Called after the Geburtstag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Geburtstag"); }],
        /// <field>
        /// Called after the ProjektItemCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemCollection_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektItemCollection"); }],
        /// <field>
        /// Called after the ProjektItemCollection1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemCollection1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektItemCollection1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("rows1"); }],
        /// <field>
        /// Called after the ProjektKurzName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektKurzName_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektKurzName"); }],
        /// <field>
        /// Called after the ProjektLangName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektLangName_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektLangName"); }],
        /// <field>
        /// Called after the Start content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Start"); }]
    });

    lightSwitchApplication.AddEditBeschäftigungsArtItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            data: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            value: lightSwitchApplication.AddEditBeschäftigungsArtItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            data: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        Art: {
            _$class: msls.ContentItem,
            _$name: "Art",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBeschäftigungsArtItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBeschäftigungsArtItem, {
        /// <field>
        /// Called when a new AddEditBeschäftigungsArtItem screen is created.
        /// <br/>created(msls.application.AddEditBeschäftigungsArtItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBeschäftigungsArtItem],
        /// <field>
        /// Called before changes on an active AddEditBeschäftigungsArtItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBeschäftigungsArtItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBeschäftigungsArtItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Art content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Art_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("Art"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseBeschäftigungsArtItemSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet
        },
        BeschäftigungsArtItemList: {
            _$class: msls.ContentItem,
            _$name: "BeschäftigungsArtItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            data: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            value: lightSwitchApplication.BrowseBeschäftigungsArtItemSet
        },
        BeschäftigungsArtItemSet: {
            _$class: msls.ContentItem,
            _$name: "BeschäftigungsArtItemSet",
            _$parentName: "BeschäftigungsArtItemList",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            data: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
                _$entry: {
                    elementType: lightSwitchApplication.BeschäftigungsArtItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "BeschäftigungsArtItemSet",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        Art: {
            _$class: msls.ContentItem,
            _$name: "Art",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBeschäftigungsArtItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBeschäftigungsArtItemSet, {
        /// <field>
        /// Called when a new BrowseBeschäftigungsArtItemSet screen is created.
        /// <br/>created(msls.application.BrowseBeschäftigungsArtItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBeschäftigungsArtItemSet],
        /// <field>
        /// Called before changes on an active BrowseBeschäftigungsArtItemSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBeschäftigungsArtItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBeschäftigungsArtItemSet],
        /// <field>
        /// Called after the BeschäftigungsArtItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("BeschäftigungsArtItemList"); }],
        /// <field>
        /// Called after the BeschäftigungsArtItemSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("BeschäftigungsArtItemSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Art content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Art_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("Art"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("Created"); }]
    });

    lightSwitchApplication.ViewBeschäftigungsArtItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.ViewBeschäftigungsArtItem,
            value: lightSwitchApplication.ViewBeschäftigungsArtItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.ViewBeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        Art: {
            _$class: msls.ContentItem,
            _$name: "Art",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewBeschäftigungsArtItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewBeschäftigungsArtItem, {
        /// <field>
        /// Called when a new ViewBeschäftigungsArtItem screen is created.
        /// <br/>created(msls.application.ViewBeschäftigungsArtItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewBeschäftigungsArtItem],
        /// <field>
        /// Called before changes on an active ViewBeschäftigungsArtItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewBeschäftigungsArtItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewBeschäftigungsArtItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Art content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Art_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Art"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Created"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("right"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditKontoItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditKontoItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditKontoItem,
            data: lightSwitchApplication.AddEditKontoItem,
            value: lightSwitchApplication.AddEditKontoItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditKontoItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditKontoItem, {
        /// <field>
        /// Called when a new AddEditKontoItem screen is created.
        /// <br/>created(msls.application.AddEditKontoItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditKontoItem],
        /// <field>
        /// Called before changes on an active AddEditKontoItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditKontoItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditKontoItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditKontoItem().findContentItem("Details"); }]
    });

    lightSwitchApplication.BrowseKontoItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseKontoItem
        },
        KontoItemList: {
            _$class: msls.ContentItem,
            _$name: "KontoItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseKontoItem,
            data: lightSwitchApplication.BrowseKontoItem,
            value: lightSwitchApplication.BrowseKontoItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseKontoItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseKontoItem, {
        /// <field>
        /// Called when a new BrowseKontoItem screen is created.
        /// <br/>created(msls.application.BrowseKontoItem screen)
        /// </field>
        created: [lightSwitchApplication.BrowseKontoItem],
        /// <field>
        /// Called before changes on an active BrowseKontoItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseKontoItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseKontoItem],
        /// <field>
        /// Called after the KontoItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KontoItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseKontoItem().findContentItem("KontoItemList"); }]
    });

    lightSwitchApplication.ViewKontoItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewKontoItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewKontoItem,
            data: lightSwitchApplication.ViewKontoItem,
            value: lightSwitchApplication.ViewKontoItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewKontoItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewKontoItem, {
        /// <field>
        /// Called when a new ViewKontoItem screen is created.
        /// <br/>created(msls.application.ViewKontoItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewKontoItem],
        /// <field>
        /// Called before changes on an active ViewKontoItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewKontoItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewKontoItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewKontoItem().findContentItem("Details"); }]
    });

    lightSwitchApplication.AddEditMitarbeiter.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMitarbeiter
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.AddEditMitarbeiter,
            value: lightSwitchApplication.AddEditMitarbeiter
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.AddEditMitarbeiter,
            value: lightSwitchApplication.MitarbeiterItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        UserID: {
            _$class: msls.ContentItem,
            _$name: "UserID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Nachname: {
            _$class: msls.ContentItem,
            _$name: "Nachname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname: {
            _$class: msls.ContentItem,
            _$name: "Vorname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Geburtstag: {
            _$class: msls.ContentItem,
            _$name: "Geburtstag",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Erstanstellung: {
            _$class: msls.ContentItem,
            _$name: "Erstanstellung",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Ausscheidedatum: {
            _$class: msls.ContentItem,
            _$name: "Ausscheidedatum",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        AbteilungItem: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItem",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.AbteilungItem
        },
        AbteilungItem1: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItem1",
            _$parentName: "AbteilungItem",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        PersonalNr: {
            _$class: msls.ContentItem,
            _$name: "PersonalNr",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Raum: {
            _$class: msls.ContentItem,
            _$name: "Raum",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Telefon: {
            _$class: msls.ContentItem,
            _$name: "Telefon",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Foto: {
            _$class: msls.ContentItem,
            _$name: "Foto",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.AddEditMitarbeiter,
            value: lightSwitchApplication.AddEditMitarbeiter
        },
        Bermerkung: {
            _$class: msls.ContentItem,
            _$name: "Bermerkung",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditMitarbeiter,
            data: lightSwitchApplication.AddEditMitarbeiter,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMitarbeiter
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditMitarbeiter, {
        /// <field>
        /// Called when a new AddEditMitarbeiter screen is created.
        /// <br/>created(msls.application.AddEditMitarbeiter screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Called before changes on an active AddEditMitarbeiter screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditMitarbeiter screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Called to determine if the Delete method can be executed.
        /// <br/>canExecute(msls.application.AddEditMitarbeiter screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Called to execute the Delete method.
        /// <br/>execute(msls.application.AddEditMitarbeiter screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("left"); }],
        /// <field>
        /// Called after the UserID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserID_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("UserID"); }],
        /// <field>
        /// Called after the Nachname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Nachname"); }],
        /// <field>
        /// Called after the Vorname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Vorname"); }],
        /// <field>
        /// Called after the Geburtstag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Geburtstag"); }],
        /// <field>
        /// Called after the Erstanstellung content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Erstanstellung_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Erstanstellung"); }],
        /// <field>
        /// Called after the Ausscheidedatum content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Ausscheidedatum"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("right"); }],
        /// <field>
        /// Called after the AbteilungItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("AbteilungItem"); }],
        /// <field>
        /// Called after the AbteilungItem1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItem1_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("AbteilungItem1"); }],
        /// <field>
        /// Called after the PersonalNr content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonalNr_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("PersonalNr"); }],
        /// <field>
        /// Called after the Raum content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Raum_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Raum"); }],
        /// <field>
        /// Called after the Telefon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Telefon"); }],
        /// <field>
        /// Called after the Foto content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Foto_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Foto"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Group"); }],
        /// <field>
        /// Called after the Bermerkung content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Bermerkung"); }]
    });

    lightSwitchApplication.BrowseMitarbeiterSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMitarbeiterSet
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: lightSwitchApplication.BrowseMitarbeiterSet
        },
        aktuelleMitarbeiter: {
            _$class: msls.ContentItem,
            _$name: "aktuelleMitarbeiter",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMitarbeiterSet,
                _$entry: {
                    elementType: lightSwitchApplication.MitarbeiterItem
                }
            }
        },
        aktuelleMitarbeiterTemplate: {
            _$class: msls.ContentItem,
            _$name: "aktuelleMitarbeiterTemplate",
            _$parentName: "aktuelleMitarbeiter",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Nachname: {
            _$class: msls.ContentItem,
            _$name: "Nachname",
            _$parentName: "aktuelleMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname: {
            _$class: msls.ContentItem,
            _$name: "Vorname",
            _$parentName: "aktuelleMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Bermerkung2: {
            _$class: msls.ContentItem,
            _$name: "Bermerkung2",
            _$parentName: "aktuelleMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        VertragBis: {
            _$class: msls.ContentItem,
            _$name: "VertragBis",
            _$parentName: "aktuelleMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: lightSwitchApplication.BrowseMitarbeiterSet
        },
        Monate: {
            _$class: msls.ContentItem,
            _$name: "Monate",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: Number
        },
        MitarbeiterMitAuslaufendenVertrag: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterMitAuslaufendenVertrag",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMitarbeiterSet,
                _$entry: {
                    elementType: lightSwitchApplication.MitarbeiterItem
                }
            }
        },
        MitarbeiterMitAuslaufendenVertragTemplate: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterMitAuslaufendenVertragTemplate",
            _$parentName: "MitarbeiterMitAuslaufendenVertrag",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Nachname3: {
            _$class: msls.ContentItem,
            _$name: "Nachname3",
            _$parentName: "MitarbeiterMitAuslaufendenVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname3: {
            _$class: msls.ContentItem,
            _$name: "Vorname3",
            _$parentName: "MitarbeiterMitAuslaufendenVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Bermerkung1: {
            _$class: msls.ContentItem,
            _$name: "Bermerkung1",
            _$parentName: "MitarbeiterMitAuslaufendenVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: lightSwitchApplication.BrowseMitarbeiterSet
        },
        MitarbeiterOhneVertrag: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterOhneVertrag",
            _$parentName: "Group3",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMitarbeiterSet,
                _$entry: {
                    elementType: lightSwitchApplication.MitarbeiterItem
                }
            }
        },
        MitarbeiterOhneVertragTemplate: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterOhneVertragTemplate",
            _$parentName: "MitarbeiterOhneVertrag",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Nachname2: {
            _$class: msls.ContentItem,
            _$name: "Nachname2",
            _$parentName: "MitarbeiterOhneVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname2: {
            _$class: msls.ContentItem,
            _$name: "Vorname2",
            _$parentName: "MitarbeiterOhneVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Bermerkung: {
            _$class: msls.ContentItem,
            _$name: "Bermerkung",
            _$parentName: "MitarbeiterOhneVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: lightSwitchApplication.BrowseMitarbeiterSet
        },
        ausgeschiedeneMitarbeiter: {
            _$class: msls.ContentItem,
            _$name: "ausgeschiedeneMitarbeiter",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMitarbeiterSet,
                _$entry: {
                    elementType: lightSwitchApplication.MitarbeiterItem
                }
            }
        },
        ausgeschiedeneMitarbeiterTemplate: {
            _$class: msls.ContentItem,
            _$name: "ausgeschiedeneMitarbeiterTemplate",
            _$parentName: "ausgeschiedeneMitarbeiter",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Nachname1: {
            _$class: msls.ContentItem,
            _$name: "Nachname1",
            _$parentName: "ausgeschiedeneMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname1: {
            _$class: msls.ContentItem,
            _$name: "Vorname1",
            _$parentName: "ausgeschiedeneMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Ausscheidedatum1: {
            _$class: msls.ContentItem,
            _$name: "Ausscheidedatum1",
            _$parentName: "ausgeschiedeneMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "ausgeschiedeneMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMitarbeiterSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMitarbeiterSet, {
        /// <field>
        /// Called when a new BrowseMitarbeiterSet screen is created.
        /// <br/>created(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Called before changes on an active BrowseMitarbeiterSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Called to determine if the Delete method can be executed.
        /// <br/>canExecute(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Called to execute the Delete method.
        /// <br/>execute(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group1"); }],
        /// <field>
        /// Called after the aktuelleMitarbeiter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        aktuelleMitarbeiter_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("aktuelleMitarbeiter"); }],
        /// <field>
        /// Called after the aktuelleMitarbeiterTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        aktuelleMitarbeiterTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("aktuelleMitarbeiterTemplate"); }],
        /// <field>
        /// Called after the Nachname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname"); }],
        /// <field>
        /// Called after the Vorname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname"); }],
        /// <field>
        /// Called after the Bermerkung2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Bermerkung2"); }],
        /// <field>
        /// Called after the VertragBis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragBis_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("VertragBis"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Monate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Monate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Monate"); }],
        /// <field>
        /// Called after the MitarbeiterMitAuslaufendenVertrag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterMitAuslaufendenVertrag_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterMitAuslaufendenVertrag"); }],
        /// <field>
        /// Called after the MitarbeiterMitAuslaufendenVertragTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterMitAuslaufendenVertragTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterMitAuslaufendenVertragTemplate"); }],
        /// <field>
        /// Called after the Nachname3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname3_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname3"); }],
        /// <field>
        /// Called after the Vorname3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname3_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname3"); }],
        /// <field>
        /// Called after the Bermerkung1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Bermerkung1"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group3"); }],
        /// <field>
        /// Called after the MitarbeiterOhneVertrag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterOhneVertrag_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterOhneVertrag"); }],
        /// <field>
        /// Called after the MitarbeiterOhneVertragTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterOhneVertragTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterOhneVertragTemplate"); }],
        /// <field>
        /// Called after the Nachname2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname2"); }],
        /// <field>
        /// Called after the Vorname2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname2"); }],
        /// <field>
        /// Called after the Bermerkung content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Bermerkung"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group4"); }],
        /// <field>
        /// Called after the ausgeschiedeneMitarbeiter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ausgeschiedeneMitarbeiter_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("ausgeschiedeneMitarbeiter"); }],
        /// <field>
        /// Called after the ausgeschiedeneMitarbeiterTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ausgeschiedeneMitarbeiterTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("ausgeschiedeneMitarbeiterTemplate"); }],
        /// <field>
        /// Called after the Nachname1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname1"); }],
        /// <field>
        /// Called after the Vorname1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname1"); }],
        /// <field>
        /// Called after the Ausscheidedatum1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Ausscheidedatum1"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group"); }]
    });

    lightSwitchApplication.ViewMitarbeiter.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewMitarbeiter
        },
        Tab_VertragItemCollectionCurrent: {
            _$class: msls.ContentItem,
            _$name: "Tab_VertragItemCollectionCurrent",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: lightSwitchApplication.ViewMitarbeiter
        },
        VertragItemCollectionCurrent: {
            _$class: msls.ContentItem,
            _$name: "VertragItemCollectionCurrent",
            _$parentName: "Tab_VertragItemCollectionCurrent",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewMitarbeiter,
                _$entry: {
                    elementType: lightSwitchApplication.VertragItem
                }
            }
        },
        VertragItemCollectionTemplate: {
            _$class: msls.ContentItem,
            _$name: "VertragItemCollectionTemplate",
            _$parentName: "VertragItemCollectionCurrent",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        von1: {
            _$class: msls.ContentItem,
            _$name: "von1",
            _$parentName: "VertragItemCollectionTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        bis1: {
            _$class: msls.ContentItem,
            _$name: "bis1",
            _$parentName: "VertragItemCollectionTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        BeschäftigungsArtItem: {
            _$class: msls.ContentItem,
            _$name: "BeschäftigungsArtItem",
            _$parentName: "VertragItemCollectionTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        Tab_VertragItemCollectionPlanned: {
            _$class: msls.ContentItem,
            _$name: "Tab_VertragItemCollectionPlanned",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: lightSwitchApplication.ViewMitarbeiter
        },
        VertragItemCollectionPlanned: {
            _$class: msls.ContentItem,
            _$name: "VertragItemCollectionPlanned",
            _$parentName: "Tab_VertragItemCollectionPlanned",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewMitarbeiter,
                _$entry: {
                    elementType: lightSwitchApplication.VertragItem
                }
            }
        },
        VertragItemCollectionPlannedTemplate: {
            _$class: msls.ContentItem,
            _$name: "VertragItemCollectionPlannedTemplate",
            _$parentName: "VertragItemCollectionPlanned",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        von2: {
            _$class: msls.ContentItem,
            _$name: "von2",
            _$parentName: "VertragItemCollectionPlannedTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        bis2: {
            _$class: msls.ContentItem,
            _$name: "bis2",
            _$parentName: "VertragItemCollectionPlannedTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        Tab_VertragItemCollectionEnded: {
            _$class: msls.ContentItem,
            _$name: "Tab_VertragItemCollectionEnded",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: lightSwitchApplication.ViewMitarbeiter
        },
        VertragItemCollectionEnded: {
            _$class: msls.ContentItem,
            _$name: "VertragItemCollectionEnded",
            _$parentName: "Tab_VertragItemCollectionEnded",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewMitarbeiter,
                _$entry: {
                    elementType: lightSwitchApplication.VertragItem
                }
            }
        },
        VertragItemCollectionEndedTemplate: {
            _$class: msls.ContentItem,
            _$name: "VertragItemCollectionEndedTemplate",
            _$parentName: "VertragItemCollectionEnded",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        von: {
            _$class: msls.ContentItem,
            _$name: "von",
            _$parentName: "VertragItemCollectionEndedTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        bis: {
            _$class: msls.ContentItem,
            _$name: "bis",
            _$parentName: "VertragItemCollectionEndedTemplate",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        Stammdaten: {
            _$class: msls.ContentItem,
            _$name: "Stammdaten",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: lightSwitchApplication.ViewMitarbeiter
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Stammdaten",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: lightSwitchApplication.MitarbeiterItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Nachname: {
            _$class: msls.ContentItem,
            _$name: "Nachname",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Vorname: {
            _$class: msls.ContentItem,
            _$name: "Vorname",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Geburtstag: {
            _$class: msls.ContentItem,
            _$name: "Geburtstag",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Erstanstellung: {
            _$class: msls.ContentItem,
            _$name: "Erstanstellung",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Ausscheidedatum: {
            _$class: msls.ContentItem,
            _$name: "Ausscheidedatum",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        Kürzel: {
            _$class: msls.ContentItem,
            _$name: "Kürzel",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Telefon: {
            _$class: msls.ContentItem,
            _$name: "Telefon",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Raum: {
            _$class: msls.ContentItem,
            _$name: "Raum",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Foto: {
            _$class: msls.ContentItem,
            _$name: "Foto",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Stammdaten",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: lightSwitchApplication.ViewMitarbeiter
        },
        Bermerkung: {
            _$class: msls.ContentItem,
            _$name: "Bermerkung",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewMitarbeiter,
            data: lightSwitchApplication.ViewMitarbeiter,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewMitarbeiter
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewMitarbeiter, {
        /// <field>
        /// Called when a new ViewMitarbeiter screen is created.
        /// <br/>created(msls.application.ViewMitarbeiter screen)
        /// </field>
        created: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Called before changes on an active ViewMitarbeiter screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewMitarbeiter screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Called to determine if the UpdateTab method can be executed.
        /// <br/>canExecute(msls.application.ViewMitarbeiter screen)
        /// </field>
        UpdateTab_canExecute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Called to execute the UpdateTab method.
        /// <br/>execute(msls.application.ViewMitarbeiter screen)
        /// </field>
        UpdateTab_execute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Called to determine if the RefreshTabs method can be executed.
        /// <br/>canExecute(msls.application.ViewMitarbeiter screen)
        /// </field>
        RefreshTabs_canExecute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Called to execute the RefreshTabs method.
        /// <br/>execute(msls.application.ViewMitarbeiter screen)
        /// </field>
        RefreshTabs_execute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Called after the Tab_VertragItemCollectionCurrent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tab_VertragItemCollectionCurrent_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Tab_VertragItemCollectionCurrent"); }],
        /// <field>
        /// Called after the VertragItemCollectionCurrent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionCurrent_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionCurrent"); }],
        /// <field>
        /// Called after the VertragItemCollectionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionTemplate"); }],
        /// <field>
        /// Called after the von1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von1_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("von1"); }],
        /// <field>
        /// Called after the bis1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis1_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("bis1"); }],
        /// <field>
        /// Called after the BeschäftigungsArtItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItem_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("BeschäftigungsArtItem"); }],
        /// <field>
        /// Called after the Tab_VertragItemCollectionPlanned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tab_VertragItemCollectionPlanned_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Tab_VertragItemCollectionPlanned"); }],
        /// <field>
        /// Called after the VertragItemCollectionPlanned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionPlanned_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionPlanned"); }],
        /// <field>
        /// Called after the VertragItemCollectionPlannedTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionPlannedTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionPlannedTemplate"); }],
        /// <field>
        /// Called after the von2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von2_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("von2"); }],
        /// <field>
        /// Called after the bis2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis2_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("bis2"); }],
        /// <field>
        /// Called after the Tab_VertragItemCollectionEnded content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tab_VertragItemCollectionEnded_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Tab_VertragItemCollectionEnded"); }],
        /// <field>
        /// Called after the VertragItemCollectionEnded content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionEnded_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionEnded"); }],
        /// <field>
        /// Called after the VertragItemCollectionEndedTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionEndedTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionEndedTemplate"); }],
        /// <field>
        /// Called after the von content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("von"); }],
        /// <field>
        /// Called after the bis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("bis"); }],
        /// <field>
        /// Called after the Stammdaten content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stammdaten_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Stammdaten"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("left"); }],
        /// <field>
        /// Called after the Nachname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Nachname"); }],
        /// <field>
        /// Called after the Vorname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Vorname"); }],
        /// <field>
        /// Called after the Geburtstag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Geburtstag"); }],
        /// <field>
        /// Called after the Erstanstellung content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Erstanstellung_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Erstanstellung"); }],
        /// <field>
        /// Called after the Ausscheidedatum content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Ausscheidedatum"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Kürzel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Kürzel"); }],
        /// <field>
        /// Called after the Telefon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Telefon"); }],
        /// <field>
        /// Called after the Raum content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Raum_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Raum"); }],
        /// <field>
        /// Called after the Foto content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Foto_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Foto"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Bermerkung content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Bermerkung"); }]
    });

    lightSwitchApplication.AddEditProjektItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjektItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.AddEditProjektItem,
            value: lightSwitchApplication.AddEditProjektItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.AddEditProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        ProjektCode: {
            _$class: msls.ContentItem,
            _$name: "ProjektCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Start: {
            _$class: msls.ContentItem,
            _$name: "Start",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Date
        },
        AbteilungItem: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItem",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.AbteilungItem
        },
        AbteilungItem1: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItem1",
            _$parentName: "AbteilungItem",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.AbteilungItem
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        Projektname: {
            _$class: msls.ContentItem,
            _$name: "Projektname",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Laufzeit: {
            _$class: msls.ContentItem,
            _$name: "Laufzeit",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Number
        },
        PSPElement: {
            _$class: msls.ContentItem,
            _$name: "PSPElement",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjektItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjektItem, {
        /// <field>
        /// Called when a new AddEditProjektItem screen is created.
        /// <br/>created(msls.application.AddEditProjektItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjektItem],
        /// <field>
        /// Called before changes on an active AddEditProjektItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjektItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjektItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("left"); }],
        /// <field>
        /// Called after the ProjektCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("ProjektCode"); }],
        /// <field>
        /// Called after the Start content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Start"); }],
        /// <field>
        /// Called after the AbteilungItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("AbteilungItem"); }],
        /// <field>
        /// Called after the AbteilungItem1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItem1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("AbteilungItem1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("right"); }],
        /// <field>
        /// Called after the Projektname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projektname_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Projektname"); }],
        /// <field>
        /// Called after the Laufzeit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Laufzeit_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Laufzeit"); }],
        /// <field>
        /// Called after the PSPElement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PSPElement_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("PSPElement"); }]
    });

    lightSwitchApplication.BrowseProjektItemSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjektItemSet
        },
        ProjektItemList: {
            _$class: msls.ContentItem,
            _$name: "ProjektItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.BrowseProjektItemSet,
            value: lightSwitchApplication.BrowseProjektItemSet
        },
        ProjektItemSet: {
            _$class: msls.ContentItem,
            _$name: "ProjektItemSet",
            _$parentName: "ProjektItemList",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.BrowseProjektItemSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjektItemSet,
                _$entry: {
                    elementType: lightSwitchApplication.ProjektItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ProjektItemSet",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        ProjektCode: {
            _$class: msls.ContentItem,
            _$name: "ProjektCode",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Projektname: {
            _$class: msls.ContentItem,
            _$name: "Projektname",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        Start: {
            _$class: msls.ContentItem,
            _$name: "Start",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: Date
        },
        Laufzeit: {
            _$class: msls.ContentItem,
            _$name: "Laufzeit",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: Number
        },
        PSPElement: {
            _$class: msls.ContentItem,
            _$name: "PSPElement",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjektItemSet,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjektItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjektItemSet, {
        /// <field>
        /// Called when a new BrowseProjektItemSet screen is created.
        /// <br/>created(msls.application.BrowseProjektItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjektItemSet],
        /// <field>
        /// Called before changes on an active BrowseProjektItemSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjektItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjektItemSet],
        /// <field>
        /// Called after the ProjektItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("ProjektItemList"); }],
        /// <field>
        /// Called after the ProjektItemSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("ProjektItemSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjektCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("ProjektCode"); }],
        /// <field>
        /// Called after the Projektname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projektname_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Projektname"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Group"); }],
        /// <field>
        /// Called after the Start content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Start"); }],
        /// <field>
        /// Called after the Laufzeit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Laufzeit_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Laufzeit"); }],
        /// <field>
        /// Called after the PSPElement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PSPElement_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("PSPElement"); }]
    });

    lightSwitchApplication.ViewProjektItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjektItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ViewProjektItem,
            value: lightSwitchApplication.ViewProjektItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ViewProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        ProjektCode: {
            _$class: msls.ContentItem,
            _$name: "ProjektCode",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Start: {
            _$class: msls.ContentItem,
            _$name: "Start",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Date
        },
        AbteilungItem: {
            _$class: msls.ContentItem,
            _$name: "AbteilungItem",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.AbteilungItem
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        Projektname: {
            _$class: msls.ContentItem,
            _$name: "Projektname",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Laufzeit: {
            _$class: msls.ContentItem,
            _$name: "Laufzeit",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Number
        },
        PSPElement: {
            _$class: msls.ContentItem,
            _$name: "PSPElement",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjektItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewProjektItem, {
        /// <field>
        /// Called when a new ViewProjektItem screen is created.
        /// <br/>created(msls.application.ViewProjektItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewProjektItem],
        /// <field>
        /// Called before changes on an active ViewProjektItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewProjektItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewProjektItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("left"); }],
        /// <field>
        /// Called after the ProjektCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektCode_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("ProjektCode"); }],
        /// <field>
        /// Called after the Start content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Start"); }],
        /// <field>
        /// Called after the AbteilungItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItem_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("AbteilungItem"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("right"); }],
        /// <field>
        /// Called after the Projektname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projektname_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Projektname"); }],
        /// <field>
        /// Called after the Laufzeit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Laufzeit_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Laufzeit"); }],
        /// <field>
        /// Called after the PSPElement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PSPElement_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("PSPElement"); }]
    });

    lightSwitchApplication.AddEditStellenanteilItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStellenanteilItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.AddEditStellenanteilItem,
            value: lightSwitchApplication.AddEditStellenanteilItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.AddEditStellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        Stellenanteil: {
            _$class: msls.ContentItem,
            _$name: "Stellenanteil",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        ProjektItem: {
            _$class: msls.ContentItem,
            _$name: "ProjektItem",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.ProjektItem
        },
        ProjektItem1: {
            _$class: msls.ContentItem,
            _$name: "ProjektItem1",
            _$parentName: "ProjektItem",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStellenanteilItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStellenanteilItem, {
        /// <field>
        /// Called when a new AddEditStellenanteilItem screen is created.
        /// <br/>created(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Called before changes on an active AddEditStellenanteilItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Called to determine if the Delete method can be executed.
        /// <br/>canExecute(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Called to execute the Delete method.
        /// <br/>execute(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Stellenanteil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Called after the ProjektItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("ProjektItem"); }],
        /// <field>
        /// Called after the ProjektItem1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItem1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("ProjektItem1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseStellenanteilItemSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet
        },
        StellenanteilItemList: {
            _$class: msls.ContentItem,
            _$name: "StellenanteilItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet,
            data: lightSwitchApplication.BrowseStellenanteilItemSet,
            value: lightSwitchApplication.BrowseStellenanteilItemSet
        },
        StellenanteilItemSet: {
            _$class: msls.ContentItem,
            _$name: "StellenanteilItemSet",
            _$parentName: "StellenanteilItemList",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet,
            data: lightSwitchApplication.BrowseStellenanteilItemSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseStellenanteilItemSet,
                _$entry: {
                    elementType: lightSwitchApplication.StellenanteilItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "StellenanteilItemSet",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet,
            data: lightSwitchApplication.StellenanteilItem,
            value: Number
        },
        Stellenanteil: {
            _$class: msls.ContentItem,
            _$name: "Stellenanteil",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        VertragItem: {
            _$class: msls.ContentItem,
            _$name: "VertragItem",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.VertragItem
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStellenanteilItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseStellenanteilItemSet, {
        /// <field>
        /// Called when a new BrowseStellenanteilItemSet screen is created.
        /// <br/>created(msls.application.BrowseStellenanteilItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStellenanteilItemSet],
        /// <field>
        /// Called before changes on an active BrowseStellenanteilItemSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseStellenanteilItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStellenanteilItemSet],
        /// <field>
        /// Called after the StellenanteilItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("StellenanteilItemList"); }],
        /// <field>
        /// Called after the StellenanteilItemSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("StellenanteilItemSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("Id"); }],
        /// <field>
        /// Called after the Stellenanteil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Called after the VertragItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItem_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("VertragItem"); }]
    });

    lightSwitchApplication.ViewStellenanteilItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewStellenanteilItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.ViewStellenanteilItem,
            value: lightSwitchApplication.ViewStellenanteilItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.ViewStellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        Stellenanteil: {
            _$class: msls.ContentItem,
            _$name: "Stellenanteil",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        VertragItem: {
            _$class: msls.ContentItem,
            _$name: "VertragItem",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.VertragItem
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewStellenanteilItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewStellenanteilItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewStellenanteilItem, {
        /// <field>
        /// Called when a new ViewStellenanteilItem screen is created.
        /// <br/>created(msls.application.ViewStellenanteilItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewStellenanteilItem],
        /// <field>
        /// Called before changes on an active ViewStellenanteilItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewStellenanteilItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewStellenanteilItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Stellenanteil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Called after the VertragItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItem_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("VertragItem"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("right"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditVertragItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditVertragItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.AddEditVertragItem,
            value: lightSwitchApplication.AddEditVertragItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.AddEditVertragItem,
            value: lightSwitchApplication.VertragItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        von: {
            _$class: msls.ContentItem,
            _$name: "von",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        bis: {
            _$class: msls.ContentItem,
            _$name: "bis",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        BeschäftigungsArtItem: {
            _$class: msls.ContentItem,
            _$name: "BeschäftigungsArtItem",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.AddEditVertragItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        BeschäftigungsArtItem1: {
            _$class: msls.ContentItem,
            _$name: "BeschäftigungsArtItem1",
            _$parentName: "BeschäftigungsArtItem",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.BeschäftigungsArtItem,
            value: lightSwitchApplication.BeschäftigungsArtItem
        },
        StellenanteilItemCollection: {
            _$class: msls.ContentItem,
            _$name: "StellenanteilItemCollection",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.AddEditVertragItem,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditVertragItem,
                _$entry: {
                    elementType: lightSwitchApplication.StellenanteilItem
                }
            }
        },
        StellenanteilItemCollectionTemplate: {
            _$class: msls.ContentItem,
            _$name: "StellenanteilItemCollectionTemplate",
            _$parentName: "StellenanteilItemCollection",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.StellenanteilItem
        },
        Stellenanteil: {
            _$class: msls.ContentItem,
            _$name: "Stellenanteil",
            _$parentName: "StellenanteilItemCollectionTemplate",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        ProjektKurzName: {
            _$class: msls.ContentItem,
            _$name: "ProjektKurzName",
            _$parentName: "StellenanteilItemCollectionTemplate",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        PSPElement: {
            _$class: msls.ContentItem,
            _$name: "PSPElement",
            _$parentName: "StellenanteilItemCollectionTemplate",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditVertragItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditVertragItem, {
        /// <field>
        /// Called when a new AddEditVertragItem screen is created.
        /// <br/>created(msls.application.AddEditVertragItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Called before changes on an active AddEditVertragItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditVertragItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Called to determine if the DeleteVertrag method can be executed.
        /// <br/>canExecute(msls.application.AddEditVertragItem screen)
        /// </field>
        DeleteVertrag_canExecute: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Called to execute the DeleteVertrag method.
        /// <br/>execute(msls.application.AddEditVertragItem screen)
        /// </field>
        DeleteVertrag_execute: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("left"); }],
        /// <field>
        /// Called after the von content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("von"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("right"); }],
        /// <field>
        /// Called after the bis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("bis"); }],
        /// <field>
        /// Called after the BeschäftigungsArtItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("BeschäftigungsArtItem"); }],
        /// <field>
        /// Called after the BeschäftigungsArtItem1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItem1_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("BeschäftigungsArtItem1"); }],
        /// <field>
        /// Called after the StellenanteilItemCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemCollection_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("StellenanteilItemCollection"); }],
        /// <field>
        /// Called after the StellenanteilItemCollectionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("StellenanteilItemCollectionTemplate"); }],
        /// <field>
        /// Called after the Stellenanteil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Called after the ProjektKurzName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektKurzName_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("ProjektKurzName"); }],
        /// <field>
        /// Called after the PSPElement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PSPElement_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("PSPElement"); }]
    });

    lightSwitchApplication.BrowseVertragItemSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseVertragItemSet
        },
        VertragItemList: {
            _$class: msls.ContentItem,
            _$name: "VertragItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseVertragItemSet,
            data: lightSwitchApplication.BrowseVertragItemSet,
            value: lightSwitchApplication.BrowseVertragItemSet
        },
        VertragItemSet: {
            _$class: msls.ContentItem,
            _$name: "VertragItemSet",
            _$parentName: "VertragItemList",
            screen: lightSwitchApplication.BrowseVertragItemSet,
            data: lightSwitchApplication.BrowseVertragItemSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseVertragItemSet,
                _$entry: {
                    elementType: lightSwitchApplication.VertragItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "VertragItemSet",
            screen: lightSwitchApplication.BrowseVertragItemSet,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        von: {
            _$class: msls.ContentItem,
            _$name: "von",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragItemSet,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        bis: {
            _$class: msls.ContentItem,
            _$name: "bis",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragItemSet,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseVertragItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseVertragItemSet, {
        /// <field>
        /// Called when a new BrowseVertragItemSet screen is created.
        /// <br/>created(msls.application.BrowseVertragItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseVertragItemSet],
        /// <field>
        /// Called before changes on an active BrowseVertragItemSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseVertragItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseVertragItemSet],
        /// <field>
        /// Called after the VertragItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("VertragItemList"); }],
        /// <field>
        /// Called after the VertragItemSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("VertragItemSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the von content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("von"); }],
        /// <field>
        /// Called after the bis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("bis"); }]
    });

    lightSwitchApplication.ViewVertragItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewVertragItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.ViewVertragItem,
            value: lightSwitchApplication.ViewVertragItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.ViewVertragItem,
            value: lightSwitchApplication.VertragItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        von: {
            _$class: msls.ContentItem,
            _$name: "von",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        bis: {
            _$class: msls.ContentItem,
            _$name: "bis",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        MitarbeiterItem: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterItem",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: lightSwitchApplication.VertragItem
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.VertragItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewVertragItem
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.ViewVertragItem,
            data: lightSwitchApplication.ViewVertragItem,
            value: lightSwitchApplication.ViewVertragItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewVertragItem, {
        /// <field>
        /// Called when a new ViewVertragItem screen is created.
        /// <br/>created(msls.application.ViewVertragItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewVertragItem],
        /// <field>
        /// Called before changes on an active ViewVertragItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewVertragItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewVertragItem],
        /// <field>
        /// Called to determine if the Delete method can be executed.
        /// <br/>canExecute(msls.application.ViewVertragItem screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.ViewVertragItem],
        /// <field>
        /// Called to execute the Delete method.
        /// <br/>execute(msls.application.ViewVertragItem screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.ViewVertragItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("left"); }],
        /// <field>
        /// Called after the von content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("von"); }],
        /// <field>
        /// Called after the bis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("bis"); }],
        /// <field>
        /// Called after the MitarbeiterItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterItem_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("MitarbeiterItem"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Group"); }]
    });

    lightSwitchApplication.BrowseVertragJeMonatItemSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet
        },
        VertragJeMonatItemList: {
            _$class: msls.ContentItem,
            _$name: "VertragJeMonatItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            value: lightSwitchApplication.BrowseVertragJeMonatItemSet
        },
        VertragJeMonatItemSet: {
            _$class: msls.ContentItem,
            _$name: "VertragJeMonatItemSet",
            _$parentName: "VertragJeMonatItemList",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
                _$entry: {
                    elementType: lightSwitchApplication.VertragJeMonatItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "VertragJeMonatItemSet",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.VertragJeMonatItem,
            value: lightSwitchApplication.VertragJeMonatItem
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.VertragJeMonatItem,
            value: Number
        },
        Monat: {
            _$class: msls.ContentItem,
            _$name: "Monat",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.VertragJeMonatItem,
            value: Date
        },
        Stellenanteil: {
            _$class: msls.ContentItem,
            _$name: "Stellenanteil",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.VertragJeMonatItem,
            value: String
        },
        ProjektKurzName: {
            _$class: msls.ContentItem,
            _$name: "ProjektKurzName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.VertragJeMonatItem,
            value: String
        },
        Nachname: {
            _$class: msls.ContentItem,
            _$name: "Nachname",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet,
            data: lightSwitchApplication.VertragJeMonatItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseVertragJeMonatItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseVertragJeMonatItemSet, {
        /// <field>
        /// Called when a new BrowseVertragJeMonatItemSet screen is created.
        /// <br/>created(msls.application.BrowseVertragJeMonatItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseVertragJeMonatItemSet],
        /// <field>
        /// Called before changes on an active BrowseVertragJeMonatItemSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseVertragJeMonatItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseVertragJeMonatItemSet],
        /// <field>
        /// Called after the VertragJeMonatItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragJeMonatItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("VertragJeMonatItemList"); }],
        /// <field>
        /// Called after the VertragJeMonatItemSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragJeMonatItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("VertragJeMonatItemSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Id"); }],
        /// <field>
        /// Called after the Monat content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Monat_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Monat"); }],
        /// <field>
        /// Called after the Stellenanteil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Called after the ProjektKurzName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektKurzName_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("ProjektKurzName"); }],
        /// <field>
        /// Called after the Nachname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Nachname"); }]
    });

}(msls.application));