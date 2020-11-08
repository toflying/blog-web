let removeconsole=null //移除console
if (process.env.NODE_ENV == 'development') {//开发环境
  removeconsole = []
} else if (process.env.NODE_ENV == 'production') {//生产环境
  removeconsole = ["transform-remove-console"]
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: removeconsole,
}
