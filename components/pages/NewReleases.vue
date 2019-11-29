<template>
  <v-container fluid>
    <v-container>
      <h3>New albums & singles</h3>
      <v-row>
        <v-col v-for="(item, index) in releases" :key="index" cols="2">
          <Release :release="item"></Release>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import Release from '@/components/Release'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      releases: []
    }
  },
  async mounted() {
    try {
      const { data } = await this.$axios.get(
        'https://api.spotify.com/v1/browse/new-releases',
        {
          headers: {
            Authorization: `${this.token_type} ${this.access_token}`
          }
        }
      )
      this.releases = data.albums.items
    } catch (e) {
      console.log(e)
    }
  },
  components: {
    Release
  },
  computed: {
    ...mapGetters({
      access_token: 'auth/access_token',
      token_type: 'auth/token_type'
    })
  }
}
</script>