import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new', {
    path: '/accounts/new'
  });
  this.route('accounts');

  this.route('edit', {
    path: '/accounts/:id/edit'
  });
});

export default Router;
