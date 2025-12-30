import Application from 'salon-dashboard-demo/app';
import config from 'salon-dashboard-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
