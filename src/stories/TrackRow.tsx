import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";

export interface TrackRowProps {
    track: Track,
    isPlaying?: boolean,
    handleSetNowPlaying?: (track:Track) => void
}

export const TrackRow = ({ track, isPlaying = false,handleSetNowPlaying } :TrackRowProps) =>{
    return <tr key={track.id} className={`cursor-pointer w-full border-b h-10 ${isPlaying? 'active': ''}`} onClick={()=>handleSetNowPlaying(track)}>
        <td>
            {track.title}
        </td>
        <td>
            {track.album.title}
        </td>
        <td>
            {track.album.artist}
        </td>
        <td>
            {track.album.label}
        </td>
    </tr>
}