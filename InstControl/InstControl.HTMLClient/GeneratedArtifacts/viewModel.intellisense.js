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
        Abteilungsleiter: {
            _$class: msls.ContentItem,
            _$name: "Abteilungsleiter",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.MitarbeiterItem
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Abteilungsleiter",
            screen: lightSwitchApplication.AddEditAbteilungItem,
            data: lightSwitchApplication.MitarbeiterItem,
            value: lightSwitchApplication.MitarbeiterItem
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
        /// Wird aufgerufen, wenn ein neuer AddEditAbteilungItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditAbteilungItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAbteilungItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditAbteilungItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditAbteilungItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAbteilungItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Kürzel gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Kürzel"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Langname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Langname_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Langname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Abteilungsleiter gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Abteilungsleiter_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("Abteilungsleiter"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement RowTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAbteilungItem().findContentItem("RowTemplate"); }]
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
        Abteilungsleiter: {
            _$class: msls.ContentItem,
            _$name: "Abteilungsleiter",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAbteilungItemSet,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.MitarbeiterItem
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
        /// Wird aufgerufen, wenn ein neuer BrowseAbteilungItemSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseAbteilungItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAbteilungItemSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseAbteilungItemSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseAbteilungItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAbteilungItemSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement AbteilungItemList gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("AbteilungItemList"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement AbteilungItemSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AbteilungItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("AbteilungItemSet"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Kürzel gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("Kürzel"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Langname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Langname_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("Langname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Abteilungsleiter gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Abteilungsleiter_postRender: [$element, function () { return new lightSwitchApplication.BrowseAbteilungItemSet().findContentItem("Abteilungsleiter"); }]
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
        Abteilungsleiter: {
            _$class: msls.ContentItem,
            _$name: "Abteilungsleiter",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewAbteilungItem,
            data: lightSwitchApplication.AbteilungItem,
            value: lightSwitchApplication.MitarbeiterItem
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
        /// Wird aufgerufen, wenn ein neuer ViewAbteilungItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewAbteilungItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewAbteilungItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewAbteilungItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewAbteilungItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewAbteilungItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Kürzel gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Kürzel"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Langname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Langname_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Langname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Abteilungsleiter gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Abteilungsleiter_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Abteilungsleiter"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Created"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ModifiedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Modified gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Modified"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterItemCollection gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterItemCollection_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("MitarbeiterItemCollection"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterItemCollection1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterItemCollection1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("MitarbeiterItemCollection1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("columns1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Foto gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Foto_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Foto"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Nachname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Vorname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Geburtstag gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("Geburtstag"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItemCollection gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemCollection_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektItemCollection"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItemCollection1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemCollection1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektItemCollection1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("rows1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektKurzName gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektKurzName_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektKurzName"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektLangName gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektLangName_postRender: [$element, function () { return new lightSwitchApplication.ViewAbteilungItem().findContentItem("ProjektLangName"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Start gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer AddEditBeschäftigungsArtItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditBeschäftigungsArtItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBeschäftigungsArtItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditBeschäftigungsArtItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditBeschäftigungsArtItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBeschäftigungsArtItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Art gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Art_postRender: [$element, function () { return new lightSwitchApplication.AddEditBeschäftigungsArtItem().findContentItem("Art"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer BrowseBeschäftigungsArtItemSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseBeschäftigungsArtItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBeschäftigungsArtItemSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseBeschäftigungsArtItemSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseBeschäftigungsArtItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBeschäftigungsArtItemSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement BeschäftigungsArtItemList gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("BeschäftigungsArtItemList"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement BeschäftigungsArtItemSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("BeschäftigungsArtItemSet"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Art gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Art_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("Art"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseBeschäftigungsArtItemSet().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer ViewBeschäftigungsArtItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewBeschäftigungsArtItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewBeschäftigungsArtItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewBeschäftigungsArtItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewBeschäftigungsArtItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewBeschäftigungsArtItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Art gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Art_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Art"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Created"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ModifiedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Modified gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewBeschäftigungsArtItem().findContentItem("Modified"); }]
    });

    lightSwitchApplication.Browse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Browse
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Browse,
            data: lightSwitchApplication.Browse,
            value: lightSwitchApplication.Browse
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "Group",
            screen: lightSwitchApplication.Browse,
            data: lightSwitchApplication.Browse,
            value: String
        },
        ShowBrowseMitarbeiterSet: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMitarbeiterSet",
            _$parentName: "Group",
            screen: lightSwitchApplication.Browse
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Browse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Browse, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer Browse-Bildschirm erstellt wird.
        /// <br/>created(msls.application.Browse screen)
        /// </field>
        created: [lightSwitchApplication.Browse],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven Browse-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.Browse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Browse],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Browse().findContentItem("Group"); }],
        /// <field>
        /// Wird aufgerufen, um das Inhaltselement Property1 zu rendern.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_render: [$element, function () { return new lightSwitchApplication.Browse().findContentItem("Property1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ShowBrowseMitarbeiterSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMitarbeiterSet_postRender: [$element, function () { return new lightSwitchApplication.Browse().findContentItem("ShowBrowseMitarbeiterSet"); }]
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
        Kürzel: {
            _$class: msls.ContentItem,
            _$name: "Kürzel",
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
        /// Wird aufgerufen, wenn ein neuer BrowseVertragJeMonatItemSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseVertragJeMonatItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseVertragJeMonatItemSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseVertragJeMonatItemSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseVertragJeMonatItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseVertragJeMonatItemSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragJeMonatItemList gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragJeMonatItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("VertragJeMonatItemList"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragJeMonatItemSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragJeMonatItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("VertragJeMonatItemSet"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Id gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Id"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Monat gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Monat_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Monat"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Stellenanteil gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektKurzName gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektKurzName_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("ProjektKurzName"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Nachname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Kürzel gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Kürzel_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragJeMonatItemSet().findContentItem("Kürzel"); }]
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
        /// Wird aufgerufen, wenn ein neuer AddEditKontoItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditKontoItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditKontoItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditKontoItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditKontoItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditKontoItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer BrowseKontoItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseKontoItem screen)
        /// </field>
        created: [lightSwitchApplication.BrowseKontoItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseKontoItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseKontoItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseKontoItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement KontoItemList gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer ViewKontoItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewKontoItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewKontoItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewKontoItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewKontoItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewKontoItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer AddEditMitarbeiter-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditMitarbeiter screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditMitarbeiter-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditMitarbeiter screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode Delete ausgeführt werden kann.
        /// <br/>canExecute(msls.application.AddEditMitarbeiter screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um die Methode Delete auszuführen.
        /// <br/>execute(msls.application.AddEditMitarbeiter screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.AddEditMitarbeiter],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Nachname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Vorname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Geburtstag gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Geburtstag"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Erstanstellung gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Erstanstellung_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Erstanstellung"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Ausscheidedatum gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Ausscheidedatum"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement PersonalNr gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonalNr_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("PersonalNr"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Raum gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Raum_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Raum"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Telefon gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Telefon"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Foto gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Foto_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Foto"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditMitarbeiter().findContentItem("Group"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Bermerkung gerendert wurde.
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
        Geburtstag: {
            _$class: msls.ContentItem,
            _$name: "Geburtstag",
            _$parentName: "aktuelleMitarbeiterTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: lightSwitchApplication.BrowseMitarbeiterSet
        },
        Monate: {
            _$class: msls.ContentItem,
            _$name: "Monate",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: Number
        },
        MitarbeiterMitAuslaufendenVertrag: {
            _$class: msls.ContentItem,
            _$name: "MitarbeiterMitAuslaufendenVertrag",
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
        Ausscheidedatum: {
            _$class: msls.ContentItem,
            _$name: "Ausscheidedatum",
            _$parentName: "MitarbeiterOhneVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: Date
        },
        Bermerkung: {
            _$class: msls.ContentItem,
            _$name: "Bermerkung",
            _$parentName: "MitarbeiterOhneVertragTemplate",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.MitarbeiterItem,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMitarbeiterSet,
            data: lightSwitchApplication.BrowseMitarbeiterSet,
            value: lightSwitchApplication.BrowseMitarbeiterSet
        },
        ausgeschiedeneMitarbeiter: {
            _$class: msls.ContentItem,
            _$name: "ausgeschiedeneMitarbeiter",
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
        /// Wird aufgerufen, wenn ein neuer BrowseMitarbeiterSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseMitarbeiterSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode Delete ausgeführt werden kann.
        /// <br/>canExecute(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Wird aufgerufen, um die Methode Delete auszuführen.
        /// <br/>execute(msls.application.BrowseMitarbeiterSet screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.BrowseMitarbeiterSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement aktuelleMitarbeiter gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        aktuelleMitarbeiter_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("aktuelleMitarbeiter"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement aktuelleMitarbeiterTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        aktuelleMitarbeiterTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("aktuelleMitarbeiterTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Geburtstag gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Geburtstag"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group4 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group4"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Monate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Monate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Monate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterMitAuslaufendenVertrag gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterMitAuslaufendenVertrag_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterMitAuslaufendenVertrag"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterMitAuslaufendenVertragTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterMitAuslaufendenVertragTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterMitAuslaufendenVertragTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname3 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname3_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname3"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname3 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname3_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname3"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Bermerkung1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Bermerkung1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group3 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group3"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterOhneVertrag gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterOhneVertrag_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterOhneVertrag"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterOhneVertragTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterOhneVertragTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("MitarbeiterOhneVertragTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname2 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname2"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname2 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname2"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Ausscheidedatum gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Ausscheidedatum"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Bermerkung gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bermerkung_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Bermerkung"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group2 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Group2"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ausgeschiedeneMitarbeiter gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ausgeschiedeneMitarbeiter_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("ausgeschiedeneMitarbeiter"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ausgeschiedeneMitarbeiterTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ausgeschiedeneMitarbeiterTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("ausgeschiedeneMitarbeiterTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Nachname1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Vorname1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Ausscheidedatum1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMitarbeiterSet().findContentItem("Ausscheidedatum1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer ViewMitarbeiter-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewMitarbeiter screen)
        /// </field>
        created: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewMitarbeiter-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewMitarbeiter screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode UpdateTab ausgeführt werden kann.
        /// <br/>canExecute(msls.application.ViewMitarbeiter screen)
        /// </field>
        UpdateTab_canExecute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um die Methode UpdateTab auszuführen.
        /// <br/>execute(msls.application.ViewMitarbeiter screen)
        /// </field>
        UpdateTab_execute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode RefreshTabs ausgeführt werden kann.
        /// <br/>canExecute(msls.application.ViewMitarbeiter screen)
        /// </field>
        RefreshTabs_canExecute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um die Methode RefreshTabs auszuführen.
        /// <br/>execute(msls.application.ViewMitarbeiter screen)
        /// </field>
        RefreshTabs_execute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode DeleteVertrag ausgeführt werden kann.
        /// <br/>canExecute(msls.application.ViewMitarbeiter screen)
        /// </field>
        DeleteVertrag_canExecute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, um die Methode DeleteVertrag auszuführen.
        /// <br/>execute(msls.application.ViewMitarbeiter screen)
        /// </field>
        DeleteVertrag_execute: [lightSwitchApplication.ViewMitarbeiter],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Tab_VertragItemCollectionCurrent gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tab_VertragItemCollectionCurrent_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Tab_VertragItemCollectionCurrent"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemCollectionCurrent gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionCurrent_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionCurrent"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemCollectionTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement von1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von1_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("von1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement bis1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis1_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("bis1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement BeschäftigungsArtItem gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItem_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("BeschäftigungsArtItem"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Tab_VertragItemCollectionPlanned gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tab_VertragItemCollectionPlanned_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Tab_VertragItemCollectionPlanned"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemCollectionPlanned gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionPlanned_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionPlanned"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemCollectionPlannedTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionPlannedTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionPlannedTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement von2 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von2_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("von2"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement bis2 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis2_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("bis2"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Tab_VertragItemCollectionEnded gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tab_VertragItemCollectionEnded_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Tab_VertragItemCollectionEnded"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemCollectionEnded gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionEnded_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionEnded"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemCollectionEndedTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemCollectionEndedTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("VertragItemCollectionEndedTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement von gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("von"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement bis gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("bis"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Stammdaten gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stammdaten_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Stammdaten"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Nachname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nachname_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Nachname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Vorname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vorname_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Vorname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Geburtstag gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Geburtstag_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Geburtstag"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Erstanstellung gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Erstanstellung_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Erstanstellung"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Ausscheidedatum gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ausscheidedatum_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Ausscheidedatum"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group2 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Group2"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Telefon gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Telefon"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Raum gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Raum_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Raum"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Foto gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Foto_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Foto"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Created"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ModifiedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Modified gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Modified"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewMitarbeiter().findContentItem("Group1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Bermerkung gerendert wurde.
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
        Projektname: {
            _$class: msls.ContentItem,
            _$name: "Projektname",
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
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        Laufzeit: {
            _$class: msls.ContentItem,
            _$name: "Laufzeit",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Number
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
        /// Wird aufgerufen, wenn ein neuer AddEditProjektItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditProjektItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjektItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditProjektItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjektItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjektItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektCode gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("ProjektCode"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Projektname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projektname_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Projektname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Start gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Start"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Laufzeit gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Laufzeit_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjektItem().findContentItem("Laufzeit"); }]
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
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjektItemSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjektItemSet, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer BrowseProjektItemSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseProjektItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjektItemSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseProjektItemSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjektItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjektItemSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItemList gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("ProjektItemList"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItemSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("ProjektItemSet"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektCode gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("ProjektCode"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Projektname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projektname_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Projektname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Group gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Group"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Start gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Start"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Laufzeit gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Laufzeit_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjektItemSet().findContentItem("Laufzeit"); }]
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
        Projektname: {
            _$class: msls.ContentItem,
            _$name: "Projektname",
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
        Laufzeit: {
            _$class: msls.ContentItem,
            _$name: "Laufzeit",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: lightSwitchApplication.ProjektItem
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjektItem,
            data: lightSwitchApplication.ProjektItem,
            value: Date
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
        /// Wird aufgerufen, wenn ein neuer ViewProjektItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewProjektItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewProjektItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewProjektItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewProjektItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewProjektItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektCode gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektCode_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("ProjektCode"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Projektname gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projektname_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Projektname"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Start gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Start_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Start"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Laufzeit gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Laufzeit_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Laufzeit"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Created"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ModifiedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Modified gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewProjektItem().findContentItem("Modified"); }]
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
        /// Wird aufgerufen, wenn ein neuer AddEditStellenanteilItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditStellenanteilItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode Delete ausgeführt werden kann.
        /// <br/>canExecute(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Wird aufgerufen, um die Methode Delete auszuführen.
        /// <br/>execute(msls.application.AddEditStellenanteilItem screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.AddEditStellenanteilItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Stellenanteil gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItem gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("ProjektItem"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItem1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItem1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStellenanteilItem().findContentItem("ProjektItem1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer BrowseStellenanteilItemSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseStellenanteilItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStellenanteilItemSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseStellenanteilItemSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseStellenanteilItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStellenanteilItemSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement StellenanteilItemList gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("StellenanteilItemList"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement StellenanteilItemSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("StellenanteilItemSet"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Id gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("Id"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Stellenanteil gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.BrowseStellenanteilItemSet().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItem gerendert wurde.
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
        /// Wird aufgerufen, wenn ein neuer ViewStellenanteilItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewStellenanteilItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewStellenanteilItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewStellenanteilItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewStellenanteilItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewStellenanteilItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Stellenanteil gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItem gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItem_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("VertragItem"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("Created"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ModifiedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewStellenanteilItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Modified gerendert wurde.
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
        ProjektItem: {
            _$class: msls.ContentItem,
            _$name: "ProjektItem",
            _$parentName: "StellenanteilItemCollectionTemplate",
            screen: lightSwitchApplication.AddEditVertragItem,
            data: lightSwitchApplication.StellenanteilItem,
            value: lightSwitchApplication.ProjektItem
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
        /// Wird aufgerufen, wenn ein neuer AddEditVertragItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.AddEditVertragItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven AddEditVertragItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.AddEditVertragItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Wird aufgerufen, um zu ermitteln, ob die Methode DeleteVertrag ausgeführt werden kann.
        /// <br/>canExecute(msls.application.AddEditVertragItem screen)
        /// </field>
        DeleteVertrag_canExecute: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Wird aufgerufen, um die Methode DeleteVertrag auszuführen.
        /// <br/>execute(msls.application.AddEditVertragItem screen)
        /// </field>
        DeleteVertrag_execute: [lightSwitchApplication.AddEditVertragItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement von gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("von"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement bis gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("bis"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement BeschäftigungsArtItem gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("BeschäftigungsArtItem"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement BeschäftigungsArtItem1 gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BeschäftigungsArtItem1_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("BeschäftigungsArtItem1"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement StellenanteilItemCollection gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemCollection_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("StellenanteilItemCollection"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement StellenanteilItemCollectionTemplate gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StellenanteilItemCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("StellenanteilItemCollectionTemplate"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Stellenanteil gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stellenanteil_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("Stellenanteil"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ProjektItem gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjektItem_postRender: [$element, function () { return new lightSwitchApplication.AddEditVertragItem().findContentItem("ProjektItem"); }]
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
        /// Wird aufgerufen, wenn ein neuer BrowseVertragItemSet-Bildschirm erstellt wird.
        /// <br/>created(msls.application.BrowseVertragItemSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseVertragItemSet],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven BrowseVertragItemSet-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.BrowseVertragItemSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseVertragItemSet],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemList gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("VertragItemList"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement VertragItemSet gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VertragItemSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("VertragItemSet"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement rows gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("rows"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement von gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.BrowseVertragItemSet().findContentItem("von"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement bis gerendert wurde.
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
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewVertragItem, {
        /// <field>
        /// Wird aufgerufen, wenn ein neuer ViewVertragItem-Bildschirm erstellt wird.
        /// <br/>created(msls.application.ViewVertragItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewVertragItem],
        /// <field>
        /// Wird aufgerufen, bevor Änderungen auf einem aktiven ViewVertragItem-Bildschirm angewendet werden.
        /// <br/>beforeApplyChanges(msls.application.ViewVertragItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewVertragItem],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Details gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Details"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement columns gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("columns"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement left gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("left"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement von gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        von_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("von"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement bis gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bis_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("bis"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement MitarbeiterItem gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MitarbeiterItem_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("MitarbeiterItem"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement right gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("right"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement CreatedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Created gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Created"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement ModifiedBy gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Wird aufgerufen, nachdem das Inhaltselement Modified gerendert wurde.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewVertragItem().findContentItem("Modified"); }]
    });

}(msls.application));