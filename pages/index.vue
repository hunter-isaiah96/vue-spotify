<template>
  <div class="d-flex flex-column main-container">
    <div class="d-flex flex-grow-1 no-overflow">
      <v-card class="mx-auto" min-width="260" color="#040404" tile>
        <v-list v-for="(section, key, index) in sidebar" :key="index" color="transparent" rounded>
          <v-list-item-group color="primary">
            <v-subheader class="text-capitalize">{{key}}</v-subheader>
            <v-list-item v-for="(item, i) in section" :key="i">
              <v-list-item-icon class="mr-5">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
        discover: [
          {
            text: 'Home',
            icon: 'mdi-home',
            to: '/browse'
          },
          { text: 'Search', icon: 'mdi-magnify', to: '' },
          { text: 'Library', icon: 'mdi-book-open-variant', to: '' }
        ],
        bro: [
          {
            text: 'Home',
            icon: 'mdi-home',
            to: '/browse'
          },
          { text: 'Search', icon: 'mdi-magnify', to: '' },
          { text: 'Library', icon: 'mdi-book-open-variant', to: '' }
        ]
      }
    }
  },
  async mounted() {
    try {
      let { data } = await this.$axios.get('https://api.spotify.com/v1/me')
      this.$store.dispatch('user/setUserProfile', data)
    } catch (e) {
      if (e.response) {
        $nuxt.error({
          statusCode: e.response.status,
          message: e.response.data.error.message
        })
      } else if (e.request) {
        console.log('bro2')
        // error({ message: 'Network Error' })
      } else {
        console.log('bro3')
        // error({ message: err.message })
      }
    }
  },
  components: {
    Player
  }
}
</script>
<style lang="scss">
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
