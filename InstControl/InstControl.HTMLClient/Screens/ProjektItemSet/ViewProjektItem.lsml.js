/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProjektItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProjektItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProjektItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

