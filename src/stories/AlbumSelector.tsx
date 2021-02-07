import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash";
import { AlbumCard, AlbumCardProps } from "./AlbumCard";
import { Album } from "../types";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography } from '@material-ui/core';


export interface AlbumSelectorProps {
    albums: Album[]
}

export const AlbumSelector = ({ albums }: AlbumSelectorProps) =>{
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 600 },
            items: 3
        }
    };
    return <Carousel 
        showDots={true}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-margin-5-px"
        responsive={responsive}>
            {
                albums && albums.map(album => {
                    <AlbumCard album={album} showInfo={false}></AlbumCard>
                })
            }
    </Carousel>
}