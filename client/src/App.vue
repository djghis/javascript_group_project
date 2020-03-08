<template>
  <div id="app">
    <h1>Spot<span id="dot"></span> <span id="identify">and Identify</span></h1>
    <p>Bla bla bla test</p>
    <div id="map">
     <l-map ref="myMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      :setTimeout="setTimeout"
      :panTo="panTo"
      style="width:80%;height:80%;position:absolute">
      <l-tile-layer
      :url="url"
      :attribution="attribution"/>
      <l-marker
      :lat-lng="marker"/>
      </l-map>
    </div>
  </div>
</template>

<script>

// use artist search function to return artist list with user input when they make playlists (e.g. http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=ch&api_key=KEY&format=json)

import MusicService from './services/MusicService.js';
import PlaylistService from './services/PlaylistService.js';

import {latLng} from "leaflet";
import L from 'leaflet';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  name: 'App',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 2,
      center: latLng(0, 0),
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      currentZoom: 2,
      panTo: L.latLng(22, 5),
      showParagraph: false,
      marker: L.latLng(22, 5),
      myIcon: L.icon({
         iconSize: [38, 95],
         iconAnchor: [22, 94],
         popupAnchor: [-3, -76],
       }),
      markerOptions: {
       },
      mapOptions: {
         zoomSnap: 0.5
       },
      showMap: true,
      setTimeout: 5000
     }
   },
  mounted() {
     },
}
</script>

<style>

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

#map {
  width: 100%;
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
