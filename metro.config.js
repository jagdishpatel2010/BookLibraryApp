const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Force Metro to look STRICTLY inside your project directory
config.watchFolders = [path.resolve(__dirname)];

// Block Metro from crawling nested parent directories or large caching blocks
config.resolver.blacklistRE = /node_modules\/.*\/node_modules\/.*|android\/.*|ios\/.*/;

module.exports = config;