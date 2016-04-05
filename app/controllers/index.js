import Ember from 'ember';

export default Ember.Controller.extend({
    ajax: Ember.inject.service(),//hay que agegar esto para usar el ajax
    actions: {

        saveperson:function(){         
            var self = this;
            this.get('ajax').request('people/otroname', {
                method: 'POST',
                data: {
                    name:self.get('name'),
                    last_name:self.get('last_name'),
                    age:self.get('age')
                }
            }).then(function(response){
                alert('guardado');
                self.set('name','');
                self.set('last_name','');
                self.set('age','');
          
            });

        }
    }
});
