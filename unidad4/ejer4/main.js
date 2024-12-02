String.prototype.truncar = function (fin) {
    let nuevoStr = this.slice(0, fin);
    return nuevoStr;
};
String.prototype.truncar1 = function (fin, str) {
    let sliceStr = this.slice(0, fin);
    let cambiarStr = sliceStr + str;
    return cambiarStr;
};
let str = 'hola mundo';
alert(str.truncar(6));
alert(str.truncar1(6, '...'));