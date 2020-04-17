let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(`Opção falsa: ${!isAtivo}`) // Colocando o ponto de exclamação uma vez tranforma o numero 1 em false

isAtivo = 1
console.log(`Opção Verdadeira: ${!!isAtivo}`) // Colocando o ponto de exclamação duas vez tranforma o numero 1 em true

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) 

console.log('Pra finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')