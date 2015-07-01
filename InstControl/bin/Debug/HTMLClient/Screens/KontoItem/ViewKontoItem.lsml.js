/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewKontoItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.KontoItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.KontoItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

