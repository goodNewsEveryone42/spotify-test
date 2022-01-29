import queryString from 'query-string';
import { httpAuth, http } from '../plugins/axios';

export default {
  headers() {
    const token = localStorage.getItem('spotify-test');
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  },

  POSTAUTH(state, getters) {
    return (url: string, params) => httpAuth.post(url, queryString.stringify({ grant_type: 'client_credentials' }))
      .then((response) => response.data || {});
  },
  GET(state, getters) {
    return (url: string, headers) => http.get(url, { headers: getters.headers })
      .then((response) => response.data || {});
  },
};
