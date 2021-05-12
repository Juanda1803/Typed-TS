import Album from './album'

class User {
    private album: Album[]

    public constructor(
        private id: number,
        private username: string,
        private fistName: string,
        private isPro: boolean,
    ) {
        this.album = []
    }

    public addAlbum(album: Album) {
        this.album.push(album)
    }

    public removeAlbum(album: Album): Album | undefined {
        // Search object Album
        const index = this.album.findIndex((a) => a.id === album.id)

        let deletedAlbum
        if (index >= 0) {
            deletedAlbum = this.album[index]
            this.album.splice(index, 1)
        }
        return deletedAlbum
    }
}

export default User
