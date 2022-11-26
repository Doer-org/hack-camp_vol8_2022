import axios from 'axios';

export const $axios = axios.create({
  baseURL: 'https://warikan-sb4awdmn4q-an.a.run.app',
  withCredentials: true
});
