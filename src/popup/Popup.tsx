import React, { useEffect,useState } from "react";
import { Album, Track } from "../types"
import _ from "lodash";
import styles from "./Popup.scss";
import CurrentPage from "./CurrentPage";
import PlaylistComponent from "./Playlist";

export default function Popup() {
  const [currentAlbum, setCurrentAlbum] = useState<Album>();
  const [playlist, setPlaylist] = useState<Track[]>();

  const handleAddAlbumToPlaylist = (currentAlbum: Album) => {
    console.log('clicked!');
    console.log(currentAlbum);
    chrome.storage.local.get('playlist', (playlist) => {
      const oldPlaylist: Track[] = playlist.playlist;
      let tracks: Track[] = [];
      console.log(oldPlaylist);
      if (Array.isArray(oldPlaylist)) {
        console.log('concat');
        tracks = oldPlaylist.concat(currentAlbum.tracks);
      } else {
        tracks = currentAlbum.tracks;
        console.log('first added');
      }
      
      chrome.storage.local.set({ playlist: tracks }, () => {
        console.log(currentAlbum.info.title + ' was added!');
      })
    })
  }

  const handleAddTrackToPlaylist = (track: Track) => {
    chrome.storage.local.get('playlist', (playlist: Track[]) => {
      const tracks = playlist.push(track);
      chrome.storage.local.set({ playlist: tracks }, () => {
        console.log(track + ' was added!');
      })
    })
  }
  
  const handleStartAudio = (track: Track) => {
    console.log('play button clicked');
    const message = {
      audioSrc: track.file,
      state: 'start'
    };
    console.log(track);
    chrome.runtime.sendMessage(message);
  };

  useEffect(() => {
    chrome.tabs.executeScript({
      file: 'js/eventPage.js'
    });
    console.log('test');
    chrome.storage.local.get('playlist', (playlist) => {
      setPlaylist(playlist.playlist);
      console.log(playlist);
      console.log('playlist set!');
    });

    chrome.storage.onChanged.addListener((changes, areaName)=> {
      chrome.storage.local.get('playlist', (playlist)=>{
        setPlaylist(playlist.playlist);
      })
    });
    chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
      if (message.album) {
        setCurrentAlbum(message.album)
      };
    });
  }, []);

  return <div className={styles.popupContainer}>
      <>
      <CurrentPage album={currentAlbum} handleAddAlbumToPlaylist={handleAddAlbumToPlaylist} ></CurrentPage>
      <PlaylistComponent tracks={playlist} handleStartAudio={handleStartAudio}></PlaylistComponent>
      </>
  </div>;
}
