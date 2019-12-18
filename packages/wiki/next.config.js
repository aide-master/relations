// next.config.js
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withLess({
  /* config options here */
  target: 'serverless',
  webpack: config => {
    return config
  }
}))
