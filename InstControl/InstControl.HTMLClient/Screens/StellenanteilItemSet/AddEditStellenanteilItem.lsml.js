/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditStellenanteilItem.Delete_execute = function (screen) {
        screen.StellenanteilItem.deleteEntity();
        msls.showMessageBox("Datensatz zum Löschen markiert");
};


myapp.AddEditStellenanteilItem.beforeApplyChanges = function (screen) {
    // Write code here.

};