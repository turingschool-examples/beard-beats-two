import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  album: DS.belongsTo('album', { async: true })
});
