import { createStore } from 'vuex';
import getters from './getters';
// import mutations from './mutations';
import index from './actions/index';

export default createStore({
  getters,
  // mutations,
  actions: index,
});
