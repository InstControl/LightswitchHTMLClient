/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseMitarbeiterSet.Delete_execute = function (screen) {

    // Delete selected

    screen.aktuelleMitarbeiter.selectedItem.deleteEntity 

    // Save changes

    myapp.commitChanges().then(function success() {

        // If success.

        msls.showMessageBox("Delete is successfull.", { title: "Delete" });

    }, function fail(e) {

        // If error occurs,

        msls.showMessageBox(e.message, { title: e.title }).then(function () {

            // Cancel Changes

            myapp.cancelChanges();

        });

    });
};

myapp.BrowseMitarbeiterSet.beforeApplyChanges = function (screen) {
    screen.MitarbeiterAktuell.refresh();
    screen.MitarbeiterAusgeschieden.refresh();
    screen.MitarbeiterOhneVertrag.refresh();
};

myapp.BrowseMitarbeiterSet.Monate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.value = 6;

};


myapp.BrowseMitarbeiterSet.aktuelleMitarbeiter_render = function (element, contentItem) {
    // Write code here.
    var itemTemplate = $("<div></div>").attr('id', 'aktuelleMitarbeiter')

    // Append the div element to screen 
    itemTemplate.appendTo($(element));

    contentItem.value.oncollectionchange = function () {

        if (itemTemplate.hasClass('e-grid')) {
            itemTemplate.ejGrid('destroy');
        }
        var first = contentItem.children[0], fieldname = [];
        for (i = 0; i < first.children.length; i++) {
            fieldname[i] = { field: first.children[i].valueModel.name };
        }

        //Rendering the Grid Control
        itemTemplate.ejGrid(
            {
                dataSource: contentItem.value.data,
                columns: fieldname,
            });
    };
};



myapp.BrowseMitarbeiterSet.VertragBis_postRender = function (element, contentItem) {
    // Write code here.
    var heute = new Date();
    contentItem.value=heute;
    console.log("strValue: " + contentItem.stringValue);
};

myapp.BrowseMitarbeiterSet.Property1_postRender = function (element, contentItem) {
    // Write code here.
    $(element).text("hallo")
    contentItem.value = "Hall2o";
};
myapp.BrowseMitarbeiterSet.created = function (screen) {
    // Write code here.
    var heute = new Date();
    //screen.findContentItem("Group1").displayName = screen.findContentItem("Group1").displayName + "(" + screen.MitarbeiterAktuell.count.toString() + ")";

};