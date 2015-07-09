/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseMitarbeiterSet.Delete_execute = function (screen) {

    // Delete selected

    screen.aktuelleMitarbeiter.selectedItem.deleteEntity 

    // Save changes

    myapp.commitChanges().then(function success() {

        // If success.

        msls.showMessageBox("Delete is successfull.", { title: "Delete" });

    }, function fail(e) {

        // If error occurs,

        msls.showMessageBox(e.message, { title: e.title }).then(function () {

            // Cancel Changes

            myapp.cancelChanges();

        });

    });
};
myapp.BrowseMitarbeiterSet.beforeApplyChanges = function (screen) {
    screen.MitarbeiterAktuell.refresh();
    screen.MitarbeiterAusgeschieden.refresh();
    screen.MitarbeiterOhneVertrag.refresh();
    
};
myapp.BrowseMitarbeiterSet.Monate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.value = 2;
    var Anzahl = contentItem.screen.MitarbeiterMitAuslaufendenVertrag.count;
    contentItem.screen.findContentItem("Group4").displayName = "mit auslaufende Verträgen (" + Anzahl.toString() + ")";
};
myapp.BrowseMitarbeiterSet.Group4_postRender = function (element, contentItem) {
    var Anzahl = contentItem.screen.MitarbeiterMitAuslaufendenVertrag.count;
    contentItem.screen.findContentItem("Group4").displayName = "mit auslaufende Verträgen (" + Anzahl.toString() + ")";
};
myapp.BrowseMitarbeiterSet.Group3_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.BrowseMitarbeiterSet.created = function (screen) {
    // Write code here.
};