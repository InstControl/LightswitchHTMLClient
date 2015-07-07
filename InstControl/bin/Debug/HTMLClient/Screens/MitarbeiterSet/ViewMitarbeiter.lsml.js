/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.ViewMitarbeiter.Stammdaten_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.MitarbeiterItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.MitarbeiterItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
};

myapp.ViewMitarbeiter.Tab_VertragItemCollectionCurrent_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.MitarbeiterItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.MitarbeiterItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
};

myapp.ViewMitarbeiter.RefreshTabs_execute = function (screen) {
    // Write code here.
    screen.VertragItemCollectionCurrent.refresh();
    screen.VertragItemCollectionPlanned.refresh();
    screen.VertragItemCollectionEnded.refresh();
};

myapp.ViewMitarbeiter.Tab_VertragItemCollectionPlanned_postRender = function (element, contentItem) {
    // Write code here.

};


myapp.ViewMitarbeiter.DeleteVertrag_execute = function (screen) {
    // Write code here.
    screen.VertragItemCollectionEnded.selectedItem.deleteEntity();
};