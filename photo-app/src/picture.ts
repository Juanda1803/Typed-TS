import Item from './item'
import { PhotoOrientation } from './photo-orientation'

class Picture extends Item {
    public constructor(
        id: number,
        title: string,
        private _date: string,
        private _orientation: PhotoOrientation,
    ) {
        super(id, title)
    }

    // Behaviour
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`
    }
}

export default Picture
