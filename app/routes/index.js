import Ember from 'ember';

export default Ember.Route.extend({
    otro:'',
    model:function(){
        return {questions:questions};
        //console.log('+++++++++++++++    '+'RESPONSE'+'   +++++++++++++++');
        var self = this;
        //Ember.$.ajax({
        //    url: 'http://localhost:54538/api/values',
        //    type: "GET",
        //    dataType: 'jsonp',
        //    data:  null,
        //    headers: { 'Authorization': 'Bearer ','token' : + "tz5x3-go30DDHKkUUtuLeV7sIE2ZzrCA1WWXJuQYkKLcXPRcrJMTuoXeUFnXPuUCK2dfeOIoD3qbKxymxfIp7m4sNM_F-A8BVPCc99J5muceOkg1fu1chkXmp2_aJApwHQKTqBv6F0iDSy-7YmSHnOkyIVWc24Cd_KpvZBF1bFxA5rGZfvGAX8hbJswURfhgA5DfcISUXqTZocBuZjjfAtpGY6tc38swsYwSqZAnQm_Zhfp6TjhkPGqvuCv8ifSPC-Tb3z-d3WK2j-Av6TfL-atauGVB1beLvcrPnKBJkvibqWJTGImcqFoovRZUQA-5iUEN0kmCRyylsqJ4NWSsE8G5Wrk2CwB_nf8yO3vqgi-U0F3C0KWk_9IRllCYfu6UckjiYa5jaC9DrUkKt1rzxObrCR-vn1nshZRJ8cIiGseTwpxGJx4oCa_rBnXsZiViHSS8n-Ba7u7YzorAGUlNaVotN4vc0ZlpgGtyjVxBc-9sYZenxctm7mzDh-qQCYKhLX2LjZLIaA-vMEohd-bJMCmb0ZNgz_gCr_o4f8AhtlnHAZwtbGQzNKDpMWAbhAnnYkVyLBQO3lSFvH3bRyJQ1pkmTiAnjnsrb2YjEkQLRvTinuJ6Ko0t7NExdyPjFZcXsDVp2EZaBCfyQm2d0MvMoPeK6YlAwVQjBjaRGMshjBwWujV3dqC-J49P3k72X9vZsJSmVPxrOgadLe2IdoSJKdWnrPf2cHrRVj9TT-UL3HI" },
        //    cache: false,
        //    async:false,
        //    success: function(response){   
               
        //                console.log('+++++++++++++++    '+'RESPONSE'+'   +++++++++++++++');
        //                console.log(response);           
        //            }
        //});
        
        //$.ajax({
        //    url: 'http://localhost:54538/api/values', 
        //    type: "GET",      
        //    data: "jsonp",     
        //    cache: false,
        //    async:false,
        //    headers: { 'Authorization': 'Bearer ','token' : + "tz5x3-go30DDHKkUUtuLeV7sIE2ZzrCA1WWXJuQYkKLcXPRcrJMTuoXeUFnXPuUCK2dfeOIoD3qbKxymxfIp7m4sNM_F-A8BVPCc99J5muceOkg1fu1chkXmp2_aJApwHQKTqBv6F0iDSy-7YmSHnOkyIVWc24Cd_KpvZBF1bFxA5rGZfvGAX8hbJswURfhgA5DfcISUXqTZocBuZjjfAtpGY6tc38swsYwSqZAnQm_Zhfp6TjhkPGqvuCv8ifSPC-Tb3z-d3WK2j-Av6TfL-atauGVB1beLvcrPnKBJkvibqWJTGImcqFoovRZUQA-5iUEN0kmCRyylsqJ4NWSsE8G5Wrk2CwB_nf8yO3vqgi-U0F3C0KWk_9IRllCYfu6UckjiYa5jaC9DrUkKt1rzxObrCR-vn1nshZRJ8cIiGseTwpxGJx4oCa_rBnXsZiViHSS8n-Ba7u7YzorAGUlNaVotN4vc0ZlpgGtyjVxBc-9sYZenxctm7mzDh-qQCYKhLX2LjZLIaA-vMEohd-bJMCmb0ZNgz_gCr_o4f8AhtlnHAZwtbGQzNKDpMWAbhAnnYkVyLBQO3lSFvH3bRyJQ1pkmTiAnjnsrb2YjEkQLRvTinuJ6Ko0t7NExdyPjFZcXsDVp2EZaBCfyQm2d0MvMoPeK6YlAwVQjBjaRGMshjBwWujV3dqC-J49P3k72X9vZsJSmVPxrOgadLe2IdoSJKdWnrPf2cHrRVj9TT-UL3HI" },
        //    success: function(response){   
               
        //        console.log('+++++++++++++++    '+'RESPONSE'+'   +++++++++++++++');
        //        console.log(response);           
        //    }           
        //}); 
    
        //var users = []; //create an empty array
        //Ember.$.ajax({
        //    url: 'http://localhost:54538/api/values',
        //    type: "GET",
        //    dataType: 'jsonp',
        //    data:  null,
        //    headers: { 'Authorization': 'Bearer ','token' : + "tz5x3-go30DDHKkUUtuLeV7sIE2ZzrCA1WWXJuQYkKLcXPRcrJMTuoXeUFnXPuUCK2dfeOIoD3qbKxymxfIp7m4sNM_F-A8BVPCc99J5muceOkg1fu1chkXmp2_aJApwHQKTqBv6F0iDSy-7YmSHnOkyIVWc24Cd_KpvZBF1bFxA5rGZfvGAX8hbJswURfhgA5DfcISUXqTZocBuZjjfAtpGY6tc38swsYwSqZAnQm_Zhfp6TjhkPGqvuCv8ifSPC-Tb3z-d3WK2j-Av6TfL-atauGVB1beLvcrPnKBJkvibqWJTGImcqFoovRZUQA-5iUEN0kmCRyylsqJ4NWSsE8G5Wrk2CwB_nf8yO3vqgi-U0F3C0KWk_9IRllCYfu6UckjiYa5jaC9DrUkKt1rzxObrCR-vn1nshZRJ8cIiGseTwpxGJx4oCa_rBnXsZiViHSS8n-Ba7u7YzorAGUlNaVotN4vc0ZlpgGtyjVxBc-9sYZenxctm7mzDh-qQCYKhLX2LjZLIaA-vMEohd-bJMCmb0ZNgz_gCr_o4f8AhtlnHAZwtbGQzNKDpMWAbhAnnYkVyLBQO3lSFvH3bRyJQ1pkmTiAnjnsrb2YjEkQLRvTinuJ6Ko0t7NExdyPjFZcXsDVp2EZaBCfyQm2d0MvMoPeK6YlAwVQjBjaRGMshjBwWujV3dqC-J49P3k72X9vZsJSmVPxrOgadLe2IdoSJKdWnrPf2cHrRVj9TT-UL3HI" },
        //}).then(function(response) {
        //    console.log('+++++++++++++++    '+'RESPONSE'+'   +++++++++++++++');
        //    console.log(response);

        //    self.set('otro',response);
        //    //response.forEach(function(user){
        //    //    var model = App.person.create(user); 
        //    //    users.addObject(model); //fill your array step by step
        //    //});
        //});
        // debugger;
  
         
          
       
       



     //   return 'nada';//this.store.findAll('person');

    //return {questions:questions};
  },
   afterModel:function(){
       console.log('modelo: ',this.get('controllers.model'));
   },
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