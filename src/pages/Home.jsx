import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Artist from '../Artist';
import SearchForm from '../SearchForm';


export default () => {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetchArtists();
  }, []);
  // useEffect(() => {
  //   fetchTracks();
  // }, []);

  function fetchArtists(query) {
    axios
        .post('https://memusic.herokuapp.com/login')
        .then((response) => {
            axios
                .get(`https://api.spotify.com/v1/search?q=${query}&type=artist `, {
                    'headers': {
                        'Authorization': `Bearer ${response.data}`
                    }
                })
                .then((response) => {setArtists(response.data.artists.items);
                  console.log(response.data)
                })
                .catch((error) => {
                  console.log("Error occured while fetching data")
                  console.log(error)
                })
            })
        };

  function fetchTracks(id) {
    console.log(id);
    axios
        .post('https://memusic.herokuapp.com/login')
        .then((response) => {
            axios
                .get(`https://api.spotify.com/v1/artists/${id}/top-tracks `, {
                    'headers': {
                      'Authorization': `Bearer ${response.data}`,
                      // 'Accept': "application/json",
                      // 'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((response) => {setTracks(response.data.artists.items[0].id)
                })
              })
      };

  return (
    <div>
      <h1>Search For a Artist</h1>

      <SearchForm fetchArtists={fetchArtists} />

      <div className="App-wrapper" onClick={fetchTracks}>
      {/* <div className="App-wrapper"> */}
        {artists.map((artist, index) => (
          <Artist key={index} artist={artist}/> 
          // onClick={fetchTracks(artist.id)}/>
         
        ))}
      </div>
    </div>
  );
}

