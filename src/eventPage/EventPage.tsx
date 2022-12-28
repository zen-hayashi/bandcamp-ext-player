import React, { useEffect, useState } from 'react';
import { Album, Track, Secret} from "../types";
import _ from "lodash";
import playlist, { playlistSlice, setTracksToPlaylist } from "../store/playlist";
import { useDispatch } from 'react-redux';  
import { secretSlice } from '../store/secret';


export const EventPage = () => {
  const dispatch = useDispatch();
  const [playlistAdded, setPlaylistAdded] = useState(false);
  const pageData = window.document.querySelectorAll('[data-embed]')[0];
  const pageCrumbs = window.document.querySelector('#js-crumbs-data');
  const currentAlbum = JSON.parse(pageData.getAttribute('data-tralbum'))
  const currentBand = JSON.parse(pageData.getAttribute('data-band'));
  const secret = getSecret(pageData, pageCrumbs);
  useEffect(() =>{
    dispatch(secretSlice.actions.setSecret(secret))
  },[])

    const album: Album = {
        id: currentAlbum.id,
        title: currentAlbum.current.title,
        artist: currentAlbum.artist,
        url: currentAlbum.url,
        image: window.document.querySelector('#tralbumArt img').getAttribute('src'),
        releaseDate: currentAlbum.album_release_date,
        label: currentBand.name,
        secret: secret,
        domain: window.location.origin,
        liked: false,
        labelUrl: window.location.origin,
        bandId: currentBand.id
    }
    const tracks: Track[] = getTracks(currentAlbum, album)
    
    const handleClick = (e:React.MouseEvent<HTMLElement>) => {
      console.log('clicked')
      dispatch(setTracksToPlaylist(tracks));
    }

    return <>
      {
        !playlistAdded && <button type="button" onClick={handleClick} className="btn text-gray-900 
          bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none border-none
          focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
        + Play List
        </button>
      }
      {
        playlistAdded && <button type="button" onClick={handleClick} disabled className="btn text-gray-900
          hover:bg-red-500 focus:ring-4 focus:outline-none border-none bg-slate-500
          focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
        + Added
        </button>
      }
    </>

}

const getSecret = (pageData: Element, pageCrumbs: Element): Secret => {
  const refToken = JSON.parse(pageData.getAttribute('data-referrer-token'))
  const fanId = JSON.parse(pageData.getAttribute('data-tralbum-collect-info')).fan_id
  const crumbs = JSON.parse(pageCrumbs.getAttribute('data-crumbs'))
  const cookie = window.document.cookie
  const secret: Secret = {
    refToken,
    fanId,
    cookie,
    crumbs: {
      uncollect_item_cb: crumbs.uncollect_item_cb,
      collect_item_cb: crumbs.collect_item_cb,
    },
  }
  return secret
}


const getTracks = (currentAlbum: any, album: Album ) :Track[] => {
    const tracks:Track[] = currentAlbum.trackinfo.map(t => {
        return {
            title: t.title,
            url: t.url,
            file: t.file["mp3-128"],
            duration: t.duration,
            album: album
        }
    })
    return tracks
} 
