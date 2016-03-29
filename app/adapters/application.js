import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:54538',
    namespace: 'api'
});

export default ApplicationAdapter;