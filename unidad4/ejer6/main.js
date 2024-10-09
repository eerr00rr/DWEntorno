Array.prototype.posicionesDeElemento = function(valor) {
    let indices = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] === valor) {
            indices.push(i);
        }
    }
    return indices;
};

let array = [1, 2, 2, 4, 2, 6, 2];
let indices2 = array.posicionesDeElemento(2);

alert(indices2);