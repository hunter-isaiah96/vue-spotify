<template>
  <div v-if="dataLoaded">
    <v-container class="px-5 pt-4" fluid>
      <h1 class="py-3 display-1 font-weight-black">Popular</h1>
      <v-list color="transparent" class="pa-0">
        <ReleaseListItem
          v-for="(track, index) in artist_top_tracks.tracks"
          :key="index"
          :release="track"
        ></ReleaseListItem>
      </v-list>
    </v-container>
    <v-container class="px-5 pt-4" fluid>
      <h1 class="py-3 display-1 font-weight-black">Albums</h1>
      <v-row>
        <v-col cols="2" v-for="(track, index) in artist_albums" :key="index">
          <ReleaseTile class="text-center" :release="track"></ReleaseTile>
        </v-col>
        <div v-intersect="onIntersect"></div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ReleaseListItem from '@/components/ReleaseListItem'
import ReleaseTile from '@/components/ReleaseTile'

export default {
  components: {
    ReleaseListItem,
    ReleaseTile
  },
  data() {
    return {
      dataLoaded: false,
      artist_top_tracks: {},
      artist_albums: [],
      next: `https://api.spotify.com/v1/artists/${this.$route.params.id}/albums`
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/userProfile'
    })
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      const el = entries[0]
      if (el.isIntersecting && this.next != null) {
        this.loadAlbums()
      }
    },
    async loadTopTracks() {
      let {
        data
      } = await this.$axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}/top-tracks`,
        { params: { country: this.user.country } }
      )
      this.artist_top_tracks = data
    },
    async loadAlbums() {
      let { data } = await this.$axios.get(this.next, {
        params: { country: this.user.country, limit: 18 }
      })
      this.artist_albums = [...this.artist_albums, ...data.items]
      this.next = data.next
    },
    loadData() {
      this.loadTopTracks()
      this.loadAlbums()
      this.dataLoaded = true
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>