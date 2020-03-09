<template>
  <div id="app">
    <h1>Spot<span id="dot"></span> <span id="identify">and Identify</span></h1>

    <search-form></search-form>
    <artists-list :artists="searchedArtists"></artists-list>
    <chart-component />

  </div>
</template>

<script>

// use artist search function to return artist list with user input when they make playlists (e.g. http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=ch&api_key=KEY&format=json)

import MusicService from './services/MusicService.js';
import PlaylistService from './services/PlaylistService.js';
import SearchForm from './components/SearchForm.vue';
import ArtistsList from './components/ArtistsList.vue';
import { eventBus } from '@/main.js';
import ChartComponent from './components/ChartComponent.vue';
import ArtistDetails from './components/ArtistDetails.vue';


export default {
  data() {
    return {
      playlists: [],
      topArtists: [],
      topTracks: [],
      topTags: [],
      searchedArtists: []
    }
  },
  components: {
    "search-form": SearchForm,
    "artists-list": ArtistsList,
    "chart-component": ChartComponent,
    "artist-details": ArtistDetails
  },
  mounted() {
    // const apiKey = process.env.API_KEY;
    // fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=3&api_key=775afedfb0c1c69dac2ed7ccf1084581&format=json`)
    //   .then((res) => res.json())
    //   .then(data => {
    //     this.topTracks = data.tracks.track;
    //     this.topTracks.forEach((track) => {
    //     });
    //
    //   })

    eventBus.$on('submit-artist', (artist) => {
      MusicService.getArtists(artist)
      .then(res => this.searchedArtists = res )
    })
  }
}



</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

#app {
  width: 80%;
  justify-content: center;
  margin-left: 10%;
  margin-left: 10%;
  padding-bottom: 40rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fcfdff;
  opacity: 90%;
}

h1 {
  padding: 0.5em 0.5em;
  text-transform: lowercase;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 2.5em;
  color: slategrey;
  opacity: 80%;
  text-align: center;
}

#identify {
  font-size: 0.5em;
}

#dot::before {
  content: '.';
  font-size: 3em;
  color: #ffed4f;
  animation: fadein 4s;
  -moz-animation: fadein 4s;
  -webkit-animation: fadein 4s;
  -o-animation: fadein 4s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}

@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}

@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}


</style>
