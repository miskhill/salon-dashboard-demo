import type Ember from 'ember';

export default interface SalonDashboardDemoRegistry {
  // register your app's types for template resolution here
}

declare global {
  interface Window {
    EmberENV: typeof Ember.ENV;
  }
}
