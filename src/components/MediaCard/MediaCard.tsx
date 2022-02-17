import React, { useEffect, useState } from "react";
import "./MediaCard.css";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';

import LinkOutlined from '@mui/icons-material/LinkOutlined';

import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface MediaCardProps {
  channelTitle: string, 
  title: string, 
  publishedAt: string, 
  description: string, 
  imageUrl: string,
  channelId: string,
}

const MediaCard = ({channelTitle, title, publishedAt, description, imageUrl, channelId}: MediaCardProps) => {
    const theme = useTheme();


    return (
        

        

<>

<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={channelTitle}
        subheader={new Date(publishedAt).toDateString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt=""
      />
      <CardContent>
      <Typography variant="body1" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="show more"
        >
          <LinkOutlined />
        </IconButton>
      </CardActions>

    </Card>
{/* <Card sx={{ display: 'flex', width: '450px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {channelTitle}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

              <IconButton aria-label={theme.direction === 'rtl' ? "thumbdown" : 'thumbup'}>
                {theme.direction === 'rtl' ? <ThumbDown /> : <ThumbUp />}
              </IconButton>
              <IconButton aria-label={theme.direction === 'rtl' ? "thumbup" : 'thumbdown'}>
                {theme.direction === 'rtl' ? <ThumbUp /> : <ThumbDown />}
              </IconButton>

              <IconButton aria-label="bookmark">
                { <BookmarkAdd /> }
              </IconButton>

            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={imageUrl}
            alt="Live from space album cover"
          />
        </Card> */}
</>


      );
}

export default MediaCard;