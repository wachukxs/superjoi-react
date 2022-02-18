import React, { useState } from "react";
import "./SearchInput.css";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

import Grid from '@mui/material/Grid';
import MediaCard from '../MediaCard/MediaCard';

function SearchInput() {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<any>(null);

    const handleChange = (event: any) => { // <SyntheticBaseEvent>

        setSearchText(event.target.value)
    };


    const handleSubmit = (event: any) => {
        console.log('submitting');

        event.preventDefault();
        console.log('A text was searched: ', searchText);
        askYouTube()

    }

    const askYouTube = async () => {
        try { // todo, create baseUrl and use dynamically
            let res = await fetch(`http://localhost:4005/api/search/?queryString=${searchText}`, {
                method: "GET",
                // body: JSON.stringify({ // only for 'POST'
                //     query: searchText,
                // }),
            });

            let resJson = await res.json();
            console.log('result', resJson);

            setSearchResults(resJson)

            if (res.status === 200) {
                // show message to user
                // set results
            } else { // show message
            }
        } catch (error) { // show message
            console.log(error);
        }
    }


    return (

        <>
            <Paper component="form"
                sx={
                    {
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: 600
                    }
                }

                onSubmit={handleSubmit}>

                <InputBase sx={
                    {
                        ml: 1,
                        flex: 1
                    }
                }
                    placeholder="Search YouTube :)"
                    inputProps={
                        { 'aria-label': 'search youtube' }
                    }
                    onChange={handleChange} />
                <IconButton sx={
                    { p: '10px' }
                }
                    aria-label="search"
                    onClick={handleSubmit}>
                    <SearchIcon />
                </IconButton>


            </Paper>

            <Divider>Search Results</Divider>


            <section className="result-wrapper">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
                    {
                        searchResults && searchResults?.items.length > 0 && searchResults.items.map((item: any, index: number) => (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                                <MediaCard key={item.etag} videoId={item.id.videoId} channelTitle={item.snippet.channelTitle} title={item.snippet.title} publishedAt={item.snippet.publishedAt} description={item.snippet.description} imageUrl={item.snippet.thumbnails.high.url} channelId={item.snippet.channelId} />
                            </Grid>

                        ))
                    }
                </Grid>
            </Box>
            </section>

        </>

    );
}

export default SearchInput;
