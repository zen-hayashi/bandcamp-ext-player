import { duration } from '@mui/material';
import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "../store";
import { progressSlice } from '../store/progress';
import { Progress } from "../types";


export const ProgressBar: React.FC = () => {
  const dispatch = useDispatch();
  
  const progress: Progress = useSelector(state => state.progress);
  const convertTime = (sec: number):string => {
    const min = Math.floor(sec / 60);
    const rem =  sec % 60;
    return `${padZero(Math.round(min))}:${padZero(Math.round(rem))}`
  }
  const padZero = (num: number):string => {
      return num<10 ? '0'+ num :''+ num
  }
  const progressPercentage = Math.round((progress.currentTime/progress.duration)*100)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const nextCurrentTime = parseInt(value)/100 * progress.duration;
    dispatch(progressSlice.actions.setSeekTime(nextCurrentTime));
  }

  return <div className="mx-8 py-4">
      <div className="flex justify-between text-sm text-grey-darker">
          <p>{convertTime(progress.currentTime)}</p>
          <p>{convertTime(progress.duration)}</p>
      </div>
      <div className="mt-1">
          <div className="h-1 bg-grey-dark rounded-full">
            <input id="progress_bar" type="range" value={progressPercentage} onChange={handleChange} className="mb-6 w-full h-1
             bg-gray-200 rounded-lg appearance-none accent-red-500  cursor-pointer range-sm dark:bg-red-500"></input>
          </div>
      </div>
  </div>
}