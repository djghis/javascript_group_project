<template>
  <div id="app">
    <h1>Spot<span id="dot" class="fader">.</span><span id="fm">fm</span></h1>
    <div id="grid">
      <div id="search"><search-form></search-form></div>
      <div class="border" id="music-div">
        <input v-if="searchedArtists || searchedAlbums || searchedTracks" @click="clear" type="button" value="Clear search">
        <artist-details v-if="selectedArtistDetails" :artist="selectedArtistDetails" :topalbums="topAlbums" :toptracks="topTracks" :playlists="playlists" :tracks="albumTracks"/>
        <artists-list v-if='searchedArtists' :artists="searchedArtists"/>
        <albums-list v-if='searchedAlbums' :albums="searchedAlbums" :tracks="albumTracks" :playlists="playlists" />
        <tracks-list v-if='searchedTracks' :tracks="searchedTracks" :playlists="playlists"/>
        <!-- <tracks-list v-if='albumTracks' :tracks="albumTracks" :playlists="playlists"/> -->
        <chart-component v-if="!searchedArtists && !searchedAlbums && !searchedTracks && !selectedArtistDetails && !showArtist" :playlists="playlists"/>
        <!-- <input v-if="searchedArtists || searchedAlbums || searchedTracks" @click="clear" type="button" value="Clear"> -->
      </div>
      <div class="border" id="playlist-div"><playlist :playlists='playlists'/></div>
      </div>

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

import {eventBus} from '@/main.js';

export default {
  data() {
    return {
      selectedArtistDetails: null,
      playlists: [],
      topArtists: [],
      topTracks: [],
      topTags: [],
      topAlbums: [],
      searchedArtists: '',
      searchedAlbums: '',
      searchedTracks: '',
      albumTracks: [],
      showArtist: false
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
      .then(res => this.playlists = res);

    eventBus.$on('submit-artist', (artist) => {
      this.searchedAlbums ='';
      this.searchedTracks = '';
      this.selectedArtistDetails = null;
      MusicService.getArtists(artist)
        .then(res => this.searchedArtists = res);
    });

    eventBus.$on('submit-album', (album) => {
      this.searchedArtist ='';
      this.searchedTracks = '';
      this.selectedArtistDetails = null;
      MusicService.getAlbums(album)
      .then(res => this.searchedAlbums = res);
    });

    eventBus.$on('submit-track', (track) => {
      this.searchedAlbums ='';
      this.searchedArtists = '';
      this.selectedArtistDetails = null;
      MusicService.getTracks(track)
        .then(res => this.searchedTracks = res);
    });

    eventBus.$on('artist-selected', artist => {
      this.showArtist = true;
      this.clear();
      this.clearSearch();
      MusicService.getArtistInfo(artist.name)
        .then(res => this.selectedArtistDetails = this.formatSelectedArtist(res));
      MusicService.getArtistAlbums(artist.name)
        .then(res => this.topAlbums = res.album);
      MusicService.getArtistTracks(artist.name)
        .then(res => this.topTracks = res.track);
    });

    eventBus.$on('album-selected', data => {
      MusicService.getAlbumTracks(data[0], data[1])
        .then(res => this.albumTracks = this.formatAlbum(res));
    });

    eventBus.$on('add-playlist', payload => {
      PlaylistService.postPlaylist(payload)
        .then(res => this.playlists.push(res));
    });

    eventBus.$on('add-track-to-playlist', data => {
      let id = data[1]._id;
      let payload = {
        name: data[1].name,
        tracks: data[1].tracks,
    };
      payload.tracks.push(data[0]);

      PlaylistService.updatePlaylist(payload, id)
        .then(res => {
          PlaylistService.getPlaylists()
            .then(res => this.playlists = res)
        });
    });
      eventBus.$on('delete-playlist', (id) => {
        PlaylistService.deletePlaylist(id);
        const index = this.playlists.findIndex(playlist => playlist._id === id);
        this.playlists.splice(index, 1);
    });
    eventBus.$on('delete-track', (playlist, track) => {
        const index = this.playlists.findIndex(playlistToFind => playlist._id === playlistToFind._id);
        const trackIndex = this.playlists[index].tracks.indexOf(track);
        this.playlists[index].tracks.splice(trackIndex, 1);
        const updatedPlaylist = this.playlists[index].tracks

        const payload = {
          name: playlist.name,
          tracks: updatedPlaylist
        }

        const id = playlist._id
        PlaylistService.updatePlaylist(payload, id)
          .then(res => {
            PlaylistService.getPlaylists()
              .then(res => this.playlists = res)
        });
  });
  },
  methods: {
    clear: function() {
      this.showArtist = false;
      this.selectedArtistDetails = null;
      this.topAlbums = [];
      this.topTracks = [];
      this.albumTracks = [];
      this.searchedArtists= '';
      this.searchedAlbums ='';
      this.searchedTracks = '';
    },
    clearSearch: function() {
      this.searchedArtists= '';
      this.searchedAlbums ='';
      this.searchedTracks = '';
    },
    formatAlbum: function(data) {
      return data.map(track => {
        track.artist = track.artist.name;
        return track;
      });
    },
    formatSelectedArtist: function(artist) {
      const formattedArtist = {
        ...artist,
        similar: artist.similar.artist.map(similarArtist => similarArtist.name)
      };
      return formattedArtist;
    }
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Lato&display=swap'); */
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
#app {
  width: 80%;
  justify-content: center;
  margin-left: 10%;
  margin-left: 10%;
  padding-left: 2rem;
  padding-right: 2rem;
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
  grid-gap: 1em;
  /* height: 500px;
  overflow-y: scroll; */
}

#music-div {
  height: 75%;
  overflow-y: scroll;
}
#playlist-div {
  height: 75%;
  overflow-y: scroll;
}

.border {
  border: 5px solid #EAF6FF;
  padding: 0.5em 2.5em;
  margin: 0.5em 0.5em;
  border-radius: 15px;
}

h1 {
  text-transform: lowercase;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 3.2em;
  color: #fcfdff;
  opacity: 80%;
  text-align: center;
  margin-top: 0;
  padding: 0;
}

#fm {
  font-size: 0.7em;
}

#dot {
  content: '.';
  font-size: 3em;
  line-height: 0;
  color: #4b0082;
}

  .fader {
    animation: fadein;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 7s;
    display: inline-block;
    animation-play-state: running;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity:1;
  }
  100% {
  opacity:0
}
}

@-moz-keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity:1;
  }
  100% {
  opacity:0
}
}

@-webkit-keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity:1;
  }
  100% {
  opacity:0
}
}

@-o-keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity:1;
  }
  100% {
  opacity:0
}
}
</style>
