<!-- <template lang="html">
    <form @submit.prevent="handleSubmit">
      <label for="">Playlist</label>
      <input v-model='name' type="text">
      <input type="submit" name="" value="Add">
    </form>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'playlist-form',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleSubmit: function () {
      const payload = {name: this.name, tracks: []}
      eventBus.$emit('add-playlist', payload)
    }
  }
}
</script>

<style lang="css" scoped>
</style> -->
