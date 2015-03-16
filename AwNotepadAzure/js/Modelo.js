(function() {
    var TipoUsuario = function(id, nombre, apellidos, email, password) {

        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
    };

    TipoUsuario.prototype.toInsert= function() {

        var datos = {
            nombre: this.nombre,
            apellidos: this.apellidos,
            email: this.email,
            password: this.password

        };
        return datos;
    }

    var Bloc = function(id, nombre, descripcion, img, idUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img || "http://www.picgifs.com/graphics/t/tux/graphics-tux-850120.gif";
        this.idUsuario = idUsuario;

        this.toInsert= function() {

            return {
                nombre: this.nombre,
                descripcion: this.descripcion,
                img: this.img,
                idUsuario: this.idUsuario
            };
        }
    };

    WinJS.Namespace.define("Modelo", {
        Usuario: TipoUsuario,
        Bloc:Bloc
    });
    WinJS.Namespace.define("Global", {
        Usuario: null,
        Blocs: []

    });

})();