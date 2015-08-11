import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('all');
  this.route('new');
  this.route('quotes', { path: '/quotes/:quote_id'}, function() {
    this.route('edit');
  });
});

export default Router;
