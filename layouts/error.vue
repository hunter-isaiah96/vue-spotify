<template>
  <v-row class="d-flex fill-height text-center" justify="center" align="center" no-gutters>
    <!-- <div>{{ error.message }}</div> -->
    <div>
      <div class="vinyl" v-if="error.statusCode === 401">
        4
        <img class="rotating" :src="require('@/assets/vinyl.png')" />1
      </div>
      <p class="display-1 font-weight-medium font-italic">{{ error.message }}</p>
      <!-- <v-btn class="ma-2" outlined color="white" x-large>Return Home</v-btn> -->
    </div>
  </v-row>
</template>
<script>
export default {
  props: ['error']
}
</script>
<style scoped>
.vinyl {
  font-size: 300px;
  margin-bottom: -60px;
}

img {
  margin-left: -50px;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
</style>