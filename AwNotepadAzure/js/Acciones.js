(function() {
   // var addBloc = new Windows.UI.Popups.PopupMenu();

    /*var popups= function() {
        addBloc.commands.append(new Windows.UI.Popups.UICommand("Blocs"), function(e) {

            var f = document.getElementById("AltaBlocFly").winControl;
            f.show(document.getElementById("appbar"), "top", "right");


        });


    }
    */
    var eventos= function() {
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

            function() {
                var bloc = new Modelo.Bloc(undefined,
                    document.getElementById("txtNomAddBloc").value,
                    document.getElementById("txtDescripcionBloc").value,
                    undefined,
                    Global.Usuario.id
                ); 

                Azure.AddBloc(bloc).done(function(res) {

                    Datos.Blocs.push(res);

                });

            });


    }

    function initBar() {
        //popups();
        eventos();
    }

    WinJS.Namespace.define("Acciones", {
        appBar: initBar

    });

})();