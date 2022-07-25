import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";

export interface TrackRowProps {
    track: Track,
    handleSetNowPlaying?: (track) => void
}

export const TrackRow = ({ track, handleSetNowPlaying } :TrackRowProps) =>{
    return <>
        <div>
            <div>
                <div aria-label="play" onClick={()=>handleSetNowPlaying(track)}>
                    <button />
                </div>
            </div>
            <div >
                <div>
                <p>{track.title}</p>
            </div>
            </div>
        </div>
    </>
}