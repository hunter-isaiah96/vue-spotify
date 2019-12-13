<template>
  <v-row class="auth-wrapper fill-height" align="center" justify="center">
    <v-col cols="auto">
      <v-btn
        @click="openSpotifyAuth"
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
import spotifyCreds from '@/spotify.creds'

export default {
  middleware({ store, redirect }) {
    if (store.state.auth.refresh_token) redirect('/browse')
  },
  data() {
    return {
      message: null
    }
  },
  methods: {
    openSpotifyAuth() {
      let authURI = `${spotifyCreds.SPOTIFY_AUTH_URI}?client_id=${spotifyCreds.SPOTIFY_CLIENT_ID}&redirect_uri=${spotifyCreds.SPOTIFY_REDIRECT_URI}&response_type=${spotifyCreds.SPOTIFY_RESPONSE_TYPE}&scope=${spotifyCreds.SPOTIFY_SCOPE}`,
        width = 700,
        height = 700,
        left = screen.width / 2 - width / 2,
        top = screen.height / 2 - height / 2

      window.open(
        authURI,
        'Spotify',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
      )
    }
  },
  mounted() {
    window.addEventListener(
      'message',
      ({ data }) => {
        if (data.from === 'Spotify')
          if (data.message) this.message = data.message
          else
            this.$store.dispatch('auth/setToken', data).then(() => {
              this.$router.push({ name: 'index-browse' })
            })
      },
      false
    )
  }
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
  position: relative;
  background-image: url('../../assets/auth-background.jpg');
  background-position: 50% 50%;
  background-size: cover;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
