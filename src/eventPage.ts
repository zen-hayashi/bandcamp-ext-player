import { Album, AlbumInfo, Track, Secret, State } from "./types";
import { Store } from 'webext-redux'
import _ from "lodash";
import { addAlbumToPlayList, albumListSlice } from "./store/albumList";
import { useDispatch } from "react-redux";
import playlist, { playlistSlice } from "./store/playlist";

const store = new Store();
// const dispatch = useDispatch()

const main = () => {
    console.log("contents js excute!");
    
    const state = store.getState();
    console.log(state);
    
    const pageData = window.document.querySelectorAll("[data-embed]")[0];
    const pageCrumbs = window.document.querySelector("#js-crumbs-data");
    if (!pageData) {
        return null 
    };
    const currentAlbum = JSON.parse(pageData.getAttribute("data-tralbum"));
    const currentBand = JSON.parse(pageData.getAttribute("data-band"));
    const refToken = JSON.parse(pageData.getAttribute("data-referrer-token"));
    const fanId = JSON.parse(pageData.getAttribute("data-tralbum-collect-info")).fan_id;
    const crumbs = JSON.parse(pageCrumbs.getAttribute('data-crumbs'));
    const cookie = window.document.cookie;
    const secret:Secret = {
        refToken,
        fanId,
        cookie,
        crumbs: {
            uncollect_item_cb: crumbs.uncollect_item_cb,
            collect_item_cb: crumbs.collect_item_cb
        }
    }

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
        tracks: tracks,
        secret: secret,
        domain: window.location.origin,
        liked: false,
        bandId: currentBand.id
    }
    createButton(state ,album);
}

const createButton = async (state: State , album: Album) => {
    const button = window.document.createElement('button');
    const text = window.document.createTextNode('add to playlist');
    button.appendChild(text);
    const target = window.document.querySelector('#name-section')
    if (_.find(state.albumList,{id: album.id})){
        button.setAttribute("disabled", 'true');
    } else {
        button.addEventListener('click', () => {
            console.log('clicked');
            // store.dispatch(addAlbumToPlayList(album));
            store.dispatch(albumListSlice.actions.addAlbum(album));
            store.dispatch(playlistSlice.actions.addTracksPlaylist(album.tracks));
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