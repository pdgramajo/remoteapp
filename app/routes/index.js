import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),//hay que agegar esto para usar el ajax
    model:function(){
        var self = this;
   
        //this.store.findAll('person');
        
        /*********
        
           ******* para  leer la documentacion ver https://www.npmjs.com/package/ember-ajax  *********

        **********/

        return this.get('ajax').request('people');//puedo o no usar el then como lo hago en el codigo comentado abajo

        //return this.get('ajax').request('http://localhost:54538/api/people').then(function(response){
        //    console.log('+++++++++++++++    '+'RESPONSE'+'   +++++++++++++++');
        //    console.log(response);
        //    return response;
        //});
  },
  actions: {
      save: function(){
          console.log('++++++++++   response :',this.get('model.questions'));
      },

  }
});
var questions = [
  {
    id:'q1',
    text:'q 1',
    type:'checkbox',
    answers:[
      {
        id:'a1',
        text:'a foo1'
      },
      {
        id:'a2',
        text:'a foo 2'
      }
    ]
  },
    {
    id:'q2',
    text:'q 2',
    type:'radio',
    answers:[
      {
        id:'a1',
        text:'a radio 1'
      },
      {
        id:'a2',
        text:'a radio 2'
      },
      {
        id:'a3',
        text:'a radio 3'
      }
    ]
  },
  {
    id:'q3',
    text: 'q 3',
    type:'select',
    answers:[
      {
        id:'a1',
        text:1
      },
      {
        id:'a2',
        text:2
      },
      {
        id:'a3',
        text:3
      },
      {
        id:'a4',
        text:4
      }]
  }
];