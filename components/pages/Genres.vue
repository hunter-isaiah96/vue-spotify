<template>
  <v-container fluid>
    <v-container>
      <h3>Genres & Moods</h3>
      <v-row>
        <v-col v-for="(category, index) in categories" :key="index" cols="2">
          <Category :src="category.icons[0].url" :name="category.name"></Category>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Category from '@/components/Category'
export default {
  data: () => ({
    categories: []
  }),
  async mounted() {
    if (this.token_type) {
      try {
        let { data } = await this.$axios.get(
          'https://api.spotify.com/v1/browse/categories?limit=50',
          {
            headers: {
              Authorization: `${this.token_type} ${this.access_token}`
            }
          }
        )
        this.categories = data.categories.items
      } catch (e) {
        console.log(e)
      }
    }
  },
  components: {
    Category
  },
  computed: {
    ...mapGetters({
      access_token: 'auth/access_token',
      token_type: 'auth/token_type'
    })
  }
}
</script>