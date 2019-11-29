<template>
  <v-row class="fill-height" align="center" justify="center">
    <v-col cols="auto">
      <v-btn
        @click="spotifyAuth"
        class="font-weight-bold"
        color="primary"
        rounded
        x-large
      >Login with Spotify</v-btn>
      <p class="text-center mt-5 mb-0 red--text" v-if="message">{{ message }}</p>
    </v-col>
  </v-row>
</template>

<script>
const spotifyCreds = require('@/spotify.creds')

export default {
  middleware({ store, redirect }) {
    if (store.state.auth.refresh_token) {
      redirect('/browse')
    }
  },
  data() {
    return {
      spotifyCreds,
      message: null
    }
  },
  components: {},
  methods: {
    spotifyAuth() {
      let auth = `${this.spotifyCreds.SPOTIFY_AUTH_URL}?client_id=${this.spotifyCreds.SPOTIFY_CLIENT_ID}&redirect_uri=${this.spotifyCreds.SPOTIFY_REDIRECT_URI}&response_type=${this.spotifyCreds.SPOTIFY_RESPONSE_TYPE}&scope=${this.spotifyCreds.SPOTIFY_SCOPE}`,
        width = 400,
        height = 700,
        left = screen.width / 2 - width / 2,
        top = screen.height / 2 - height / 2,
        w = window.open(
          auth,
          'Spotify',
          `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        )
    }
  },
  mounted() {
    window.addEventListener(
      'message',
      ({ data }) => {
        if (data.from == 'Spotify') {
          if (data.message) {
            this.message = data.message
          } else {
            this.$store.dispatch('auth/setToken', data).then(() => {
              this.$router.push({ name: 'index-browse' })
            })
          }
        }
      },
      false
    )
  }
}
</script>

<style>
</style>
