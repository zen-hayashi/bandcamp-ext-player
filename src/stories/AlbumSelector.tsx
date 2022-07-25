import React from 'react';
import _ from "lodash";
import { AlbumCard, AlbumCardProps } from "./AlbumCard";
import { Album } from "../types";
import Carousel from 'react-multi-carousel';


export interface AlbumSelectorProps {
    albums: Album[],
    addFavorite?: (album: Album) => void
}

export const AlbumSelector = ({ albums, addFavorite }: AlbumSelectorProps) =>{
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 600 },
            items: 5
        }
    };
    
    return <Carousel 
        showDots={true}
        infinite={true}
        itemClass="carousel-item-margin-5-px"
        responsive={responsive}>
            {
                albums && albums.map(album => {
                    console.log(album);
                    return <AlbumCard album={album} showInfo={false} addFavorite={addFavorite}></AlbumCard>
                })
            }
    </Carousel>
}