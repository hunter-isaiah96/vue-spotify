<template>
  <v-container class="d-flex flex-column full-height no-overflow pa-0" fluid>
    <v-container class="grey darken-4 px-5" fluid>
      <h1 class="display-2 font-weight-bold my-5">BROWSE</h1>
      <v-tabs background-color="transparent" color="white" slider-color="primary">
        <v-tab to="/browse/genres" data-cy="genres-button">Genres & Moods</v-tab>
        <v-tab to="/browse/newreleases" data-cy="new-releases-button">New Releases</v-tab>
      </v-tabs>
    </v-container>
    <v-container class="overflow-y scroller px-0" fluid>
      <nuxt-child class="px-5"></nuxt-child>
    </v-container>
  </v-container>
</template>