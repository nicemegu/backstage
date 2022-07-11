const path = require('path');//引入path模块
function resolve (dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@views', resolve('./src/views'))
      .set('@components', resolve('./src/components')) //set第一个参数：设置的别名，第二个参数：设置的路径

  },
  devServer: {
    proxy: {
    //   '/search': {
    //     target: 'http://www.xin509.cn',// 后端接口
    //     changeOrigin: true, // 是否跨域
    //     pathRewrite: {
    //       '^/search': '/'
    //     }
    //   },
      // '/tiktok': {
      //   target: 'https://www.douyin.com',// 后端接口
      //   changeOrigin: true, // 是否跨域
      //   pathRewrite: {
      //     '^/tiktok': '/'
      //   }
      // },
      // '/webioDetails': {
      //   target: 'https://s.weibo.com',// 后端接口
      //   changeOrigin: true, // 是否跨域
      //   pathRewrite: {
      //     '^/webioDetails': '/'
      //   }
      // },
      //  '/webio': {
      //   target: 'http://api.rosysun.cn',// 后端接口
      //   changeOrigin: true, // 是否跨域
      //   pathRewrite: {
      //     '^/webio': '/'
      //   }
       '/api': {
        target: 'http://zxy.luoyu520.top',// 后端接口
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/'
        }
      },
     
     
    }
  }
}