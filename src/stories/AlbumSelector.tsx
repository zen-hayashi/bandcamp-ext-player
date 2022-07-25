import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@mui/styles';
import _ from "lodash";
import { AlbumCard, AlbumCardProps } from "./AlbumCard";
import { Album } from "../types";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography } from '@mui/material';


export interface AlbumSelectorProps {
    albums: Album[],
    addFavorite?: (album: Album) => void
}
const useStyles = makeStyles(() => ({
    root: {
        height: '170px'
    }
}));

export const AlbumSelector = ({ albums, addFavorite }: AlbumSelectorProps) =>{
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 600 },
            items: 5
        }
    };
    
    const styles = useStyles();
    return <Carousel 
        showDots={true}
        infinite={true}
        containerClass={cx(styles.root, "carousel-container")}
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