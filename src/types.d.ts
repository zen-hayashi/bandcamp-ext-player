export interface NowPlaying {
    track: Track,
    playing: boolean
}

export interface Playlist {
    tracks: Track[]
}

export interface CurrentState {
    nowPlaying: number,
    duration: number
}

export interface AlbumInfo {
    title: string,
    artist: string,
    url: string,
    image: string,
    releaseDate: string,
    label: string,
    labelUrl?: string
}

export interface Album {
    info: AlbumInfo,
    tracks: Track[]
}

export interface Track {
    title: string,
    url: string,
    file: string,
    duration: number,
    album: AlbumInfo
}