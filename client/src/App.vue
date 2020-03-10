<template>
  <div id="app">
    <h1>Spot<span id="dot"></span><span id="fm">fm</span></h1>
    <search-form></search-form>
    <artist-details :artist="selectedArtistDetails" :topalbums="topAlbums" :toptracks="topTracks"/>
    <artists-list v-if='searchedArtists' :artists="searchedArtists"></artists-list>
    <albums-list v-if='searchedAlbums' :albums="searchedAlbums"/>
    <tracks-list v-if='searchedTracks' :tracks="searchedTracks"/>
    <tracks-list v-if='albumTracks' :tracks="albumTracks"/>
    <chart-component v-if="!searchedArtists && !searchedAlbums && !searchedTracks"/>
    <input v-if="searchedArtists || searchedAlbums || searchedTracks" @click="clear" type="button" name="" value="Clear">
  </div>
</template>

<script>

import MusicService from './services/MusicService.js';
import PlaylistService from './services/PlaylistService.js';
import SearchForm from './components/SearchForm.vue';
import ArtistsList from './components/ArtistsList.vue';
import AlbumsList from './components/AlbumsList.vue';
import TracksList from './components/TracksList.vue';
import { eventBus } from '@/main.js';
import ChartComponent from './components/ChartComponent.vue';
import ArtistDetails from './components/ArtistDetails.vue';


export default {
  data() {
    return {
      selectedArtistDetails: null,
      playlists: [],
      topArtists: [],
      topTracks: [],
      topTags: [],
      topAlbums: [],
      topTracks: [],
      searchedArtists: '',
      searchedAlbums: '',
      searchedTracks: '',
      albumTracks: []
    }
  },
  components: {
    "search-form": SearchForm,
    "artists-list": ArtistsList,
    "chart-component": ChartComponent,
    "artist-details": ArtistDetails,
    "albums-list": AlbumsList,
    "tracks-list": TracksList
  },
  mounted() {

    eventBus.$on('submit-artist', (artist) => {
      this.searchedAlbums = '';
      this.searchedTracks = '';
      MusicService.getArtists(artist)
      .then(res => this.searchedArtists = res )
    }),
    eventBus.$on('submit-album', (album) => {
      this.searchedArtists = '';
      this.searchedTracks = '';
      MusicService.getAlbums(album)
      .then(res => this.searchedAlbums = res )
    }),
    eventBus.$on('submit-track', (track) => {
      this.searchedArtists = '';
      this.searchedAlbums = '';
      MusicService.getTracks(track)
      .then(res => this.searchedTracks = res )
    })
    eventBus.$on('artist-selected', artist => {
      MusicService.getArtistInfo(artist.name)
      .then(res => this.selectedArtistDetails = res)
    })
    eventBus.$on('artist-selected', artist => {
      MusicService.getArtistAlbums(artist.name)
      .then(res => this.topAlbums = res)
    })
    eventBus.$on('artist-selected', artist => {
      MusicService.getArtistTracks(artist.name)
      .then(res => this.topTracks = res)
    })
    eventBus.$on('album-selected', mbid => {
      MusicService.getAlbumTracks(mbid)
      .then(res => this.albumTracks = this.formatAlbum(res))
    })


  },
  methods: {
    clear: function() {
      this.searchedArtists= '';
      this.searchedAlbums ='';
      this.searchedTracks = '';
    },
    formatAlbum: function(data) {
      return data.map(track => {
        track.artist = track.artist.name;
        return track
      })

    }
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
  font-size: 3.2em;
  color: slategrey;
  opacity: 80%;
  text-align: center;
}

#fm {
  font-size: 0.7em;
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
