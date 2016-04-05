import Ember from 'ember';

export function checkboxGroup(params/*, hash*/) {
  return 'checkbox_'+params[0];
}

export default Ember.Helper.helper(checkboxGroup);
