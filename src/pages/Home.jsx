import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Artist from './Artist';

/*
function App() {
  const[artist, setArtist] = useState(null);

  useEffect(() => {
    fetchArtist();
  }, []);

  function fetchArtist() {
    var searchValue = document.querySelector('#site-search').value;

    axios
      .post('https://memusic.herokuapp.com/login')
      .then((response) => {
          axios
              .get(`https://api.spotify.com/v1/search?q=${searchValue}&type=artist `, {
                  'headers': {
                      'Authorization': `Bearer ${response.data}`
                  }
              })
              .then((response) => {
                artists = response.data.artists.items;
                  
              });
          });
      };
}
*/
export default () => {
  return (
    <div>
      
    </div>
  )
}

