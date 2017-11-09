const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())

module.exports = {
    entry: path.resolve(appDirectory, 'src', 'index'),
    output: {
        path: path.resolve(appDirectory, 'dist'),
        filename: 'bundle.js'
    }
}