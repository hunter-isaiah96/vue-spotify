<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
  <!-- <v-row class="flex-grow-1" no-gutters>
          <v-col cols="auto">
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
          </v-col>
          <v-col class="no-overflow">
            <nuxt />
          </v-col>
        </v-row>
        <v-row class="flex-grow-0" no-gutters>
          <Player></Player>
  </v-row>-->
  <!-- <player></player> -->
</template>

<script>
import Player from '@/components/Player'
import { mapGetters } from 'vuex'
export default {
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
  components: {
    Player
  },
  mounted() {}
}
</script>

<style lang="scss">
html {
  overflow-y: hidden !important;
}
.scroller {
  &::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #5A5A5A;
  }
}
</style>