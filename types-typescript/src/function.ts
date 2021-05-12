export {}

// Crear una Fotografia
// function createPicture(title,date,size){
//  title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usar TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//     // Se crea la Fotografia
//     console.log('create Picture using', title, date, size)
// }

// createPicture('My Birthday', '2020-10-31', '500x500')
// createPicture('Colombia Trip', '2020-03')

// Parametro Opcionales en funciones
function createPicture(title?: string, date?: string, size?: SquareSize) {
    // Se crea la Fotografia
    console.log('create Picture using', title, date, size)
}

createPicture('My Birthday', '2020-10-31', '500x500')
createPicture('Colombia Trip', '2020-03')

// Flat Array Function
let createPc = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size,
    }
}

const picture = createPc('Platzi Session', '2020-10-31', '100x100')
console.log(picture)

// Tipo de Retorno con TypeScript
const handleError = (code: number, message: string): never | string => {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`)
    } else {
        return 'An error has occurred'
    }
}

try {
    let result = handleError(200, 'juan') // string
    console.log(result)
    result = handleError(404, 'error') // never
} catch (error) {
    console.log(error)
}
