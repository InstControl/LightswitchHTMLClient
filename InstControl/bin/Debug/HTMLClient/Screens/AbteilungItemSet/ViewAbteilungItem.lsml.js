/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewAbteilungItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.AbteilungItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.AbteilungItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

