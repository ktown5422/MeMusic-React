import React from 'react';

export default function Artist({ artist }) {
  const img = artist.images[0];
  const imgUrl = img ? img.url : '';

  return (
    <div>
      <img
        
        src={imgUrl}
        alt={artist.name}
        width="200"
      />
      <h3>{artist.name}</h3>
    </div>
  );
}

/*
function artistNames(artistsInfo){
    var artistsListHtml = '<div class="wrapper">';
  
    artistsInfo.forEach((artistInfo) => {
        artistsListHtml += `<h1>${artistInfo.name}</h1>`;
    });
  
    artistsListHtml += '</div>';
    
  
    return artistsListHtml;
}

function artistImages(artistsInfo){
    var artistsListHtml = '<div class="wrapper">';

    artistsInfo.forEach((artistInfo) => {
        if(artistInfo.images.length){
            artistsListHtml += `<h4><img src="${artistInfo.images[1].url}" /></h4>`;
        }
        else{
            artistsListHtml += '<h4>No image available!</h4>';
        }
    });

    artistsListHtml += '</div>';
    

    return artistsListHtml;
}
  
export default {
    return `
          <div id="content">
            <div class="container">
              <div class="search-box">
                <form="site-search">
                <input type="search" id="site-search" placeholder="Search Artist">
                <button id="search-b">Search</button>
                </form>
              </div>
              
              <div>
                <a href="https://memusic.netlify.com/"><h1>Home</h1></a>
                <h1>Artist</h1>
                ${artistNames()}
                ${artistImages()}
              </div>
            </div>
          </div>
    `;
}
*/
