<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
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
    background: #5a5a5a;
  }
}
</style>