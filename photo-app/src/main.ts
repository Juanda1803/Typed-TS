import User from './user'
import Album from './album'
import Picture from './picture'
import { PhotoOrientation } from './photo-orientation'

const user = new User(1, 'Juangr1803', 'Juan', true)
const album = new Album(2, 'Platzi Pictures')
const picture = new Picture(
    1,
    'TypeScript Course',
    '2020-03',
    PhotoOrientation.Landscape,
)

// Reltionships
user.addAlbum(album)
album.addPicture(picture)
console.log(user)

// Deleted album
user.removeAlbum(album)
console.log(user)
