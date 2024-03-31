#! /usr/bin/env node

const fs = require('fs');

const pkgStr = fs.readFileSync('package.json').toString();
const pkg = JSON.parse(pkgStr);

const webpackConf = fs.readFileSync('webpack.config.js').toString();

const updatedWebpackConf = webpackConf.replace(/VERSION = '(.*)';/, `VERSION = '${pkg.version}';`);

fs.writeFileSync('webpack.config.js', updatedWebpackConf);

console.log('Version', pkg.version);