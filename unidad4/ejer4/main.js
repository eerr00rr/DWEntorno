String.prototype.truncar = function(fin) {
    let nuevoStr = this.slice(0, fin);
    return nuevoStr;
};
String.prototype.truncar = function(fin, str) {
    let sliceStr = this.slice(0, fin);
    let cambiarStr = sliceStr.slice(0, str.length) + str;
    return cambiarStr;
};
let str = 'hola mundo';
alert(str.truncar(6, '...'));