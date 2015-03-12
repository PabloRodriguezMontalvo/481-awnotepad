(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            var log = document.getElementById("btnLogin");
            
            log.addEventListener("click", function() {

                var u = new Modelo.Usuario(undefined, undefined, undefined,
                    document.getElementById("txtLogin").value,
                    document.getElementById("txtPas").value
                );

                Azure.login(u);


            });

            document.getElementById("btnReg").addEventListener("click",
                function() {
                    WinJS.Navigation.navigate("/pages/registro/registro.html",
                        WinJS.Navigation.state);


                });

        }
    });
})();
