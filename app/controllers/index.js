import Ember from 'ember';

export default Ember.Controller.extend({
    ajax: Ember.inject.service(),//hay que agegar esto para usar el ajax
    id: Ember.computed('model.questions.fieldId',function(index,value){
        console.log('++++++++++   index :',index);
        console.log('++++++++++   value :',value);
    }),
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

        },
        save(){
            var self = this;
            let list = $('#myform').serializeArray();
            var respuestas=Ember.A();
            jQuery.each(list, function(index, val) {
              var res = val.name.split("_");
              var x = self.get('model.questions').findBy('id',parseInt(res[1]));
              respuestas.pushObject({id:parseInt(res[1]),respuesta:val.value});
          });

            console.log('**** respuestas - ',respuestas);
        }
    }
});
