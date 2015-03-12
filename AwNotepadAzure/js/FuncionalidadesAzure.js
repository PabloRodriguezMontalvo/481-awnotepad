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

    var registro = function(usuario) {
        var tabla = cliente.getTable("Usuarios");
        tabla.insert(usuario.toInsert()).done(
            function(res) {


                if (res.id) {
                    WinJS.Navigation.back(1);
                    new Windows.UI.Popups.
                       MessageDialog
                        ("Usuario creado correctamente, inicia sesion")
                        .showAsync();

                }
                else {
                    new Windows.UI.Popups.
                        MessageDialog("Error al insertar usuario").showAsync();
                }
            }
        );


    };
    WinJS.Namespace.define("Azure", {
        login: login,
        registro:registro


    });

})();