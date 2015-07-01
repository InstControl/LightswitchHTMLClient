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