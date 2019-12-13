<template>
  <v-card color="transparent" elevation="0" tile>
    <v-hover v-slot:default="{ hover }">
      <v-img class :src="release.images[0].url" aspect-ratio="1">
        <v-row class="fill-height release" :class="{ 'hovering': hover }" justify="center">
          <v-icon size="80">mdi-play</v-icon>
        </v-row>
      </v-img>
    </v-hover>
    <v-card-text class="text--primary px-0">
      <div>
        <nuxt-link class="artist-link white--text" to="/">{{ release.name }}</nuxt-link>
      </div>
      <span v-for="(artist, index) in release.artists" :key="index">
        <nuxt-link
          data-cy="artist-link"
          class="artist-link"
          :to="{ name: 'index-artist-id', params: { id: artist.id } }"
        >{{ artist.name }}</nuxt-link>
        <span v-if="index < release.artists.length - 1">,</span>
      </span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ['release']
}
</script>
<style lang="scss" scoped>
.release {
  transition: 0.2s opacity ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  &.hovering {
    opacity: 1;
  }
}
</style>
