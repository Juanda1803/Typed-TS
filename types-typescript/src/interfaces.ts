export {}

// Funcion para mostrar una fotografia

enum PhotoOrientation {
    landscape,
    Portrait,
    Square,
    Panomara,
}

interface Picture {
    title: string
    date: string
    orientation: PhotoOrientation
}

const showPicture = (picture: Picture) => {
    console.log(
        `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`,
    )
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.landscape,
}

showPicture(myPic)

showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test', // Error
})

interface PictureConfig {
    title?: string
    date?: string
    orientation?: PhotoOrientation
}

const generatePicture = (config: PictureConfig) => {
    const pic = {
        title: 'Default',
        date: '2020-03',
    }
    if (config.title) pic.title = config.title

    if (config.date) pic.date = config.date

    return pic
}

let picture = generatePicture({})
console.log(picture)
picture = generatePicture({ title: 'Travel Pic' })
console.log(picture)
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' })
console.log(picture)

// Interfez : Usuario
interface User {
    readonly id: number // solo lectura
    username: string
    isPro: boolean
}

let user: User

user = { id: 10, username: 'Juan', isPro: true }
console.log(user)
// user.id = 20 // error !
// console.log(user)
