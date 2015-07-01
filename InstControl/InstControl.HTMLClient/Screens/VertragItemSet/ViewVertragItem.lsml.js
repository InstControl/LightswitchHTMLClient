/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewVertragItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.VertragItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.VertragItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

