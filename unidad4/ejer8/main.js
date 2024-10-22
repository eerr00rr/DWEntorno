Object.prototype.implementa = function(nombreMetedo) {
    return typeof this[nombreMetedo] === 'function';
}

const object = {
    string: 'asdfasdf',
    funcionRandom: function() {
        alert('sdfasdf');
    },
    atributo: 'asdfas'
};

alert(object.implementa('funcionRandom'));
alert(object.implementa('atributo'));