/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewStellenanteilItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.StellenanteilItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.StellenanteilItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

