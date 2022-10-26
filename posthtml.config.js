const { getPosthtmlW3c } = require('pineglade-w3c');
const minifyHtml = require('htmlnano');

const isDev = process.env.NODE_ENV === 'development';
const plugins = [
  getPosthtmlW3c({
    exit: !isDev,
    forceOffline: true,
    getSourceName(filename) {
      return filename
        .replace(/^.*pages(\\+|\/+)(.*)\.twig$/, '$2')
        .replace(/\\/g, '/');
    }
  })
];

// Изменение настроек в production-режиме
if (!isDev) {
  plugins.push(minifyHtml({ collapseWhitespace: 'aggressive' }));
}

module.exports = { plugins };
