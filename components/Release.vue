<template>
  <v-card color="transparent" elevation="0" tile>
    <v-img :src="release.images[0].url" aspect-ratio="1"></v-img>
    <v-card-text class="text--primary px-0">
      <div>{{ release.name }}</div>
      <v-card-subtitle class="pa-0">
        <span v-for="(artist, index) in release.artists" :key="index">
          <nuxt-link class="artist" to="/" exact>{{ artist.name }} </nuxt-link><span v-if="index + 1 < release.artists.length">, </span>
        </span>
      </v-card-subtitle>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ['release']
}
</script>
<style scoped>
.artist {
  color: #BDBDBD;
  text-decoration: none;
}
.artist:hover {
  color: white;
  text-decoration: underline;
}
</style>