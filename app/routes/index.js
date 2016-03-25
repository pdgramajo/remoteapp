import Ember from 'ember';

export default Ember.Route.extend({
      model: function() {
    return {questions:questions};
  },
//   afterRender:function(){
//       console.log('modelo: ',this.get('model'));
//   },
  actions: {
    answerSupplied: function(a, q, obj){
      console.log(q+':'+a);
    }
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