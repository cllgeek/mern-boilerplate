// Provide custom regenerator runtime and core-js
require('babel-polyfill')

// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
})

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image require hook
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})

const express = require('express');
const webpack = require('webpack');
const config = require('../build/webpack.dev.config');

const path=require('path');

const cors=require('cors')

const fs = require('fs')

const port =process.env.PORT||3000
const app = express();
app.use(cors())

app.set('views',path.resolve(__dirname,'../views/dev'))
app.engine('.html',require('ejs').__express)
app.set('view engine','html')

// webpack compile
const compiler = webpack(config);

const options = {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {colors: true},
};
app.use(require('webpack-dev-middleware')(compiler, options));
app.use(require('webpack-hot-middleware')(compiler));

// Webpack hook event to write html file into `/views/dev` from `/views/tpl` due to server render
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key)
            data = assets[key].source()
            fs.writeFileSync(file, data)
        }
    })
    callback()
})

require('./route/routes')(app)

app.use(require('./middlewares/clientRoute'));

app.listen(port)
console.log('Express server listening on port ', port, " with pid ", process.pid);

