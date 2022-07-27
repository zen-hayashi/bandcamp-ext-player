export interface NowPlaying {
  track: Track
  playing: boolean
}

export interface Progress {
  duration: number
  currentTime: number
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
    id: string | null
    title: string,
    url: string,
    file: string,
    duration: number,
    album: AlbumInfo
}

export interface State {
  playlist: Track[]
  currentPageAlbum: Album
  nowPlaying: {
    playing: boolean,
    track: Track
  },
  albumList: Album[]
}