import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('string'),
  artist: DS.belongsTo('artist', { async: true }),
  songs: DS.hasMany('song', { async: true })
});
