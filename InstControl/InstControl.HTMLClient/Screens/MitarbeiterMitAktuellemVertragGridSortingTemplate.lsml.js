/// <reference path="~/GeneratedArtifacts/viewModel.js" />
myapp.MitarbeiterMitAktuellemVertragGridSortingTemplate.MitarbeiterItem_render = function (element, contentItem) {
    // Write code here.
    var itemTemplate = $("<div></div>").attr('id', 'MitarbeiterItem')

    // Append the div element to screen 
    itemTemplate.appendTo($(element));

    contentItem.value.oncollectionchange = function () {

        if (itemTemplate.hasClass('e-grid')) {
            itemTemplate.ejGrid('destroy');
        }
        var first = contentItem.children[0], fieldname=[];
        for (i = 0; i < first.children.length; i++) {
            fieldname[i] = { field: first.children[i].valueModel.name };
        }
      
        //Rendering the Grid Control
        itemTemplate.ejGrid(
            {
                dataSource: contentItem.value.data,
                allowSorting: true,
                columns: fieldname
            });
    }
}