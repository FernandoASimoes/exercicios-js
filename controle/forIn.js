const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
    console.log(`Indice = ${i} Nota = ${notas[i]}`)
}
const pessoa = {
    nome:'Fernando',
    sobrenome:'Simões',
    idade:33,
}

for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}