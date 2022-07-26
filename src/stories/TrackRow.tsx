import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";

export interface TrackRowProps {
    track: Track,
    key: number,
    handleSetNowPlaying?: (track:Track) => void
}

export const TrackRow = ({ track, key, handleSetNowPlaying } :TrackRowProps) =>{
    return <tr key={key} className='cursor-pointer w-full border-b h-10' onClick={()=>handleSetNowPlaying(track)}>
        <td className='text-center font-light'>
            {track.title}
        </td>
        <td className='text-center font-light'>
            {track.album.title}
        </td>
        <td className='text-center font-light'>
            {track.album.artist}
        </td>
        <td className='text-center font-light'>
            {track.album.label}
        </td>
    </tr>
}