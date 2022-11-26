import { isAuthenticatedState, redirect_path } from './sessionStore';
import {
  API_DEV_URL,
  LINE_CHANNEL_ID,
  LINE_CHANNEL_SECRET,
  LINE_PROFILE_URL,
  LINE_TOKEN_URL
} from '../config';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const client_id = LINE_CHANNEL_ID;
const redirect_uri = encodeURI(API_DEV_URL + '/line/callback');
const client_secret = LINE_CHANNEL_SECRET;
//ランダムなstateにしたい
const state = 'vol8warikanGenerator';
const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&bot_prompt=aggressive&scope=profile`;

export const RedirectToProvider = () => {
  window.location.replace(url);

  return null;
};

export const HandleProviderCallback = () => {
  const [path] = useRecoilState(redirect_path);
  const [, setSession] = useRecoilState(isAuthenticatedState);
  const navigate = useNavigate();

  const [queryParameters] = useSearchParams();
  const returnCode = queryParameters.get('code');
  const returnState = queryParameters.get('state');

  var params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', returnCode);
  params.append('redirect_uri', redirect_uri);
  params.append('client_id', client_id);
  params.append('client_secret', client_secret);

  const getLineProfile = async () => {
    try {
      const response = await axios.post(LINE_TOKEN_URL, params);
      const { access_token } = response.data;
      const profile = await axios.get(LINE_PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      //[todo] ログイン処理
      // (user_idがuserテーブルに存在するかどうかで判定)
      // なければ新規登録

      // あればログイン
      //sessionに追加
      setSession(profile.data);
      navigate(path);
      //[todo] BEに送信
    } catch (error) {
      console.log(error);
    }
  };
  if (returnState === state) getLineProfile();
};
