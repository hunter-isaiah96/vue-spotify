<template>
  <v-list-item class="pa-1" @click="hello()">
    <ReleaseImage class="mr-5" :src="release.album.images[0].url" size="50"></ReleaseImage>
    <v-list-item-content class="py-2">
      <v-list-item-title>{{ release.name }}</v-list-item-title>
      <v-list-item-subtitle class="mt-1" v-if="release.explicit">
        <v-chip color="grey" text-color="black" label x-small>EXPLICIT</v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>
    <!-- <v-spacer></v-spacer> -->
    <!-- <div>{{ release.duration_ms | msToTime }}</div> -->
  </v-list-item>
</template>
<script>
import ReleaseImage from './ReleaseImage'
export default {
  props: ['release'],
  components: {
    ReleaseImage
  },
  methods: {
    hello() {

    }
  },
  filters: {
    msToTime(s) {
      var ms = s % 1000
      s = (s - ms) / 1000
      var secs = s % 60
      s = (s - secs) / 60
      var mins = s % 60
      var hrs = (s - mins) / 60

      return hrs + ':' + mins + ':' + secs + '.' + ms
    }
  }
}
</script>