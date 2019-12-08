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
      let { data } = await this.$axios.get('/browse/categories?limit=50')
      this.categories = this.categories.concat(data.categories.items)
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