import React from 'react';
import cx from 'clsx';
import Card from '@mui/material/Card';
import { Album } from "../types";
import { CloudOff } from '@mui/icons-material';



export interface AlbumCardProps {
    album: Album,
    showInfo: boolean,
    addFavorite?: (album:Album)=>void
}

export const AlbumCard = ({ album, showInfo, addFavorite }: AlbumCardProps) =>{
    return <>
        <div className='flex'>
            <div className='flex-1'>
                <a className='w-full block' href={album.info.url} target='_blank'>
                <img className='w-full' src={album.info.image}></img>
            </a>
            </div>
            
            <div className='flex-1'>
                {
                    showInfo &&
                    <>
                        <p>{album.info.title}</p>
                        <p>{album.info.artist}</p>
                        <p>{album.info.label}</p>
                    </>
                }
            </div>
        </div>
        
                {/* <CardActions>
                    <IconButton aria-label="add to favorites" onClick={() => addFavorite(album)}>
                        <FavoriteBorderIcon className={styles.favorite}></FavoriteBorderIcon>
                    </IconButton>
                </CardActions> */}
    </>
}