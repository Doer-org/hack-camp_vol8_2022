import picture from '../Images/line_button.png';
import { useLocation } from 'react-router-dom';

export const LineLogin = ({ path }) => {
  // eslint-disable-next-line no-unused-vars
  path = useLocation().pathname;
  return (
    <div className="mt-10 text-center">
      <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-10">
        ログイン画面
      </h1>

      <a href="/login" className="w-32 inline-block">
        <img src={picture} alt="LINEログイン" className="w-32 mx-auto" />
      </a>
    </div>
  );
};
