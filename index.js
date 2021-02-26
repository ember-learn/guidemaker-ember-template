/* eslint-disable prettier/prettier */
'use strict';

var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      webpack: {
        node: {
          process: true,
        },
      },
    },
  },

  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  },
};
