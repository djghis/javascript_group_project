<template lang="html">
  <div id="playlist">
    <h2>Playlists</h2>

    <ul>
      <li>playlist 1 </li>

    </ul>
    <button type="button" name="addNewPlaylist">Add new playlist</button>
  </div>
</template>

<script>
export default {
  name: "playlist",
  props: ['playlists']
}
</script>

<style lang="css" scoped>
</style>
