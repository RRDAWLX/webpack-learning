module.exports = class CustomWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compile.tap('CustomWebpackPlugin', () => {
      console.log('CustomWebpackPlugin')
    })
  }
}