import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "../store"
import { NowPlaying, Track } from "../types";
import { useDispatch } from 'react-redux';
import { nowPlayingSlice } from "../store/nowPlaying";
import _ from "lodash";
import { progressSlice } from "../store/progress";
import useNowPlaying from "../hooks/useNowPlaying";

const Background: React.FC = () => {
  const dispatch = useDispatch();
  const seekTime = useSelector(state => state.progress.seekTime); 
  const nowPlayingProps = useNowPlaying();
  const nowPlaying:NowPlaying = useSelector(state => {
    console.log('state changed');
    console.log(state);
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
      nowPlayingProps.setNextTrack();
      })
  })
  useEffect(() =>{
    ref.current.addEventListener('timeupdate' ,() => {
      setCurrentTime(Math.round(ref.current.currentTime));
    })
  })
  useEffect(() => {
    ref.current.currentTime = seekTime
  }, [seekTime]);
  
  const setCurrentTime = (currentTime: number) => {
    dispatch(progressSlice.actions.setCurrentTime(currentTime));
  }

  const startAudio = (): Promise<void> => ref.current?.play()
    .then(function (result) {
      console.log('success')
      console.log(result)
    })
    .catch(function (exception) {
      console.error('an error occured');
      console.error(exception);
      nowPlayingProps.setNextTrack();
    });
  
    const pauseAudio = (): void => ref.current?.pause();

  return <div>
      <audio controls autoPlay ref={ref} src={nowPlaying?.track?.file}></audio>
  </div>;
}

export default Background