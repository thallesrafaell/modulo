//• Utilizando o TypeScript e a tipagem escreva duas funções: 
//1 - uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles
//2 - uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

function baseAltura(base: number, altura: number) {
    return base * altura
}

console.log(baseAltura(10, 10))

function dizOi(nome: string) {
    return   "Olá " + nome 
}

console.log(dizOi("Thalles"))