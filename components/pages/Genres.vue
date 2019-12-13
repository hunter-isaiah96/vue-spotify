<template>
  <div>
    <h3>Genres & Moods</h3>
    <v-row data-cy="genre-list">
      <v-col v-for="(category, index) in categories" :key="index" cols="2">
        <Category :src="category.icons[0].url" :name="category.name"></Category>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Category from '@/components/Category'
export default {
  data: () => ({
    categories: []
  }),
  mounted() {
    this.loadGenres()
  },
  methods: {
    async loadGenres() {
      try {
        let { data } = await this.$axios.get('/browse/categories?limit=50')
        this.categories = this.categories.concat(data.categories.items)
      } catch (e) {
        if (e.response) {
          $nuxt.error({
            statusCode: e.response.status,
            message: e.response.data.error.message
          })
        } else if (e.request) {
          error({ message: 'Network Error' })
        } else {
          error({ message: err.message })
        }
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