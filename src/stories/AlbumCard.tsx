import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useSquareCardMediaStyles } from '@mui-treasury/styles/cardMedia/square'
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Album } from "../types";
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 343,
        margin: 5,
        borderRadius: 12,
        padding: 12,
    },
    media: {
        borderRadius: 6,
    },
}));

export interface AlbumCardProps {
    album: Album,
    showInfo: boolean
}

export const AlbumCard = ({ album, showInfo }: AlbumCardProps) =>{
    const styles = useStyles();
    const mediaStyles = useSquareCardMediaStyles();
    return <>
        <Card className={cx(styles.root)}>
            <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={album.info.image}
            />
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