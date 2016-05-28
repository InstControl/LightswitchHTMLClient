/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewVertragItem.Details_postRender = function (element, contentItem) {
    // Write code here.

}


myapp.ViewVertragItem.Delete_execute = function (screen) {
    screen.VertragItem.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
myapp.ViewVertragItem.created = function (screen) {
    // Write code here.

};