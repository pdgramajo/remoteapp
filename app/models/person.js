import DS from 'ember-data';

export default DS.Model.extend({
    user : DS.attr('number'),
   title: DS.attr('string'),
   name: DS.attr('string'),
   type: DS.attr('string'),
   title: DS.attr('string'),
   height: DS.attr('number'),
   width: DS.attr('number'),
   x: DS.attr('number'),
   y: DS.attr('number'),
   selected: DS.attr('boolean'),
});
