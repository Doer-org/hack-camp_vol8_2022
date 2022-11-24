import { isAuthenticatedState } from '../hooks/sessionStore';
import { useRecoilState } from 'recoil';

export const Home = () => {
  const [session] = useRecoilState(isAuthenticatedState);

  console.log(session);
  return (
    <div className="text-center">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mb-10">
        <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
          Welcome
        </p>

        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Warikan Generator へようこそ
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          Warikan Generator
          は、割り勘を計算し、LINEのメッセージ機能を利用することで、円滑に割り勘をし公平にお金を払うことができるツールです。
        </p>
      </div>
      <div className="shadow-lg rounded-2xl bg-white p-2">
        <div className="flex-row gap-4 flex justify-center items-center">
          <div className="flex-shrink-0">
            <img
              alt="profile"
              src={
                session
                  ? session?.pictureUrl
                  : 'https://source.unsplash.com/random'
              }
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div className=" flex flex-col">
            <span className="text-gray-600 text-lg font-medium">
              {session ? session?.displayName : 'Charlie'}
            </span>
            <span className="text-gray-400 text-xs">Hero</span>
          </div>
        </div>
      </div>
      <a
        href="/new"
        className="relative px-5 py-2 font-medium text-white group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
        <span className="relative">イベント作成</span>
      </a>
    </div>
  );
};
