<template>
  <v-hover v-slot:default="{ hover }">
    <v-list-item class="pa-1" @click="sample()">
      <v-icon
        class="mx-3"
        :color="hover ? 'white' : 'grey'"
      >{{ hover ? 'mdi-play' : 'mdi-music-note-outline' }}</v-icon>
      <v-img
        class="mr-3"
        :src="release.album.images[0].url"
        :lazy-src="require('@/assets/placeholder.jpg')"
        aspect-ratio="1"
        max-width="50"
        max-height="50"
      ></v-img>
      <v-list-item-content class="py-2">
        <v-list-item-title>{{ release.name }}</v-list-item-title>
        <v-list-item-subtitle class="mt-1" v-if="release.explicit">
          <v-chip color="grey" text-color="black" label x-small>EXPLICIT</v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-hover>
</template>
<script>
export default {
  props: ['release'],
  methods: {
    sample() {
      console.log('Hi')
    }
  }
}
</script>