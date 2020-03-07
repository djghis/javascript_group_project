<template>
  <div id="app">
    <h1>Spot<span id="dot"></span> and Identify</h1>
  </div>
</template>

<script>

// use artist search function to return artist list with user input when they make playlists (e.g. http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=ch&api_key=KEY&format=json)

export default {
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

h1 {
  padding: 0.5em 0.5em;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Muli', sans-serif;
  font-size: 3em;
  color: dimgrey;
  opacity: 90%;
}

span::before {
  content: '.';
  color: #0052a8;
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
