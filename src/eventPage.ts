import { Album, AlbumInfo, Track } from "./types";
import { Store } from 'webext-redux'
import _ from "lodash";

const store = new Store();

const main = () => {
    console.log("contents js excute!");
    const state = store.getState();
    console.log(state);
    
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
        id: currentAlbum.id,
        info: albumInfo,
        tracks: tracks
    }
    createButton(state ,album);
}

const createButton = (state: any , album: Album) => {
    const button = window.document.createElement('button');
    const text = window.document.createTextNode('add to playlist');
    button.appendChild(text);
    const target = window.document.querySelector('#name-section')
    if (_.find(state.albumList,{id: album.id})){
        button.setAttribute("disabled", 'true');
    } else {
        button.addEventListener('click', () => {
            store.dispatch({ type: 'playlist/addTracksPlaylist', payload: album.tracks });
            store.dispatch({ type: 'albumList/addAlbum', payload: album });
        })
    }
    target.appendChild(button);
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