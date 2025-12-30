'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcss: {
      compile: {
        enabled: true,
        plugins: [
          {
            module: require('tailwindcss'),
            options: {
              config: './tailwind.config.js'
            }
          },
          {
            module: require('autoprefixer')
          }
        ]
      }
    }
  });

  return app.toTree();
};
