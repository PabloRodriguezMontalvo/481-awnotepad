// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var datos = new WinJS.Binding.List(Global.Blocs);
    var miembros = {
        Blocs: datos
    };

    WinJS.Namespace.define("Datos", miembros);

    WinJS.UI.Pages.define("/pages/blocs/blocs.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            //document.getElementById("nombreUsuario").innerHTML =
            //        Global.Usuario.nombre;
            WinJS.Binding.processAll(document.querySelector("#cabecera"),
                Global.Usuario);
          

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
