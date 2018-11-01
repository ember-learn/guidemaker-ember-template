'use strict';

var Funnel = require('broccoli-funnel');
const nodeSass = require('node-sass');
const { join } = require('path');

module.exports = {
  name: 'guidemaker-ember-template',

  included(app, parentAddon) {
    let target = (app || parentAddon);
    target.options = target.options || {};

    target.options.sassOptions = target.options.sassOptions || { implementation: nodeSass };

    this._super.included.apply(this, arguments);
  },
  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  }
};
