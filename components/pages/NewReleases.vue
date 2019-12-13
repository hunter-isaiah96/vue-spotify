<template>
  <div>
    <h3>New albums & singles</h3>
    <v-row data-cy="new-releases-list">
      <v-col v-for="(item, index) in releases" :key="index" cols="2">
        <ReleaseTile :release="item"></ReleaseTile>
      </v-col>
      <div v-intersect="onIntersect"></div>
    </v-row>
  </div>
</template>
<script>
import ReleaseTile from '@/components/ReleaseTile'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      releases: [],
      next: '/browse/new-releases?limit=25'
    }
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      const el = entries[0]
      if (el.isIntersecting && this.next != null) {
        this.loadReleases()
      }
    },
    async loadReleases() {
      try {
        const { data } = await this.$axios.get(this.next)
        this.releases = [...this.releases, ...data.albums.items]
        this.next = data.albums.next
      } catch (e) {
        if (e.response) {
          $nuxt.error({
            statusCode: e.response.status,
            message: e.response.data.error.message
          })
        } else if (e.request) {
          $nuxt.error({ message: 'Network Error' })
        } else {
          $nuxt.error({ message: err.message })
        }
      }
    }
  },
  components: {
    ReleaseTile
  },
  computed: {
    ...mapGetters({
      access_token: 'auth/access_token',
      token_type: 'auth/token_type'
    })
  }
}
</script>