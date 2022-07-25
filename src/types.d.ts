export interface NowPlaying {
    track: Track,
    playing: boolean
}

export interface AlbumList {
    Albums: Album[]
}

export interface TrackList {
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
    id: number,
    info: AlbumInfo,
    tracks?: Track[],
    secret?: Secret,
    domain: string,
    liked: boolean,
    bandId: string
}

export interface Secret {
    refToken: string,
    cookie: string,
    fanId: string,
    crumbs: Crumbs
}

export interface Crumbs {
    uncollect_item_cb: string
    collect_item_cb: string
}

export interface Track {
    title: string,
    url: string,
    file: string,
    duration: number,
    album: AlbumInfo
}