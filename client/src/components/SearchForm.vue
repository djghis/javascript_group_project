<template lang="html">
  <div>
    <div class="searchContainer">
      <div class="searchBox" @click="showSearchBar('artist')">Artist</div>
      <div class="searchBox" @click="showSearchBar('album')">Album</div>
      <div class="searchBox" @click="showSearchBar('track')">Track</div>
    </div>
    <div class="searchBarContainer" v-if="!!searchType">
      <input v-model='searchValue' type="text" :placeholder="searchPlaceholder" @keyup="search">
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
export default {
  name: 'search-form',
  data() {
    return {
      searchValue: '',
      searchType: undefined,
      searchPlaceholder: '',

    }
  },
  methods: {
    showSearchBar: function(type) {

      this.searchType = type;
      this.searchPlaceholder = `Search for ${type}s`;
      this.searchValue = '';
    },
    search: function() {
      if (this.searchValue) {
        eventBus.$emit(`submit-${this.searchType}`, this.searchValue);
      }
    },
  }
}
</script>

<style lang="css" scoped>

form {
  display: inline-block;
  margin-bottom: 1em;
  width: 30%;
}

input {
  height: 2rem;
  font-size: 1.2em;
  padding: 0.5em 1em;
  margin: 0.5em 0.5em;
  width: 70%;
}

input[type=submit] {
  border-radius: 10px;
  font-size: 0.8em;
  padding: 0.5em 0.5em;
  opacity: 80%;
  color: dimgrey;
}

input[type=submit]:hover {
  opacity: 90%;
  color: green;
}

.searchContainer {
  display: flex;
  justify-content: space-evenly;
}

.searchBox {
  width: 30%;
  border: 1px solid black;
  display: inline-block;
  text-align: center;
}

.searchBarContainer {
  width: 100%;
}

</style>
