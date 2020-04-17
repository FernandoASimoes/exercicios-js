// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 10,
    endereco: {
        logradouro: 'rua c',
        numero: 25
    }
}

const { nome, idade, } = pessoa
console.log(nome, idade)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)