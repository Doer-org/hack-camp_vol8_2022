import { isAuthenticatedState } from '../../hooks/sessionStore';
import { PeaceIcon } from '../icon/PeaceIcon';
import { useRecoilState } from 'recoil';

export const Header = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  return (
    <div className="py-4 lg:py-4 mx-3 text-stone-800 flex-none text-black-800 text-3xl md:text-5xl font-bold gap-2.5">
      <div className="flex items-center justify-center ml-5">
        <PeaceIcon />
        Warikan Generator
        <div className="shadow-lg rounded-2xl bg-white p-2 mr-5 ml-auto">
          <div className="flex items-center">
            <img
              alt="profile"
              src={
                session
                  ? session?.pictureUrl
                  : 'https://source.unsplash.com/random'
              }
              className="mx-auto object-cover rounded-full h-8 w-8 "
            />
            <span className="text-gray-600 text-sm font-medium ml-3">
              {session ? session?.displayName : 'Charlie'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
