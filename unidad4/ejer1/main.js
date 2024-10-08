function Cliente(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }

    function Elemento(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    function Factura(cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            'base': 0,
            "iva":11,
            "total":0,
            "formaPago":"efectivo" };
    };

    Factura.prototype.calcularTotal = function() {
        for (let i = 0; i < this.elementos.length; i++) {
            
        }
    }
