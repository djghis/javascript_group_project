<template lang="html">
<div class="">
  <ul>
    <li v-for="(track, index) in tracks" :key="index">{{track.name}} by {{track.artist}}
      <button type="button" name="add">Add</button>


    </li>
  </ul>
  <button type="button" name="addAll">Add All</button>
</div>
</template>

<script>
export default {
  name: "tracks-list",
  props:['tracks']
}

</script>

<style lang="css" scoped>
</style>
