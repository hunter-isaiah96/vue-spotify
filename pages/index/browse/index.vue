<template>
  <v-container fluid>
    <v-container class="d-flex flex-column full-height no-overflow pa-0" fluid>
      <v-container class="grey darken-4" fluid>
        <v-container class="pa-5">
          <h1 class="display-2 font-weight-bold my-5">BROWSE</h1>
          <v-tabs background-color="transparent" color="white" slider-color="primary">
            <v-tab to="/browse/genres">Genres & Moods</v-tab>
            <v-tab to="/browse/newreleases">New Releases</v-tab>
          </v-tabs>
        </v-container>
      </v-container>
      <nuxt-child class="overflow-y scroller"></nuxt-child>
    </v-container>
  </v-container>
</template>