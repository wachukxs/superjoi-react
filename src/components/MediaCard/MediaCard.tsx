import React, { useEffect, useState } from "react";
import "./MediaCard.css";

import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListOutlined from '@mui/icons-material/ListOutlined';
import VideoLibrary from '@mui/icons-material/VideoLibrary';

import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


interface MediaCardProps {
  channelTitle: string,
  title: string,
  publishedAt: string,
  description: string,
  imageUrl: string,
  channelId: string,
  videoId: string,
}

interface ExpandMoreProps {
  expand: boolean;
  onClick: any;
  "aria-expanded": boolean;
  "aria-label": string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MediaCard = ({ channelTitle, title, publishedAt, description, imageUrl, channelId, videoId }: MediaCardProps) => {

  const [expanded, setExpanded] = React.useState(false);

  const [videoDetails, setVideoDetails] = React.useState<any>(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    // fetch video details
    getVideoDetails()
  };

  const getVideoDetails = async () => {
    try { // todo, create baseUrl and use dynamically
      if (!videoDetails) {
        let res = await fetch(`http://localhost:4005/api/search/videos/details?videoId=${videoId}`, {
          method: "GET",
          // body: JSON.stringify({ // only for 'POST'
          //     query: searchText,
          // }),
        });

        let resJson = await res.json();
        console.log('result', resJson);

        setVideoDetails(resJson)

        if (res.status === 200) {
          // show message to user
          // set results
        } else { // show message
        }
      }
    } catch (error) { // show message
      console.log(error);
    }
  }


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
            <VideoLibrary />
          </IconButton>
          <IconButton
            aria-label="see more"
            href={`https://youtube.com/channel/${channelId}`}
          >
            <ListOutlined />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <section className="comments">
              <List key={"parent_comments" + channelId} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                  videoDetails && videoDetails?.items.length > 0 && videoDetails.items.map((item: any, index: number) => (
                    <>
                      <ListItem key={item.id} alignItems="flex-start">
                        <ListItemAvatar key={item.id + "listitemavatar"}>
                          <Avatar key={item.id + "avatar"} alt={item.snippet.topLevelComment.snippet.authorDisplayName} src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                        </ListItemAvatar>
                        <ListItemText
                          key={item.id + "listitemtext"}
                          primary={item.snippet.topLevelComment.snippet.authorDisplayName}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                key={item.id + "t1"}
                              >
                                {new Date(item.snippet.topLevelComment.snippet.publishedAt).toDateString()}
                              </Typography>
                              {" — " + item.snippet.topLevelComment.snippet.textOriginal}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider key={item.id + "divider"} variant="inset" component="li" />
                    </>
                  ))
                }


              </List>
            </section>
          </CardContent>
        </Collapse>

      </Card>

    </>


  );
}

export default MediaCard;