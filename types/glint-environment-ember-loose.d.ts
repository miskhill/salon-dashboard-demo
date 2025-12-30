import '@glint/environment-ember-loose';
import type SalonDashboardDemoRegistry from './salon-dashboard-demo';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends SalonDashboardDemoRegistry {}
}
