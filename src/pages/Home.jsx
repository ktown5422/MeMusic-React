import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Artist from '../Artist';
import SearchForm from '../SearchForm';

export default () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

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
                .then(response => setArtists(response.data.artists.items));
            })
        };


  return (
    <div>
      <h1>memusic</h1>

      <SearchForm fetchArtists={fetchArtists} />

      <div>
        {artists.map((artist, index) => (
          <Artist key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
  
}

