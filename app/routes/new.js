import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createQuote() {
      let quote = {
        author: this.controllerFor('new').get('author'),
        message: this.controllerFor('new').get('message')
      };
      let newQuote = this.store.createRecord('quote', quote);

      this.controllerFor('new').set('author', '');
      this.controllerFor('new').set('message', '');
      
      newQuote.save();
      this.transitionTo('all');
    }
  }
});
