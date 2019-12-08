<template>
  <div v-if="artist" class="overflow-y scroller">
    <input type="text" style="display: none" value="`${baseUrl}/arist/${$route.params.id}`" ref="artistUrl" />
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
                <v-list-item @click="copyArtistLink">
                  <v-list-item-title>Copy Artist Link</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Open in Desktop app</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-tabs class="pt-12" background-color="transparent" color="white" slider-color="primary">
            <v-tab>Overview</v-tab>
            <v-tab>Related artists</v-tab>
            <v-tab>About</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-img>
    <v-container class="px-5 pt-4">
      <h1 class="py-3">Popular</h1>
      <v-list color="transparent" class="pa-0">
        <ReleaseListItem
          v-for="(track, index) in artist_top_tracks.tracks"
          :key="index"
          :release="track"
        ></ReleaseListItem>
      </v-list>
    </v-container>
    <v-container class="px-5 pt-4">
      <h1 class="py-3">Albums</h1>
      <v-row>
        <v-col cols="2" v-for="(track, index) in artist_albums.items" :key="index">
          <ReleaseTile class="text-center" :release="track"></ReleaseTile>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ReleaseListItem from '@/components/ReleaseListItem'
import ReleaseTile from '@/components/ReleaseTile'
export default {
  data() {
    return {
      baseUrl: process.env.baseUrl,
      artist: null,
      artist_top_tracks: null,
      artist_albums: null
    }
  },
  methods: {
    async loadData() {
      let artist = await this.$axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}`
      )
      let artistTopTracks = await this.$axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}/top-tracks`,
        { params: { country: this.user.country } }
      )
      let artistAlbums = await this.$axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}/albums`,
        { params: { country: this.user.country, limit: 18 } }
      )
      this.artist = artist.data
      this.artist_top_tracks = artistTopTracks.data
      this.artist_albums = artistAlbums.data
    }
  },
  validate({ params, query, store }) {
    return !!params.id
  },
  watch: {
    '$route.params.id': function(id) {
      this.loadData()
    }
  },
  async mounted() {
    this.loadData()
  },
  computed: {
    ...mapGetters({
      user: 'user/userProfile'
    })
  },
  components: {
    ReleaseListItem,
    ReleaseTile
  }
}
</script>