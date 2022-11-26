import { isAuthenticatedState, redirect_path } from './sessionStore';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

//この辺はenvファイルに書いたほうがいいかも
const client_id = '1657672330';
const redirect_uri = encodeURI(
  'https://warikan-generator.vercel.app/line/callback'
);
const client_secret = 'bafde86582cd2ba675804f11d3092893';
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

  console.log(state);
  console.log(returnState);

  var params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', returnCode);
  params.append('redirect_uri', redirect_uri);
  params.append('client_id', client_id);
  params.append('client_secret', client_secret);

  const getLineProfile = async () => {
    try {
      const response = await axios.post(
        'https://api.line.me/oauth2/v2.1/token',
        params
      );
      const { access_token } = response.data;
      const profile = await axios.get('https://api.line.me/v2/profile', {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      // TODO ログイン処理
      // (user_idがuserテーブルに存在するかどうかで判定)
      // なければ新規登録
      const user = await axios
        .get(
          `https://warikan-sb4awdmn4q-an.a.run.app/user/${profile.data.userId}`
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return null;
        });

      if (user) {
        // あればログイン
        setSession(user);
      } else {
        //なければ新規登録
        const newUser = await axios.post(
          'https://warikan-sb4awdmn4q-an.a.run.app/user',
          {
            line_id: profile.data.userId,
            display_name: profile.data.displayName,
            picture_url: profile.data.pictureUrl
          }
        );
        setSession(newUser);
      }

      navigate(path);
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };
  if (returnState === state) getLineProfile();
};
