import { generateRandomString } from '../hooks/generateRandomString';
import { isAuthenticatedState } from '../hooks/sessionStore';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LineLoginRoutes = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate('/home');
    }
  }, [session]);

  const client_id = '1657672330';
  const redirect_uri = encodeURI(
    'https://warikan-generator.vercel.app/line/callback'
  );
  const state = generateRandomString();
  const client_secret = 'bafde86582cd2ba675804f11d3092893';
  const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=profile`;

  function RedirectToProvider() {
    // 👇️ redirect to external URL
    window.location.replace(url);

    return null;
  }

  function HandleProviderCallback() {
    const [queryParameters] = useSearchParams();
    const returnCode = queryParameters.get('code');
    const returnState = queryParameters.get('state');

    var params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', returnCode);
    params.append('redirect_uri', redirect_uri);
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);

    // if (returnState === state) {
    axios
      .post('https://api.line.me/oauth2/v2.1/token', params)
      .then((res) => {
        const accessToken = res.data.access_token;
        // const refreshToken = response.data.refresh_token;
        // const expiresIn = response.data.expires_in;

        // var params = new URLSearchParams();
        // params.append('Authorization', `Bearer ${accessToken}`);

        // axios.get('https://api.line.me/v2/profile', { params }).then((res) => {
        //   console.log(res.data);
        // });

        const axiosBase = require('axios');
        const axiosProfile = axiosBase.create({
          baseURL: 'https://api.line.me',
          Authorization: `Bearer ${accessToken}`
        });

        axiosProfile.get('/v2/profile').then((res) => {
          console.log(res.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  }

  return (
    <Routes>
      <Route path="/" element={<RedirectToProvider />} />
      <Route path="/line/callback" element={<HandleProviderCallback />} />
    </Routes>
  );
};
