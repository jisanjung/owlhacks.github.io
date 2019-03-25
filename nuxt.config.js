import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name + ' - Temple University\'s Premier Hackathon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/owlhacks-icon.png' }]
  },

  /* generate dynamic routes. 
  add route for each page so they can be accessed independently 
  without having to go through the main app page,
  otherwise 404 error when refreshing etc */
  generate: {
    routes: [
      '/sponsorshipGuide'
    ]
  },

  /* scroll to anchor. only works if on same page */
  /*
  router: {
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        console.log(1)
              return { selector: to.hash }
          } else if (savedPosition) {
            console.log(2)
              return savedPosition;
          } else {
            console.log(3)
              return { x: 0, y: 0 }
          }
    }
  },
  */

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
