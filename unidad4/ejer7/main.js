Array.prototype.anadirElemento = function(valor, permitirDuplicados) {
    if (!permitirDuplicados && this.includes(valor)) {
        return;
    } 
    this.push(valor);
}

let array = [1, 2, 3, 4, 5];
array.anadirElemento(1, true);
alert(array);


array.anadirElemento(2, false);
alert(array);