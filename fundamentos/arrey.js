const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[5]) // Quando acessa uma pocisão que não existe dara o erro undefined

valores[4] = 10 // Acrescentando um valor na pocisão 4 do arrey
console.log(valores)
console.log(valores.length) // mostrar quantos elementos existe dentro do arrey

valores.push({id: 3}, false, null, 'teste') // Server para adicionar elementos ao arrey
console.log(valores)

valores.pop() // Serve para excluir o ultimo elemento dentro do arrey
console.log(valores)

