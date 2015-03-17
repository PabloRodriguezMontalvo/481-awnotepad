(function () {
    // var addBloc = new Windows.UI.Popups.PopupMenu();

    /*var popups= function() {
        addBloc.commands.append(new Windows.UI.Popups.UICommand("Blocs"), function(e) {

            var f = document.getElementById("AltaBlocFly").winControl;
            f.show(document.getElementById("appbar"), "top", "right");


        });


    }
    */

    var imagen = undefined;

    function IntentarQuitarSnap() {
        var estado = Windows.UI.ViewManagement.ApplicationView.value;
        if (estado === Windows.UI.ViewManagement.ApplicationViewState.snapped
                && !Windows.UI.ViewManagement.ApplicationView.tryUnsnap()
        ) {

            //Manejariamos el error
            return;

        }


    }

    function MostrarPicker() {
        IntentarQuitarSnap();

        var selector = new Windows.Storage.Pickers.FileOpenPicker();
        selector.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
        selector.suggestedStartLocation =
            Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
        selector.fileTypeFilter.replaceAll([".png", ".jpg", ".gif"]);
        selector.pickSingleFileAsync().done(function (file) {

            /*    file.openReadAsync().then(function(stream) {
                    var is = stream.getInputStreamAt(0);
                    var t = stream.size;
                    var reader = Windows.Storage.Streams.DataReader(is);
                    reader.loadAsync(t).then(function() {
    
                        var b = reader.readBuffer(t);
                        document.getElementById("imagenBloc").src =
                            "data:image/jpg;base64," +
                            Windows.Security.Cryptography.CryptographicBuffer.
                            encodeToBase64String(b);
    
    
                    });
    
    
                });
    
                */


            //var almacen = Windows.Storage.ApplicationData.current;

            // var carpeta = almacen.localFolder;

            //  file.copyAsync(carpeta);

            var url = URL.createObjectURL(file, { oneTimeOnly: true });

            document.getElementById("imagenBloc").src = url;

            imagen = file;

        });


    }


    var eventos = function () {
        document.getElementById("cmdLogout").addEventListener("click",
               function () {

                   localStorage.removeItem("Usuario");

                   WinJS.Navigation.navigate("/pages/home/home.html",
                        WinJS.Navigation.state);
               });

        document.getElementById("cmdAddBloc").addEventListener("click",
            function () {

                /* var pos = {
                     x: 100,
                     y: 100,
                     width: 200,
                     height: 300
                 };
                 addBloc.showForSelectionAsync(pos);*/

                var fl = document.getElementById("AltaBlocFly").winControl;
                fl.show(document.getElementById("cmdAddBloc"), "top");
            });
        document.getElementById("btnAddBlocFly").addEventListener("click",

            function () {
                var urlf = undefined;
                var azu = new RuntimeAzureStorage.AlmacenAzure();

                if (imagen != undefined) {
                    azu.subirFicheroAsync(imagen, imagen.name).then(function(res) {

                        urlf = res;

                        var bloc = new Modelo.Bloc(undefined,
                            document.getElementById("txtNomAddBloc").value,
                            document.getElementById("txtDescripcionBloc").value,
                            urlf,
                            Global.Usuario.id
                        );

                        Azure.AddBloc(bloc).done(function(res) {

                            Datos.Blocs.push(res);

                        });

                    });

                } else {

                    var bloc = new Modelo.Bloc(undefined,
                           document.getElementById("txtNomAddBloc").value,
                           document.getElementById("txtDescripcionBloc").value,
                           urlf,
                           Global.Usuario.id
                       );

                    Azure.AddBloc(bloc).done(function (res) {

                        Datos.Blocs.push(res);

                    });
                }


            });

        document.getElementById("btnAddImg").addEventListener("click", MostrarPicker);


    }



    function initBar() {
        //popups();
        eventos();
    }

    WinJS.Namespace.define("Acciones", {
        appBar: initBar

    });

})();