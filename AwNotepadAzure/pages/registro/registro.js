// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var $ = function(ele) {

        return document.querySelector(ele);

    };
    WinJS.UI.Pages.define("/pages/registro/registro.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            document.getElementById("btnEjecutarRegistro").addEventListener("click",
                function () {
                    var us = new Modelo.Usuario(undefined, $("#txtNom").value,
                        $("#txtApe").value, $("#txtEma").value,
                        $("#txtPwd").value
                    );

                    Azure.registro(us);

                });
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
