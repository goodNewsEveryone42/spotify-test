import * as types from '../types';

export default {
  [types.LOGIN_USER]: async ({ commit, getters }) => {
    const data = await getters.POSTAUTH('api/token');
    localStorage.setItem('spotify-test', data.access_token);
    return data;
  },
  [types.GET_ALBUMS]: async ({ commit, getters }) => {
    const data = await getters.GET('v1/recommendations/available-genre-seeds');
    return data;
  },
  [types.SEARCH_MUSIC]: async ({ commit, getters }) => {
    const data = await getters.GET('v1/search?type=album&include_external=audio');
    return data;
  },
};
