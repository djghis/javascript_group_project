<template lang="html">
  <div id="charts">
    <h2>Charting music</h2>
    <h4>Top artists</h4>
      <ul>
        <li v-for="artist in topArtists">{{artist}}</li>
      </ul>
    <h4>Top tracks</h4>
      <ul>
        <li v-for="track in topTracks">{{track.name}} by {{track.artist}}</li>
      </ul>
    <h4>Top tags</h4>
      <ul>
        <li v-for="tag in topTags">{{tag}}</li>
      </ul>
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
      .then(data => this.topArtists = this.formatArtists(data))
    },
    fetchTopTracks(){
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topTracks = this.formatTracks(data))
    },
    fetchTopTags(){
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topTags = this.formatTags(data))
    },
    formatArtists(data){
      const filteredData = data.artists.artist.map(artist => artist.name)
      return filteredData
    },
    formatTags(data){
      const filteredData = data.tags.tag.map(tag => tag.name)
      return filteredData
    },
    formatTracks(data){
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

#charts {
  display: block;
  max-width: 30%;
  padding: 0.1em 0.5em;
  margin: 0.5em 0.1em;
  border: 3px solid red;
}

</style>
