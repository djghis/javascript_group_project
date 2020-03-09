<template lang="html">
<div class="">
  <ul>
    <li v-if="album.mbid"  @click="handleClick(album.mbid)" v-for="(album, index) in albums" :key="index">{{album.name}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "albums-list",
  props:['albums'],
  methods: {
    handleClick (mbid) {
      console.log(mbid);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
