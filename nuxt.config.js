module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtpro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  plugins: [
    '~/plugins/axios',
    {
      src: '~/plugins/elementui',
      ssr: true
    },
    '~/plugins/vuecookie',
    '~/plugins/mock',
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  proxy: [
    ['/api', {
      target: 'https://api.douban.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '' }
    }]
  ],
  vendor: ['element-ui', 'axios']
}
