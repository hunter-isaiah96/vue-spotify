<template>
  <v-hover v-slot:default="{ hover }">
    <v-img class :src="src" aspect-ratio="1" :max-width="size" :max-height="size">
      <v-row class="fill-height release" :class="{ 'hovering': hover }" justify="center">
        <v-icon :size="iconSize">mdi-play-circle-outline</v-icon>
      </v-row>
    </v-img>
  </v-hover>
</template>
<script>
export default {
  props: {
    src: String,
    iconSize: {
      type: [Number, String],
      default: undefined
    },
    size: [Number, String]
  }
}
</script>
<style lang="scss" scoped>
.release {
  transition: 0.2s opacity ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  &.hovering {
    opacity: 1;
  }
}
</style>