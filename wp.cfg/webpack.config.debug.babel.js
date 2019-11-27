const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.config.base.babel')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {
  NoEmitOnErrorsPlugin,
  HotModuleReplacementPlugin,
  NamedModulesPlugin
} = webpack

module.exports = (env) => {
  return merge(base, {
    mode: 'development',
    devtool: /* 'cheap-module-eval-source-map' */ 'eval',
    entry: {
      hotloader: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?https://localhost:8089',
        'webpack/hot/only-dev-server'
      ],
      bundle: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')]
    },
    output: {
      path: path.resolve(__dirname, '../dev/dist'),
      publicPath: '/set_fe/dist/'
    },
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, '../dev'),
      // for https
      // https: true,
      historyApiFallback: true,
      // for CORS
      // proxy: {
      //   '/api/*': {
      //     target: 'http://xxxxxxx:5000',
      //     secure: false,
      //     changeOrigin: true
      //   }
      // }
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                module: true,
                localIdentName: '[name]__[local]__[hash:base64:10]'
              }
            }, {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, '../src')
                ]
              }
            }, {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, '../src/styles/theme.scss')
                ]
              }
            }]
        }, {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/set_fe/dist/'
              }
            },
            {
              loader: 'css-loader'
            }, {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                javascriptEnabled: true
              }
            }
          ]
        }, {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                module: true,
                localIdentName: '[name]__[local]__[hash:base64:10]'
              }
            }]
        }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new NoEmitOnErrorsPlugin(),
      new HotModuleReplacementPlugin(),
      // enable HMR globally
      new NamedModulesPlugin()
    ]
  })
}
