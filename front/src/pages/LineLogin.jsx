import picture from '../Images/line_button.png';
import { redirect_path } from '../hooks/sessionStore';
import { BaseButton } from 'components/atoms/BaseButton';
import { useEvent } from 'hooks/api/useEvent';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LineLogin = () => {
  const [, setPath] = useRecoilState(redirect_path);
  const location = useLocation();
  const { getEvent } = useEvent();
  setPath(location.pathname);
  return (
    <div className="mt-10 text-center">
      <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-10">
        ログイン画面
      </h1>

      <a href="/login" className="w-32 inline-block">
        <img src={picture} alt="LINEログイン" className="w-32 mx-auto" />
      </a>
      <BaseButton
        label="ログインせずに使う"
        color="bg-purple-600 hover:bg-purple-700 text-white"
        onClick={() => {
          getEvent(1);
        }}
      />
    </div>
  );
};
