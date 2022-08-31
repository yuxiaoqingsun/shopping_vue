const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{'^/api':''},
        // 下面两个配置默认为true
        ws:true,  //用于支持websocket
        changeOrigin: true   //false:8080 true:5000 用于控制请求头中的host值
      },

    }
  },
})
