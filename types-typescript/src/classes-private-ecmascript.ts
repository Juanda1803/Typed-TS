export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panomara,
}

class Picture {
    // Properties
    #id: number
    #title: string
    #orientation: PhotoOrientation

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation,
    ) {
        this.#id = id
        this.#title = title
        this.#orientation = orientation
    }

    // Behaviour
    public toString() {
        return `[id: ${this.#id}, title: ${this.#title}, orientation: ${
            this.#orientation
        }]`
    }
}

class Album {
    #id: number
    #title: string
    #pictures: Picture[]

    public constructor(id: number, title: string) {
        this.#id = id
        this.#title = title
        this.#pictures = []
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Picture')

const picture: Picture = new Picture(
    1,
    'Platzi session',
    PhotoOrientation.Square,
)

album.addPicture(picture)

console.log(album)

// Acceding to the member public

// picture.id = 100 // public
// picture.title = 'Another title' // public
// album.title = 'Personal Activities' // public
console.log(album)
