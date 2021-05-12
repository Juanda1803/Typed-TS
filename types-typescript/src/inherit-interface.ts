export {}

enum PhotoOrientation {
    landscape,
    Portrait,
    Square,
    Panomara,
}

interface Entity {
    id: number
    title: string
}

interface Album extends Entity {
    // Copy Entity atributes
    // id: number
    // title: string
    description: string
}

interface Picture extends Entity {
    // Copy Entity atributes
    // id: number
    // title: string
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Communiity events around the world',
}

const picture: Picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Square,
}

let newPicture = {} as Picture
newPicture.id = 2
newPicture.title = 'Moon'

console.log(album)
console.log(picture)
console.log(newPicture)
