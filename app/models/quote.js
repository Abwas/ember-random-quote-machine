import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  message: attr('string'),
  author: attr('string')
}).reopenClass({
  FIXTURES: [
    {
      message: 'The mind is everything. What you think you become.',
      author: 'Buddha',
      id: 1
    },
    {
      message: "If you can't explain it simply, you don't understand it well enough.",
      author: 'Albert Einstein',
      id: 2
    },
    {
      message: "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
      author: 'Dalai Lama',
      id: 3
    },
  ]
});
