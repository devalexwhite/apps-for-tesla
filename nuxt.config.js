import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Apps For Tesla',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Apps For Tesla'
      },
      {
        name: 'twitter:description',
        content: 'Unofficial app store for Tesla Vehicles'
      },
      {
        name: 'twitter:image',
        content: 'https://appsfortesla.co/meta-image.png'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Unofficial app store for Tesla Vehicles'
      },
      {
        itemprop: 'name',
        content: 'Apps For Tesla'
      },
      {
        itemprop: 'description',
        content: 'Unofficial app store for Tesla Vehicles'
      },
      {
        itemprop: 'image',
        content: 'https://appsfortesla.co/meta-image.png'
      },
      {
        property: 'og:url',
        content: 'https://appsfortesla.co'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Apps For Tesla'
      },
      {
        property: 'og:description',
        content: 'Unofficial app store for Tesla Vehicles'
      },
      {
        property: 'og:image',
        content: 'https://appsfortesla.co/meta-image.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://pro.fontawesome.com/releases/v5.9.0/js/all.js',
        integrity:
          'sha384-nKdXFHC25mX+ztWymakpQ8nRykznAcZ+yHi9XETJ8CuVvvSGeg/0QCPhvDb41hUb',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-long-press-directive'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-58825605-13'
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

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
          exclude: /(node_modules)/
        })
      }
    }
  }
}
