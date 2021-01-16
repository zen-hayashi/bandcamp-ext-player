export interface BandCampPlayerStorage {
    tracks: Track[],
    currentTrack: number
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