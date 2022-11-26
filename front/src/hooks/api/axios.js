import axios from 'axios';

export const $axios = axios.create({
  baseURL: 'https://warikan-sb4awdmn4q-an.a.run.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type'
  }
});
