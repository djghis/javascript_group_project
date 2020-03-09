<template lang="html">
  <div class="">
    <p>{{this.topArtists}}</p>
    <p>{{topTracks}}</p>
    <p>{{topTags}}</p>
  </div>
</template>

<script>

export default {
  name: 'chart-component',
  data() {
    return {
      topTracks: [],
      topArtists: [],
      topTags: []
    }
  },
  mounted() {
    this.fetchTopTags();
    this.fetchTopArtists();
    this.fetchTopTracks();
  },
  methods: {
    fetchTopArtists(){
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topArtists = this.filterArtists(data))
    },
    fetchTopTracks(){
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topTracks = this.filterTracks(data))
    },
    fetchTopTags(){
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topTags = this.filterTags(data))
    },
    filterArtists(data){
      const filteredData = data.artists.artist.map(artist => artist.name)
      return filteredData
    },
    filterTags(data){
      const filteredData = data.tags.tag.map(tag => tag.name)
      return filteredData
    },
    filterTracks(data){
      const filteredData = []
      data.tracks.track.forEach(track => {
        filteredData.push({name: track.name, artist: track.artist.name})
      })
      return filteredData
    }
  }
}
</script>

<style lang="css" scoped>
</style>
