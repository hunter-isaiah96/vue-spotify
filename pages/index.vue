<template>
  <div class="d-flex flex-column main-container">
    <div class="d-flex flex-grow-1 no-overflow">
      <v-card height="100%" width="250" color="#121212" tile>
        <v-list color="#121212" dense>
          <v-list-item-group v-model="item">
            <v-list-item v-for="(item, index) in sidebar.fixed" :key="index">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <nuxt-child class="content-wrapper pa-0"></nuxt-child>
    </div>
    <player></player>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
  async mounted() {},
  components: {
    Player
  }
}
</script>
<style lang="scss" scoped>
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
</style>
