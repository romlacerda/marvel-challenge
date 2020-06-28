import axios from 'axios';
import MD5 from 'crypto-js/md5';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
});

const env = {
  ts: 'thesoer',
  public_apikey: '96e3274cf3039b0f54dff62968bf9e0c',
  private_apikey: 'cae81f0ca77b90dd010b8d8cebfc30f6a06c7567',
};

const hash = MD5(env.ts + env.private_apikey + env.public_apikey);

export const queryString = `ts=${env.ts}&apikey=${env.public_apikey}&hash=${hash}`;
export default api;
