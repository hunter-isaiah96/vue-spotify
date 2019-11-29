const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/vuebar', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1DB954',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  router: {
    extendRoutes(routes, resolve) {
      // Find index(position) of the index route
      const indexIndex = routes.findIndex(route => route.name === 'index')
      // Find the children property of the index route
      const indexChildren = routes.find(route => route.name === 'index')
        .children
      // Find the index of the browse component in the children array of the index route
      const browseIndex = indexChildren.findIndex(
        route => route.name === 'index-browse'
      )
      // If someone lands on on the main URL, redirect them to /browse/genres
      routes[indexIndex] = {
        ...routes[indexIndex],
        redirect: '/browse/genres'
      }
      // If someone lands on /browse, redirect them to /browse/genres
      routes[indexIndex].children[browseIndex] = {
        ...routes[indexIndex].children[browseIndex],
        redirect: '/browse/genres'
      }
      // Add routes to the browse components children
      // Genres
      // New Releases
      routes[indexIndex].children[browseIndex].children = [
        {
          name: 'index-browse-genres',
          path: 'genres',
          component: resolve(__dirname, 'components/pages/Genres.vue')
        },
        {
          name: 'index-browse-newreleases',
          path: 'newreleases',
          component: resolve(__dirname, 'components/pages/NewReleases.vue')
        }
      ]
    }
  }
}
