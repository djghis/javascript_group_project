<template>
  <div id="app">
    <h1>Spot<span id="dot"></span> and Identify</h1>
  </div>
</template>

<script>

// use artist search function to return artist list with user input when they make playlists (e.g. http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=ch&api_key=KEY&format=json)

import MusicService from './services/MusicService.js';
import PlaylistService from './services/PlaylistService.js';

export default {
  data() {
    return {
      stuff: []
    }
  },
  mounted() {
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

#app {
  width: 80%;
  margin-left: 10%;
  margin-left: 10%;
  padding-bottom: 40rem;
  background-color: #fcfdff;
  opacity: 90%;
  text-align: center;
}

h1 {
  padding: 0.5em 0.5em;
  text-transform: lowercase;
  text-align: center;
  /* font-family: 'Muli', sans-serif; */
  font-family: 'Lato', sans-serif;
  font-size: 2.5em;
  color: slategrey;
  opacity: 80%;
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
