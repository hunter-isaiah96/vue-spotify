<script>
export default {
  methods: {
    postMessage(values) {
      values.from = 'Spotify'
      window.opener.postMessage(values, process.env.baseUrl)
    }
  },
  async mounted() {
    if (this.$route.query.error)
      this.postMessage({
        message: 'Access Denied'
      })
    else
      try {
        let { data } = await this.$axios.get(
          `${process.env.baseUrl}/api/token`,
          {
            params: {
              code: this.$route.query.code
            }
          }
        )
        this.postMessage(data)
      } catch ({ response }) {
        this.postMessage({
          message: response.data.error_description
        })
      }
    window.close()
  }
}
</script>