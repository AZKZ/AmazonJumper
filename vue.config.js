module.exports = {
  pwa: {
    name: 'amazon Jumper',
    themeColor: '#ffd700',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: '0.1',
    manifestOptions: {
      start_url: '/index.html',
      icons: [
        {
          src: '/img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workboxPluginMode: 'GenerateSW'
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/pwa-sample/' : './',
  outputDir: 'docs'
}
