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
import ListOutlined from '@mui/icons-material/ListOutlined';
import VideoLibrary from '@mui/icons-material/VideoLibrary';

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
  videoId: string,
}

const MediaCard = ({ channelTitle, title, publishedAt, description, imageUrl, channelId, videoId }: MediaCardProps) => {
  const theme = useTheme();


  return (




    <>

      <Card sx={{ maxHeight: 600 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {channelTitle.charAt(0)}
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

          <IconButton aria-label="view" href={`https://youtube.com/watch?v=${videoId}`}>
            <VideoLibrary  />
          </IconButton>
          <IconButton
            aria-label="see more"
            href={`https://youtube.com/channel/${channelId}`}
          >
            <ListOutlined  />
          </IconButton>
        </CardActions>

      </Card>
      
    </>


  );
}

export default MediaCard;