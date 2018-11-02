/* eslint-env node */

const recast = require('recast');
const { readFileSync, writeFileSync } = require('fs');

const builders = recast.types.builders;

module.exports = {
  description: 'The default blueprint for guidemaker-ember-template.',

  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'ember-auto-import',
        'algoliasearch'
      ]
    }).then(() => {
      const code = readFileSync('./ember-cli-build.js');
      const ast = recast.parse(code);

      recast.visit(ast, {
        visitNewExpression: function (path) {
          var node = path.node;

          if (node.callee.name === 'EmberApp'
              || node.callee.name === 'EmberAddon') {
            // console.log(node, node.arguments)
            const configNode = node.arguments.find(element => element.type === 'ObjectExpression');

            let emberPrism = configNode.properties.find(property => {
              return property.key.value === 'ember-prism'
            });

            if(!emberPrism) {
              emberPrism = builders.property(
                'init',
                builders.literal('ember-prism'),
                builders.objectExpression([
                  builders.property(
                    'init',
                    builders.identifier('theme'),
                    builders.literal('okaidia')
                  ),
                  builders.property(
                    'init',
                    builders.identifier('components'),
                    builders.arrayExpression([
                      builders.literal('apacheconf'),
                      builders.literal('bash'),
                      builders.literal('css'),
                      builders.literal('handlebars'),
                      builders.literal('http'),
                      builders.literal('javascript'),
                      builders.literal('json'),
                      builders.literal('markup-templating'),
                      builders.literal('ruby'),
                      builders.literal('scss'),
                    ])
                  ),
                  builders.property(
                    'init',
                    builders.identifier('plugins'),
                    builders.arrayExpression([
                      builders.literal('line-numbers'),
                      builders.literal('normalize-whitespace'),
                    ])
                  ),
                ])
              )
              configNode.properties.push(emberPrism);
            }
          }

          this.traverse(path);
        }
      });

      writeFileSync('./ember-cli-build.js', recast.print(ast, { tabWidth: 2, quote: 'single' }).code);
    });
  }
};
