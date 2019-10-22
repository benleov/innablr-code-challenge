const path = require('path')

const srcDir = path.join(__dirname, 'src')
const distDir = path.join(__dirname, './')

module.exports = {
    mode: 'development',

    context: srcDir,
    entry: './index.js',
    target: 'node',

    output: {
        path: distDir,
        filename: 'bundle.js'
    }
}
