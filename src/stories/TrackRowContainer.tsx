import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { TrackRow } from "./TrackRow";
import useNowPlaying from "../hooks/useNowPlaying";

export interface TrackRowProps {
    track: Track,
    handleSetNowPlaying?: (track:Track) => void
}

export const TrackRowContainer = ({ track, handleSetNowPlaying } :TrackRowProps) =>{
    const mediaControllerProps = useNowPlaying();
    const isPlaying = mediaControllerProps.track.id == track.id;
    return <TrackRow track={track} isPlaying={isPlaying} handleSetNowPlaying={handleSetNowPlaying}></TrackRow>
}