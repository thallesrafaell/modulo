function Animal(especie, cor, extinto, idade) {
    this.especie = especie
    this.cor = cor
    this.extinto = extinto
    this.idade = idade

    this.comer = function () {
        console.log(this.especie + " está comendo")
    }
    
    this.dormir =function () {
        console.log(this.especie + " está dormindo" )
    }

   
}

function Ave(nome, cor, extinto, idade, bico, voa) {
    this.bico = bico
    this.voa = voa

    Animal.call(this, nome, cor, extinto, idade)

    this.voando = function () {
        console.log(this.especie + " Está voando")
    }
}

function Dinossauro(nome, cor, extinto, idade, carnivoro , hebivoro) {
    this.carnivoro =carnivoro
    this.hebivoro = hebivoro
    Animal.call(this, nome, cor , extinto, idade)

}

const tiranossaurorex = new Dinossauro("Tiranossauro Rex","cinza",true , 1000, true, false)
const braquiossauro = new Dinossauro("Braquiossauro", "Azul", true, 1000, false, true)
const tucano = new Ave("Tucano", "Preto", false, 10, "Grande", true)

console.log(tiranossaurorex.dormir())
console.log(braquiossauro.comer())
console.log(tucano.voando())