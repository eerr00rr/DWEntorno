class Animal {
    #nombre;
    #especie;
    #numPatas;
    #cola;

    constructor(nombre, especie, numPatas, cola) {
        this.#nombre = nombre;
        this.#especie = especie;
        this.#numPatas = numPatas;
        this.#cola = cola;
    }

    getNombre() {
        return this.#nombre;
    }
    getEspecie() {
        return this.#especie;
    }
    getNumPatas() {
        return this.#numPatas;
    }
    getCola() {
        return this.#cola;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setEspecie(especie) {
        this.#especie = especie;
    }
    setNumPatas(numPatas) {

        this.#numPatas = numPatas;
    }
    setCola(cola) {
        this.#cola = cola;
    }
}
class Vaca extends Animal {
    #cantidadLeche;
    constructor(cantidadLeche) {
        super('cow', 'mamifero', 4, true);
        this.#cantidadLeche = cantidadLeche;
    }

    getCantidadLeche() {
        return this.#cantidadLeche;
    }

    setCantidadLeche(cantidadLeche) {
        this.#cantidadLeche = cantidadLeche;
    }

    ordenarVaca(litros) {
        this.#cantidadLeche = (this.#cantidadLeche - litros) > 0 ? this.cantidadLeche - litros : alert('No se puedo ordendar tanta leche');
    }
}
class Tigre extends Animal {
    #victimas;
    constructor(victimas) {
        super('tigre', 'mamifero', 4, true);
        this.#victimas = victimas;
    }

    getVictimas() {
        return this.#victimas;
    }

    setVictimas(victimas) {
        this.#victimas = victimas;
    }

    masVictimas(nuevosVictimas) {
        this.#victimas += nuevosVictimas;
    }
}

let vaca = new Vaca(4);
let tigre = new Tigre(5);

vaca.ordenarVaca(5);
tigre.masVictimas(2);
alert(tigre.getVictimas());
