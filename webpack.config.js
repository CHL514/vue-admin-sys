const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development' // 判断当前环境是开发还是生产环境。下载 cross-env, 在命令行中配置参数，然后在 process.env中可以获取到

const config = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        use: {
          loader: 'url-loader', // 一个用于webpack的加载程序，它将文件转换为base64 uri。(减轻网络请求的压力，即不会发送网络请求)
          options: {
            limit: 9024, // 如果文件大于limit,则默认使用file-loader，否则的话采用base64格式
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, // Element-UI
        loader: 'file-loader'
      },
      {
        test: /\.scss$/, // 使用 node-sass , 安装 sass-loader
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './', 'src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"',
        BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"' // 指定axios实例中的 baseURL
      }
    }),
    new VueLoaderPlugin(), // Vue Loader 版本15之后 需要一个附带的webpack插件才能正常工作
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: 'vue-admin-sys',
      inject: 'body', // true || 'head' || 'body' || false,注入js资源，是放在head中还是body中, 脚本别放在head中，否则在获取dom节点的时候，获取不到。
      favicon: path.join(__dirname, './', 'favicon.ico')
    }),
  ]
}

console.log('is Dev :', isDev)
if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0', // 可以通过ip地址加port在手机上访问
    overlay: {
      errors: true // 将报错显示在视图上
    },
    // open: true, // 打开浏览器
    hot: true // (HMR)不刷新页面，只更新修改过的地方,好像要加上webpack.HotModuleReplacementPlugin()和webpack.noEmitOnErrorsPlugin()
  }
}

module.exports = config
