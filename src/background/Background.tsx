import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "../store"
import { NowPlaying, Track } from "../types";
import { useDispatch } from 'react-redux';
import { nowPlayingSlice } from "../store/nowPlaying";
import _ from "lodash";

const Background: React.FC = () => {
  const dispatch = useDispatch();
  const playlist:Track[] = useSelector(state => state.playlist);
  const nowPlaying:NowPlaying = useSelector(state => {
    console.log('state changed');
    if (!ref?.current) {
      return state.nowPlaying;
    }
    if (state.nowPlaying?.playing){
      startAudio();
    } else {
      pauseAudio();
    }
    return state.nowPlaying
  });
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(()=> {
    ref.current.addEventListener('ended' ,() => {
      setNextTrack(nowPlaying.track, playlist);
      })
  })
  const setNextTrack = (currentTrack: Track, playlist: Track[]) => {
    const currentIndex = _.findIndex(playlist, { url: currentTrack.url });
    const nextTrack = playlist[currentIndex + 1];
    dispatch(nowPlayingSlice.actions.setNowPlaying(nextTrack));
  }

  const startAudio = (): Promise<void> => ref.current?.play()
    .then(function (result) {
      console.log('成功')
      console.log(result)
    })
    .catch(function (exception) {
      console.error('エラーが発生しました')
      console.error(exception)
    });
  const pauseAudio = (): void => ref.current?.pause();

  return <div>
      <audio controls autoPlay ref={ref} src={nowPlaying?.track?.file}></audio>
  </div>;
}

export default Background