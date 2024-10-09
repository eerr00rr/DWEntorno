Array.prototype.sin = function(valor) {
    return this.filter(function(elemento) {
        return elemento != valor;
    });
};

let array = [1, 2, 3, 4, 5];
let arrayFiltrado = array.sin(4);

alert(arrayFiltrado);