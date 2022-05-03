const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.config');

const getProjects = require('./mock/getProjects.json');
const getProject = require('./mock/getProject.json');
const getProjectDetail = require('./mock/getProjectDetail.json');

const DEV_SERVER = 'http://127.0.0.1:8001';

module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    port: '8000',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: DEV_SERVER,
        secure: false,
        changeOrigin: true,
        // bypass: function (req, res, proxyOptions) {
        //   if (req.url.includes('/api/get-project/p')) {
        //     return res.send(getProject);
        //   }
        //   if (req.url.includes('/api/get-projects')) {
        //     return res.send(getProjects);
        //   }
        //   if (req.url.includes('/api/get-project-detail/p')) {
        //     return res.send(getProjectDetail);
        //   }
        // },
      },
    },
  },
  optimization: {
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
