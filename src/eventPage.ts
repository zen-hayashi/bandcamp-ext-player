import { Album, AlbumInfo, Track } from "./types";
import { Store } from 'webext-redux'

const store = new Store();

const main = () => {
    console.log("contents js excute!");
    
    const pageData = window.document.querySelectorAll("[data-embed]")[0];
    if (!pageData) {
        return null 
    };
    const currentAlbum = JSON.parse(pageData.getAttribute("data-tralbum"));
    const currentBand = JSON.parse(pageData.getAttribute("data-band"));
    const albumInfo: AlbumInfo = {
        title: currentAlbum.current.title,
        artist: currentAlbum.artist,
        url: currentAlbum.url,
        image: window.document.querySelector('#tralbumArt img').getAttribute('src'),
        releaseDate: currentAlbum.album_release_date,
        label: currentBand.name,
        labelUrl: window.location.origin
    }
    const tracks: Track[] = getTracks(currentAlbum, albumInfo)
    const album: Album = {
        info: albumInfo,
        tracks: tracks
    }
    const message = {
        "album": album
    }
    console.log(message);
    store.dispatch({ type: 'currentPageAlbum/setCurrentPageAlbum', payload: album});
}

const getTracks = (album: any, albumInfo: AlbumInfo) :Track[] => {
    const tracks:Track[] = album.trackinfo.map(t => {
        return {
            title: t.title,
            url: t.title_link,
            file: t.file["mp3-128"],
            duration: t.duration,
            album: albumInfo
        }
    })
    return tracks
} 

main()