const fs = require('fs');
const { config } = require('../config/index');

const getManifest = () => {
  try {
    if (config.dev === 'development') {
      return JSON.parse(
        fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8')
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = getManifest;
