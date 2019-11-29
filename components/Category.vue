<template>
  <nuxt-link to="/">
    <v-img :src="src" class="cat-img">
      <span>{{ name }}</span>
    </v-img>
  </nuxt-link>
</template>
<script>
export default {
  props: ['src', 'name']
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
span {
  display: block;
  text-align: center;
  margin-top: 120px;
  color: #fff;
}
.cat-img {
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover span {
    text-decoration: underline;
  }
}
</style>