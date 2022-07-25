import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useSquareCardMediaStyles } from '@mui-treasury/styles/cardMedia/square'
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Album } from "../types";
import { Box, IconButton, Typography, CardActionArea, CardActions, Link } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 343,
        margin: 5,
        borderRadius: 12,
        padding: 0,
    },
    media: {
        borderRadius: 6,
        justifyContent:'center',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#2B2B2B',
            transition: '0.2s',
            opacity: '50%'
        },
        '&:after': {
            content: '\f144',
        }
    },
    cardLayer: {
        width: '100%',
        height: '100%',
        transition: '0.2s',
        '&:hover': {
            '&:after': {
                content: '',
                backgroundColor: '#2B2B2B',
                transition: '0.2s',
                opacity: '50%'
            }
        }
    },
    favorite: {
        color: 'white',
        fontSize: 18
    }
}));

export interface AlbumCardProps {
    album: Album,
    showInfo: boolean,
    addFavorite?: (album:Album)=>void
}

export const AlbumCard = ({ album, showInfo, addFavorite }: AlbumCardProps) =>{
    const styles = useStyles();
    const mediaStyles = useSquareCardMediaStyles();
    return <>
        <Card className={cx(styles.root)}>
                <Link href={album.info.url} target='_blank'>
            <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={album.info.image}>
                {/* <CardActions>
                    <IconButton aria-label="add to favorites" onClick={() => addFavorite(album)}>
                        <FavoriteBorderIcon className={styles.favorite}></FavoriteBorderIcon>
                    </IconButton>
                </CardActions> */}
            </CardMedia>
                </Link>
            {
                showInfo &&
                <CardContent>
                    <Typography>{album.info.title}</Typography>
                    <Typography>{album.info.artist}</Typography>
                    <Typography>{album.info.label}</Typography>
                </CardContent>
            }
        </Card>
    </>
}