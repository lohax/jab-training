export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jab-training',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'normalize.css/normalize.css',
    // charge un module Node.js directement (ici c'est un fichier SASS)
    // 'bulma',
    // fichier CSS dans notre projet
    // '~/assets/css/main.css',
    // fichier SCSS dans notre projet
    '~/assets/scss/variables.scss'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~plugins/vuetify.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    // Simple usage - see for options if need
    '@nuxtjs/vuetify'

  ],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#00acbf',
          secondary: '#ffc107',
          accent: '#cddc39',
          error: '#e91e63',
          warning: '#ff5722',
          info: '#3f51b5',
          success: '#8bc34a'
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr'
    }
  },
  loading: { color: '#00bcd4' },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    extractCSS: true,
    minimize: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'jab',
        maxSize: 256000
      }
    }
  }
}
