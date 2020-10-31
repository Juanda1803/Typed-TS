export {}

// ¨[1, 'user']
let user: [number, string]
user = [1, 'Juan']

console.log(user)
console.log(user[1])
console.log(user[1].length)
console.log(user[0])


// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'David', true]
console.log(userInfo)

// Arreglo de Tuplas
let array: [number, string][] = []
array.push([1,'Juan']) // 0
array.push([2,'David']) // 1
array.push([3,'Gonzalez']) //2
console.log(array)

//Uso de funciones Array
// Juan -> Juanda1803
array[0][1]=array[0][1].concat('da1803')
console.log(array)
