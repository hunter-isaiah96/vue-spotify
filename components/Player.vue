<template>
  <v-container class="pa-0" fluid>
    <v-container class="player py-0" fluid>
      <v-row align="center">
        <v-col cols="2">
          <v-row justify="center">
            <v-btn class="mx-2" text icon small>
              <v-hover v-slot:default="{ hover }">
                <v-icon size="20" :color="hover ? 'white' : 'grey'">mdi-shuffle-variant</v-icon>
              </v-hover>
            </v-btn>
            <v-btn class="mx-2" text icon small>
              <v-hover v-slot:default="{ hover }">
                <v-icon size="20" :color="hover ? 'white' : 'grey'">mdi-skip-previous</v-icon>
              </v-hover>
            </v-btn>
            <v-btn class="mx-2" text icon small>
              <v-hover v-slot:default="{ hover }">
                <v-icon size="35" :color="hover ? 'white' : 'grey'">mdi-play-circle</v-icon>
              </v-hover>
            </v-btn>
            <v-btn class="mx-2" text icon small>
              <v-hover v-slot:default="{ hover }">
                <v-icon size="20" :color="hover ? 'white' : 'grey'">mdi-skip-next</v-icon>
              </v-hover>
            </v-btn>
            <v-btn class="mx-2" text icon small>
              <v-hover v-slot:default="{ hover }">
                <v-icon size="20" :color="hover ? 'white' : 'grey'">mdi-repeat</v-icon>
              </v-hover>
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="7">
          <v-row>
            <v-col class="py-0" cols="auto">
              <v-img :src="require('@/assets/placeholder.jpg')" max-width="60" max-height="60"></v-img>
            </v-col>
            <v-col class="py-0 pl-0" align-self="center">
              <v-row>
                <v-col class="d-flex py-0 mx-2 align-center">
                  <p class="ma-0">
                    Song Title
                    <span class="caption ml-2 grey--text">Artist Name</span>
                  </p>
                  <v-spacer></v-spacer>
                  <span class="caption grey--text text--lighten-1">1:30 / 3:00</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center align-center py-0">
                  <v-slider
                    v-model="seekPosition"
                    track-color="grey"
                    step="0"
                    color="primary"
                    hide-details
                  ></v-slider>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" align-self="center" justify-self="end">
          <v-menu top :offset-y="true" transition="slide-y-reverse-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" text icon dark v-on="on">
                <v-icon>mdi-cellphone-link</v-icon>
              </v-btn>
            </template>
            <v-list flat>
              <v-list-item-group :value="currentItem" color="primary">
                <v-list-item v-for="(device, index) in availableDevices" :key="index" two-line>
                  <v-list-item-avatar>
                    <v-icon v-if="device.type == 'Smartphone'">mdi-cellphone</v-icon>
                    <v-icon v-else>mdi-laptop</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <h4 class="mb-1">{{ device.is_active ? 'Listening On' : device.name }}</h4>
                    </v-list-item-title>
                    <v-list-item-subtitle :class="{'primary--text': device.is_active}">
                      <v-icon
                        class="mr-1"
                        :color="device.is_active ? 'primary': 'rgba(255, 255, 255, 0.7)'"
                        small
                      >mdi-volume-high</v-icon>
                      {{ device.is_active ? device.name : 'Spotify connect' }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <v-icon class="ml-4">mdi-playlist-music</v-icon>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-0 px-5 primary text-right current-device caption" v-if="currentDevice">
      <v-icon>mdi-volume-high</v-icon>You're listening on
      <span class="font-weight-bold">{{ currentDevice.name }}</span>
    </div>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      seekPosition: 50
    }
  },
  async mounted() {
    try {
      let devices = await this.$axios.get(
        'https://api.spotify.com/v1/me/player/devices'
      )
      this.$store.dispatch('player/setAvailableDevices', devices.data.devices)
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    currentItem() {
      return this.availableDevices.findIndex(device => device.is_active)
    },
    ...mapGetters({
      token_type: 'auth/token_type',
      access_token: 'auth/access_token',
      isPlay: 'player/isPlay',
      playerCurrentTime: 'player/playerCurrentTime',
      playerDuration: 'player/playerDuration',
      playerCurrentTrack: 'player/playerCurrentTrack',
      availableDevices: 'player/availableDevices',
      currentDevice: 'player/currentDevice'
    })
  }
}
</script>
<style lang="scss" scoped>
.player {
  background-color: #282828;
  color: white;
  position: relative;
}
.current-device {
  position: relative;
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #1db954;
    position: absolute;
    top: -10px;
    right: 60px;
  }
}
</style>