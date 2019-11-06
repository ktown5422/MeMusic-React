import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import Artist from './Artist';
import './App.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


// const accessToken =
//   'Y2VhMDY5NjdhMGY2NDZhODlhMzE1ZDdhNjI4ZTYwYjE6Zjc0OTFiN2FhYzllNGVlOThiZDEyN2MxYjljMzZkMDA=';
  
// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${accessToken}`
// };

function App() {
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

      <div className="flex flex-wrap">
        {artists.map((artist, index) => (
          <Artist key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

/*axios
    .post('https://memusic.herokuapp.com/login')
    .then((response) => {
        axios
            .get(`https://api.spotify.com/v1/browse/categories`, {
                'headers': {
                    'Authorization': `Bearer ${response.data}`,
                    'Content-Type': 'application/json'

                }
            })
            .then((data) => {
                console.log(data)
            });
    });
*/
/*axios
    .post('https://memusic.herokuapp.com/login')
    .then((response) => {
        axios
            .get(`https://api.spotify.com/v1/audio-features`, {
                'headers': {
                    'Authorization': `Bearer ${response.data}`
                }
            })
            .then((data) => {
                console.log(data)
            });
    });
*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
