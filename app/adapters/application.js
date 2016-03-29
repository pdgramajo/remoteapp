import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'localhost:54538',
    namespace: 'api'
});

export default ApplicationAdapter;