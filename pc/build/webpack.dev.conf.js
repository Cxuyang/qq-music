'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const bodyParser = require('body-parser')
const axios = require('axios')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app) {
      app.use(bodyParser.urlencoded({extended: true}))
      const querystring = require('querystring')

      app.get('/api/getDiscList', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })

      app.get('/api/getCdInfo', function (req, res) {
        const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          if (typeof ret === 'string') {
            const reg = /^\w+\(({.+})\)$/
            const matches = ret.match(reg)
            if (matches) {
              ret = JSON.parse(matches[1])
            }
          }
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })

      app.get('/api/lyric', function (req, res) {
        const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          if (typeof ret === 'string') {
            const reg = /^\w+\(({.+})\)$/
            const matches = ret.match(reg)
            if (matches) {
              ret = JSON.parse(matches[1])
            }
          }
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })

      app.post('/api/getPurlUrl', bodyParser.json(), function (req, res) {
        const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.post(url, req.body, {
          headers: {
            referer: 'https://y.qq.com/',
            origin: 'https://y.qq.com',
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })

      //pc data
      app.get('/api/getDataForPc', function (req, res) {
        const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
          },
          params: req.query
        }).then((response) => {          
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
      //pc mv
      app.get('/api/getDataForPcMV', function (req, res) {
        const url = 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
          },
          params: req.query
        }).then((response) => {          
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      //pc singerList
      app.get('/api/singerList', function (req, res) {
        const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://y.qq.com/portal/singer_list.html',
          },
          params: req.query
        }).then((response) => {          
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      //pc singerDetail singerInfo
      app.get('/api/singerInfo', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg'
        axios.get(url, {
          headers: {
            referer: `referer: https://c.y.qq.com/xhr_proxy_utf8.html`,
          },
          params: req.query
        }).then((response) => {          
          return Promise.resolve(response)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc singerDetail hotsongs
      app.get('/api/hotsongs', function (req, res) {
        const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/n/yqq/singer/${req.query.singermid}.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc singerDetail albums
      app.get('/api/singerAlbums', function (req, res) {
        const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_album.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/n/yqq/singer/${req.query.singermid}.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc singerDetail mv
      app.get('/api/singerMv', function (req, res) {
        const url = 'https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/n/yqq/singer/${req.query.singermid}.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc singerDetail simsinger
      // app.get('/api/simsinger', function (req, res) {
      //   const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_simsinger.fcg'
      //   axios.get(url, {
      //     headers: {
      //       referer: `https://y.qq.com/n/yqq/singer/${req.query.singermid}.html`,
      //     },
      //     params: req.query
      //   }).then((response) => {
      //     let ret = response.data
      //     res.json(ret)
      //   }).catch((e) => {
      //     console.log(e)
      //   })
      // })
      // pc albums
      app.get('/api/albums', function (req, res) {
        const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/portal/album_lib.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc songList tags
      app.get('/api/songListTags', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/portal/playlist.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc songList songList
      app.get('/api/songList', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/portal/playlist.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc allmv
      app.get('/api/allmv', function (req, res) {
        const url = 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/portal/mv_lib.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
      // pc radio
      app.get('/api/radiolist', function (req, res) {
        const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_radiolist.fcg'
        axios.get(url, {
          headers: {
            referer: `https://y.qq.com/portal/radio.html`,
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
