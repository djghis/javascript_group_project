<template lang="html">
  <div class="">
    <ul>
      <li @click="handleClick(artist.mbid)" v-for='(artist, index) in artists' :key='index'>{{artist.name}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'artists-list',
  props: ['artists'],
  methods: {
    handleClick (mbid) {
      console.log(mbid);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
