const path = require('path')

const appDirectory = path.resolve(__dirname, '..')
const srcDirectory = path.resolve(appDirectory, 'src')
const distDirectory = path.resolve(appDirectory, 'dist')

module.exports = {
  appDirectory,
  srcDirectory,
  distDirectory
}
