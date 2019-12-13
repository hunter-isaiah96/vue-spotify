<template>
  <div class="overflow-y scroller">
    <div v-if="artist">
      <input
        type="text"
        style="display: none"
        value="`${baseUrl}/arist/${$route.params.id}`"
        ref="artistUrl"
      />
      <v-img
        :src="artist.images[0].url"
        max-height="395px"
        gradient="to top , #121212, rgba(0,0,0,.3)"
      >
        <v-row class="px-5 fill-height" align="end" justify="center">
          <v-col>
            <div
              class="font-weight-thin text-uppercase grey--text text--lighten-2"
            >{{ artist.followers.total.toLocaleString() }} Followers</div>
            <div data-cy="artist-name" class="display-3 font-weight-black py-4">{{ artist.name }}</div>
            <div class="my-6">
              <v-btn class="mr-3" min-width="145" min-height="40" color="primary" rounded>Play</v-btn>
              <v-btn class="mr-3" min-width="145" min-height="40" rounded outlined>Follow</v-btn>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" small text fab>
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Start Radio</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Follow</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Copy Artist Link</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Open in Desktop app</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <v-tabs
              class="pt-12"
              background-color="transparent"
              color="white"
              slider-color="primary"
            >
              <v-tab>Overview</v-tab>
              <v-tab>Related artists</v-tab>
              <v-tab>About</v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-img>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  validate({ params, query, store }) {
    return !!params.id
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
      artist: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/userProfile'
    })
  },
  methods: {
    async loadData() {
      let { data } = await this.$axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}`
      )
      this.artist = data
    }
  },
  async mounted() {
    this.loadData()
  },
  watch: {
    '$route.params.id': function(id) {
      this.loadData()
    }
  }
}
</script>