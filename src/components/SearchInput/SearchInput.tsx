import React, {useEffect, useState} from "react";
import "./SearchInput.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import MediaCard from '../MediaCard/MediaCard';

function SearchInput() {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState({
        "kind": "youtube#searchListResponse",
        "etag": "CShPe4_GsJiHSTFqN9AOMaaDZ1g",
        "nextPageToken": "CAUQAA",
        "regionCode": "KE",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 5
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "yTD7130Y10uXE4YW4F4xvmTuKIs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "x2p6OEXUw_w"
                },
                "snippet": {
                    "publishedAt": "2022-02-16T14:49:06Z",
                    "channelId": "UCWj10BWkvjXBS_MZsTbylRw",
                    "title": "Bubble Gum VS Chocolate Food Challenge | Eating Only Giant Sweets For 24 Hours by RATATA COOL",
                    "description": "Subscribe for RATATA COOL: https://www.youtube.com/channel/UCWj10BWkvjXBS_MZsTbylRw?sub_confirmation=1 Guys, we ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/x2p6OEXUw_w/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/x2p6OEXUw_w/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/x2p6OEXUw_w/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "RATATA COOL!",
                    "liveBroadcastContent": "live",
                    "publishTime": "2022-02-16T14:49:06Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "ssEaR02GA5XT7BDS6k7jYamy6aY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "5iq3hXmTyAs"
                },
                "snippet": {
                    "publishedAt": "2022-02-16T14:46:55Z",
                    "channelId": "UC1I_DaL4stfZi03ozQEQ1VQ",
                    "title": "EATING ONLY ONE COLOR FOOD FOR 24 HOURS | Red VS Blue Cake Decorating! Jelly VS Chocolate by RATATA",
                    "description": "Subscribe for RATATA: https://www.youtube.com/channel/UC1I_DaL4stfZi03ozQEQ1VQ?sub_confirmation=1 New! Now, for 24 ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5iq3hXmTyAs/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5iq3hXmTyAs/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5iq3hXmTyAs/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "RATATA",
                    "liveBroadcastContent": "live",
                    "publishTime": "2022-02-16T14:46:55Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "yPXEROG-hRfHEn9FCD8_wFhTEzY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "YUDia01zoRg"
                },
                "snippet": {
                    "publishedAt": "2022-02-16T20:31:22Z",
                    "channelId": "UCfw8x3VR-ElcaWW2Tg_jgSA",
                    "title": "Last to Leave Vending Machine Wins $10,000 - Rebecca Zamolo",
                    "description": "Bigs vs Minis in Last to leave vending machine wins. It all started when Rebecca Zamolo created \"Third Wheeling My Best Friends ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YUDia01zoRg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YUDia01zoRg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YUDia01zoRg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Rebecca Zamolo",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-02-16T20:31:22Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "BbJRkMR9yNZKxEUanjj9vWmnwck",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "nCL6AYspuvs"
                },
                "snippet": {
                    "publishedAt": "2022-02-16T07:44:26Z",
                    "channelId": "UCCcprrrcbdaj14kYPjcbj9w",
                    "title": "YouTube-шоу «Гордон» №4",
                    "description": "Стань слушателем Академии Дмитрия Гордона! Стань успешным и богатым! Проходи по ссылке: https://bit.ly/3cXrAdF ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nCL6AYspuvs/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nCL6AYspuvs/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nCL6AYspuvs/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "В гостях у Гордона",
                    "liveBroadcastContent": "upcoming",
                    "publishTime": "2022-02-16T07:44:26Z"
                }
            }, {
                "kind": "youtube#searchResult",
                "etag": "WmNyisHhyeM5V3DJMb3g6XoGdG8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "SZbUPoe70Bo"
                },
                "snippet": {
                    "publishedAt": "2022-02-16T21:00:08Z",
                    "channelId": "UC0otZdGYsA9KqVKAcn2peQA",
                    "title": "MOTIVO DE NÃO POSTAR MAIS VLOGS DE ROTINA NO YOUTUBE - Família Brancoala",
                    "description": "No daily vlog de hoje eu conto o motivo de não estar postando mais vlogs de rotina aqui no canal Brancoala. ✓ CAMISETAS ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SZbUPoe70Bo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SZbUPoe70Bo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SZbUPoe70Bo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Brancoala",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-02-16T21:00:08Z"
                }
            }
        ]
    });

    const handleChange = (event : any) => { // <SyntheticBaseEvent>

        setSearchText(event.target.value)
    };


    const handleSubmit = (event : any) => {
        console.log('submitting');

        event.preventDefault();
        console.log('A text was searched: ', searchText);
        askYouTube()

    }

    const askYouTube = async () => {
        try { // todo, create baseUrl and use dynamically
            let res = await fetch(`http://localhost:4005/search/?queryString="${searchText}`, {
                method: "GET",
                // body: JSON.stringify({ // only for 'POST'
                //     query: searchText,
                // }),
            });

            let resJson = await res.json();
            console.log('result', resJson);

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
                        {'aria-label': 'search youtube'}
                    }
                    onChange={handleChange}/>
                <IconButton sx={
                        {p: '10px'}
                    }
                    aria-label="search"
                    onClick={handleSubmit}>
                    <SearchIcon/>
                </IconButton>


            </Paper>

            {
            searchResults.items.map((item, index) => (
              <MediaCard key={item.etag} channelTitle={item.snippet.channelTitle} title={item.snippet.title} publishedAt={item.snippet.publishedAt} description={item.snippet.description} imageUrl={item.snippet.thumbnails.high.url} channelId={item.snippet.channelId} />
    ))
        } </>

    );
}

export default SearchInput;
