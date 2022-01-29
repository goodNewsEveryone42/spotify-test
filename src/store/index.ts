import { createStore } from 'vuex';
import state from './state/index';
import getters from './getters';
// import mutations from './mutations';
import index from './actions/index';

export default createStore({
  state,
  getters,
  // mutations,
  actions: index,
});
