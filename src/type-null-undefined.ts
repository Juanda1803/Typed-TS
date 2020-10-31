// Explicita
let nullVariable: null
nullVariable = null
// nullVariable = 1 // Error

let otherVariable = null
otherVariable = 'test'

console.log(nullVariable)
console.log(otherVariable)

// ----------------- Undefined ------------
let undefinedVariable: undefined = undefined
// undefined = 'test' // Error

let otherUndefined = undefined
otherUndefined = 1

console.log(undefinedVariable)
console.log(otherUndefined)


// Null y Undefined como subtipos

// ---strictNullChecks
let albumName: string
//albumName = null
//albumName = undefined