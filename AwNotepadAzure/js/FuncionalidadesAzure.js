(function() {
    var cliente = new WindowsAzure.MobileServiceClient(
        "https://awnotepad.azure-mobile.net/",
        "dpRuizzhXZcJOEFKRujsFLigRMUTHQ39");


    var login= function(usuario) {
        var tabla = cliente.getTable("Usuarios");


        try {
            tabla.where({ email: usuario.email, password: usuario.password })
                .read().done(function(res) {

                    if (res.length > 0) {
                        var d = new Windows.UI.Popups.
                            MessageDialog("Usuario conectado con exito");

                        d.showAsync();

                    } else {
                        var d = new Windows.UI.Popups.
                            MessageDialog("Usuario desconocido");

                        d.showAsync();

                    }


                });
        } catch (e) {

            var ee = e.message;
        }
    }

    WinJS.Namespace.define("Azure", {
        login:login


    });

})();