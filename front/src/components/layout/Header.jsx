import { isAuthenticatedState } from '../../hooks/sessionStore';
import { PeaceIcon } from '../icon/PeaceIcon';
import { useRecoilState } from 'recoil';

export const Header = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  return (
    <div className="max-w-2xl md:mx-auto pt-5 pb-3">
      <div className="flex items-center justify-center text-stone-800 text-2xl md:text-3xl font-semibold">
        <div className="ml-3 mr-auto flex items-center">
          <PeaceIcon />
          Warikan Generator
        </div>
        <div className="shadow-lg rounded-2xl bg-white p-2 mr-4 ml-auto md:ml-20">
          <div className="flex items-center">
            <img
              alt="profile"
              src={
                session
                  ? session?.pictureUrl
                  : 'https://img.icons8.com/ios-filled/100/null/user-male-circle.png'
              }
              className="mx-auto object-cover rounded-full h-8 w-8 "
            />
            <span className="text-gray-600 text-sm font-medium ml-3">
              {session ? session?.displayName : 'None'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
