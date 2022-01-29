import axios from 'axios';

export const httpAuth = axios.create({
  baseURL: 'https://accounts.spotify.com/',
  headers:
  {
    Authorization: `Basic ${Buffer.from('050b911ee65249d1949caf7ea2f072c8:2469ca4623624f379cd27cecd2b4637e').toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const http = axios.create({
  baseURL: 'https://api.spotify.com/',
});
