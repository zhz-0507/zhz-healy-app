module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // vant-UI的官方根字体大小是37.5
      propList: ['*']
    }
  }
}