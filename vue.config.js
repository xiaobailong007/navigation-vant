module.exports = {
  devServer: {
    port: 8888, //端口号，如果端口号被占用，会自动提升1
    host: 'localhost', //主机名，127.0.0.1  真机0.0.0.0
    https: false, //协议
    open: true, //启动服务时自动打开浏览器访问
  },
  lintOnSave: false, //关闭格式检查
  productionSourceMap: false, //打包时不会生成.map文件，加快打包速度
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  chainWebpack: (config) => {
    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75,
        },
      });
  },
};
