﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewBeschäftigungsArtItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.BeschäftigungsArtItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.BeschäftigungsArtItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

