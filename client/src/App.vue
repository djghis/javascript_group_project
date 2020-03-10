<template>
  <div id="app">
    <h1>Spot<span id="dot"></span><span id="fm">fm</span></h1>

    <div id="grid">
      <div id="search"><search-form></search-form></div>
      <div>
        <artist-details :artist="selectedArtistDetails" :topalbums="topAlbums" :toptracks="topTracks"/>
        <artists-list v-if='searchedArtists' :artists="searchedArtists"></artists-list>
        <albums-list v-if='searchedAlbums' :albums="searchedAlbums"/>
        <tracks-list v-if='searchedTracks' :tracks="searchedTracks" :playlists="playlists"/>
        <tracks-list v-if='albumTracks' :tracks="albumTracks" :playlists="playlists"/>
        <chart-component v-if="!searchedArtists && !searchedAlbums && !searchedTracks"/>
      </div>
      <playlist :playlists='playlists'/>
    </div>
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
import ChartComponent from './components/ChartComponent.vue';
import ArtistDetails from './components/ArtistDetails.vue';
import Playlist from './components/Playlist.vue';
// import PlaylistsForm from './components/PlaylistsForm.vue';

import { eventBus } from '@/main.js';


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
    "tracks-list": TracksList,
    "playlist": Playlist
  },
  mounted() {

    PlaylistService.getPlaylists()
    .then(res => this.playlists = res)

    eventBus.$on('submit-artist', (artist) => {
      // this.clear();
      MusicService.getArtists(artist)
      .then(res => this.searchedArtists = res )
    }),
    eventBus.$on('submit-album', (album) => {
    // this.clear();
      MusicService.getAlbums(album)
      .then(res => this.searchedAlbums = res )
    }),
    eventBus.$on('submit-track', (track) => {
      // this.clear();
      MusicService.getTracks(track)
      .then(res => this.searchedTracks = res )
    })
    // look into promise all
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
    eventBus.$on('add-playlist', payload => {
      PlaylistService.postPlaylist(payload)
      .then(res => this.playlists.push(res))
    })
    eventBus.$on('add-track-to-playlist', data => {
      let id = data[1]._id
      let payload = {
        name: data[1].name,
        tracks: data[1].tracks
      }
      payload.tracks.push(data[0])
      PlaylistService.updatePlaylist(payload, id)
      .then(res => {PlaylistService.getPlaylists()
      .then(res => this.playlists = res)});
    })

  },
  methods: {
    clear: function() {
      this.searchedArtists= '';
      this.searchedAlbums ='';
      this.searchedTracks = '';
      // this.selectedArtistDetails = {};
      this.topAlbums = [];
      this.topTracks = [];
      this.albumTracks = [];
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

#search {
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-column: 1/3;
}

#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3em;
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
