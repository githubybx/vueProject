module.exports = {
  devServer: {
    proxy: {
      '/java': {
        target: 'http://192.168.16.105:8081',
        changeOrigin: true
      }
    }
  }
}
