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

    WinJS.Namespace.define("Modelo", {
        Usuario: TipoUsuario

    });

})();