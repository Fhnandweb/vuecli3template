const webpack = require('webpack')
// 基础路径 发布之前要先修改这里
const baseUrl = process.env.VUE_APP_BASEURL
// const baseUrl = '/'
module.exports = {
  publicPath: baseUrl,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  devServer: {
    // proxy: {
    // 配置跨域
    // '/api': {
    //   target: 'http://xxxx/device/', //对应自己的接口
    //   changeOrigin: true,
    //   ws: true,
    //   pathRewrite: {
    //     '^/api': ''
    //   }
    // }
    // }
  }
}
