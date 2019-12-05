<template>
  <v-card color="transparent" elevation="0" tile>
    <ReleaseImage :src="!!release.album ? release.album.images[0].url : release.images[0].url" :lazy-src="require('@/assets/placeholder.png')"  icon-size="80"></ReleaseImage>
    <v-card-text class="text--primary px-0">
      <div>
        <nuxt-link class="artist-link white--text" to="/">{{ release.name }}</nuxt-link>
      </div>
      <span v-for="(artist, index) in release.artists" :key="index">
        <nuxt-link
          class="artist-link"
          :to="{ name: 'index-artist-id', params: { id: artist.id } }"
          exact
        >{{ artist.name }}</nuxt-link>
        <span v-if="index < release.artists.length - 1"> ,</span>
      </span>
    </v-card-text>
  </v-card>
</template>
<script>
import ReleaseImage from './ReleaseImage'
export default {
  props: ['release'],
  components: {
    ReleaseImage
  }
}
</script>
