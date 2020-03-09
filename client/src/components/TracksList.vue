<template lang="html">
<div class="">
  <ul>
    <li @click="handleClick(track.name, track.artist)"v-for="(track, index) in tracks" :key="index">{{track.name}} by {{track.artist}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "tracks-list",
  props:['tracks'],
  methods: {
    handleClick(name, artist) {
      console.log(name, artist);
    }
  }
  }

</script>

<style lang="css" scoped>
</style>
