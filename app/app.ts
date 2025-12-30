import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'salon-dashboard-demo/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: podModulePrefix can be undefined in config
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
