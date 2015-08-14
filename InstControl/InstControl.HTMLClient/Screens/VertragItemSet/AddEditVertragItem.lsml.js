/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditVertragItem.DeleteVertrag_execute = function (screen) {
    // Write code here.
    screen.VertragItem.deleteEntity();
};
myapp.AddEditVertragItem.beforeApplyChanges = function (screen) {
    // Write code here.

};
myapp.AddEditVertragItem.StellenanteilItemCollection_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.AddEditVertragItem.StellenanteilItemCollection_render = function (element, contentItem) {
    // Write code here.
    var itemTemplate = $("<div></div>").attr('id', 'StellenanteilItemCollection')

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
                columns: fieldname
            });
}
}
