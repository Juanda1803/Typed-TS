import Item from './item'
import Picture from './picture'

class Album extends Item {
    picture: Picture[]

    public constructor(id: number, title: string) {
        super(id, title) // constructor of SUPER class
        this.picture = []
    }

    public addPicture(picture: Picture) {
        this.picture.push(picture)
    }
}

export default Album
