<template>
  <div class="d-flex flex-column main-container">
    <div class="d-flex flex-grow-1 no-overflow">
      <v-card min-width="230" max-width="230" color="#040404" tile>
        <v-img class="my-5 mx-4" :src="require('@/assets/logo.png')" width="130" />
        <v-tabs
          class="navigation-tabs d-flex flex-grow-1"
          background-color="transparent"
          slider-size="5"
          color="white"
          slider-color="primary"
          vertical
          opional
        >
          <v-tab to="/browse" class="justify-start">
            <v-icon left>mdi-home</v-icon>Browse
          </v-tab>
          <v-tab class="justify-start">
            <v-icon left>mdi-account</v-icon>Search
          </v-tab>
          <v-tab class="justify-start">
            <v-icon left>mdi-book-open-variant</v-icon>Library
          </v-tab>
        </v-tabs>
      </v-card>
      <nuxt-child class="content-wrapper pa-0 flex-grow-1"></nuxt-child>
    </div>
    <player></player>
  </div>
</template>
<script>
import Player from '@/components/Player'

export default {
  middleware: 'authentication',
  data() {
    return {
      item: 0,
      sidebar: {
        fixed: [
          { text: 'Browse', icon: 'mdi-folder-multiple-outline' },
          { text: 'Radio', icon: 'mdi-access-point' }
        ]
      }
    }
  },
  async mounted() {
    let { data } = await this.$axios.get('https://api.spotify.com/v1/me')
    this.$store.dispatch('user/setUserProfile', data)
  },
  components: {
    Player
  }
}
</script>
<style lang="scss">
.no-overflow {
  overflow: hidden;
}
.content-wrapper {
  height: 100%;
  overflow-y: auto;
}
.main-container {
  height: 100vh;
}
.navigation-tabs {
  .v-item-group {
    flex: 1;
  }
}
</style>
