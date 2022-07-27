export interface NowPlaying {
  track: Track
  playing: boolean
}

export interface Progress {
  duration: number
  currentTime: number,
  seekTime: number
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

export interface Album {
  id: number
  title: string
  artist: string
  url: string
  image?: string
  info?: AlbumInfo
  releaseDate?: string
  labelUrl?: string
  label?: string
  tracks?: Track[]
  secret?: Secret
  domain?: string
  liked?: boolean
  bandId?: string
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
    id?: string
    title: string,
    url: string,
    file: string,
    duration: number,
    album: Album
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