Object.prototype.implementa = function(nombreMetedo) {
    return typeof this[nombreMetedo] === 'function';
}

const object = {
    funcionRandom: function() {
        alert('sdfasdf');
    },
    atributo: 'asdfas'
};

alert(object.implementa('funcionRandom'));
alert(object.implementa('atributo'));