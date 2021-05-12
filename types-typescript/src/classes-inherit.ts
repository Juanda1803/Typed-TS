export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panomara,
}

// SuperClass

abstract class Item {
    protected readonly _id: number
    protected _title: string

    public constructor(id: number, title: string) {
        this._id = id
        this._title = title
    }

    get id() {
        return this._id
    }

    // set id(id: number) {
    //     this._id = id
    // }

    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }
}

// get and set

class Picture extends Item {
    public static photoOrientation = PhotoOrientation
    // Properties
    private _orientation: PhotoOrientation

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation,
    ) {
        super(id, title)
        this._orientation = orientation
    }

    get orientation() {
        return this._orientation
    }

    set orientation(o: number) {
        this._orientation = o
    }

    // Behaviour
    public toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
    }
}

class Album extends Item {
    private _pictures: Picture[]

    public constructor(id: number, title: string) {
        super(id, title) // constructor of SUPER class
        this._pictures = []
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture)
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

console.log(picture.id) // get id()

// picture.id = 100 // private, set id(100)
picture.title = 'Another title' // private
album.title = 'Personal Activities' // private
console.log(album)

// const item = new Item(8, 'Test title')
// console.log(item)

// Try the member static
console.log(Picture.photoOrientation.Square)
