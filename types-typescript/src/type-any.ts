// Tipo Explicito
let idUser: any
idUser = 1 // number
idUser = '1' // string

console.log('idUser',idUser)

// Tipo Inferido
let otherId
otherId = 1
otherId = '1'

console.log('otherId',otherId)

let surprise: any = 'Hello TypeScript'
// 
surprise.substring(6)
// surprise.sayHello()
const res = surprise.substring(8)
console.log(res)