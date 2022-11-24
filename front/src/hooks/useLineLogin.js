import { generateRandomString } from './generateRandomString';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const state = generateRandomString();
const client_id = '1657672330';
const redirect_uri = encodeURI(
  'https://warikan-generator.vercel.app/line/callback'
);
const client_secret = 'bafde86582cd2ba675804f11d3092893';
const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=profile`;

export const RedirectToProvider = () => {
  // 👇️ redirect to external URL
  window.location.replace(url);

  return null;
};

export const HandleProviderCallback = () => {
  const [queryParameters] = useSearchParams();
  const returnCode = queryParameters.get('code');
  // const returnState = queryParameters.get('state');

  var params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', returnCode);
  params.append('redirect_uri', redirect_uri);
  params.append('client_id', client_id);
  params.append('client_secret', client_secret);

  // [todo] stateのチェックをしたい
  //stateが最初にリダイレクトしたものと一致しない、レンダリングで異なるurlになっている
  // if (returnState === state) {
  axios
    .post('https://api.line.me/oauth2/v2.1/token', params)
    .then((res) => {
      const accessToken = res.data.access_token;

      axios
        .get('https://api.line.me/v2/profile', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then((res) => {
          console.log(res.data);
        });
    })
    .catch((error) => {
      console.log(error);
    });
  // }
};
