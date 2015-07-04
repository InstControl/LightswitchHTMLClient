/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditStellenanteilItem.Delete_execute = function (screen) {
    // Write code here.
    screen.StellenanteilItem.deleteEntity();
    msls.showMessageBox("Datensatz zum Löschen markiert");
};

