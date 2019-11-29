<template>
  <v-container fluid>
    <v-container class="d-flex flex-column content-w-header pa-0" fluid>
      <v-container class="grey darken-4" fluid>
        <v-container class="pa-5">
          <h1 class="display-2 font-weight-bold my-5">BROWSE</h1>
          <v-tabs background-color="transparent" color="white" slider-color="primary">
            <v-tab to="/browse/genres">Genres & Moods</v-tab>
            <v-tab to="/browse/newreleases">New Releases</v-tab>
          </v-tabs>
        </v-container>
      </v-container>
      <nuxt-child class="content scroller"></nuxt-child>
    </v-container>
  </v-container>
</template>
<style scope>
.content-w-header {
  height: 100%;
  overflow: hidden;
}
.content {
  overflow-y: auto;
}
</style>