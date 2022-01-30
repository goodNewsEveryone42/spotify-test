import * as types from '@/store/types';
import { httpAuth } from '@/plugins/axios';

interface Data {
  // eslint-disable-next-line camelcase
  access_token: string,
}

const state = {
  authToken: null,
};

const getters = {};

const actions = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line consistent-return
  [types.LOGIN_USER]: async ({ dispatch }) => {
    try {
      let data = Data;
      const response = await httpAuth.post('api/token');
      data = response;
      localStorage.setItem('spotify-test', data.access_token);
      return data;
    } catch (err) {
      console.error(err);
    }
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
