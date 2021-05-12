// Corchetes []

// Tipo Explicito
let users: string[]
users = ['Juan','Valentina', 'Hanna']
// users = [1, true, 'test'] //Error

//Tipo Inferido
let otherUsers = ['Juan','Valentina', 'Hanna']
// users = [1, true, 'test'] //Error

// Array<TIPO>
let pictureTitles: Array<string>
pictureTitles = ['Favorite Sunset', 'Vacation Time', ' Landscape']

// Accediendo a los valores en un Array
console.log(users[0])
console.log(pictureTitles[0])

// Propiedades en Array
console.log(users.length)

// Uso de funciones en Arrays
users.push('PlatziUser')
users.sort()
console.log(users)