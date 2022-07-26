import React from 'react';
import { NowPlaying, Track } from "../types";
import _ from 'lodash'


export interface MediaControllerProps{
    track: Track
    playing: boolean,
    setPrevTrack?: () => void,
    setNextTrack?: () => void,
    handleAudioState?: (boolean: boolean) => void
}

export const MediaController: React.FC<MediaControllerProps> = ({ track, playing, setPrevTrack, setNextTrack, handleAudioState }) => {
    return (
        <div className="w-full">
            <div className="h-2 bg-red-light"></div>
                <div className="flex items-center w-full flex-wrap">
                    <div className="bg-white shadow-lg rounded-lg w-full">
                        <div className="grid grid-cols-3">
                            <div className='col-span-1'>
                                <a href={track?.album.url} target='_blank'>
                                    {
                                        track?.album.image &&
                                        <img className="w-full rounded hidden md:block"  src={track?.album.image} alt="Album Pic"/>
                                    }
                                    {
                                        !track?.album.image &&
                                        <div className="w-full rounded hidden md:block" />
                                    }
                                </a>
                            </div>
                            <div className="col-span-2 p-4">
                                <div className="flex justify-between h-[130px]">
                                    <div >
                                        <h3 className="text-2xl text-grey-darkest font-medium">{track?.title}</h3>
                                        <p className="text-sm text-grey mt-1">{track?.album.title}</p>
                                        <p className="text-sm text-grey mt-1">{track?.album.artist}</p>
                                        <p className="text-sm text-grey mt-1">{track?.album.label}</p>
                                    </div>
                                    {/* <div className="text-red-lighter">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>
                                    </div> */}
                                </div>
                                <div className="flex justify-evenly items-center mt-1">
                                    {/* <div className="text-grey-darker">
                                        <svg onClick={setPrevTrack} className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
                                    </div> */}
                                    <div className="text-grey-darker">
                                        <button  onClick={setPrevTrack}>
                                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
                                        </button>
                                        
                                    </div>
                                    
                                        {
                                            !playing &&
                                            <button  onClick={() => handleAudioState(true)} >
                                                <div className="text-white p-8 rounded-full bg-red-500 shadow-lg">
                                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 6 3 L 19 10 L 6 17 Z"/></svg>
                                                </div>
                                            </button>
                                            
                                        }
                                        {
                                            playing &&
                                            <button onClick={() => handleAudioState(false)}>
                                                <div className="text-white p-8 rounded-full bg-red-500 shadow-lg">
                                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
                                                </div>
                                            </button>
                                            
                                        }
                                    <div className="text-grey-darker">
                                        <button  onClick={setNextTrack}>
                                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
                                        </button>
                                        
                                    </div>
                                    {/* <div className="text-grey-darker">
                                        <svg onClick={() => handleAudioState(true)} className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/></svg>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mx-8 py-4">
                            <div className="flex justify-between text-sm text-grey-darker">
                                <p>0:40</p>
                                <p>4:20</p>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 bg-grey-dark rounded-full">
                                    <div className="w-1/5 h-1 bg-red-500 rounded-full relative">
                                        <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}