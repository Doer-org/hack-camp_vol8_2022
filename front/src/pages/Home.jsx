import { LinkButton } from '../components/atoms/LinkButton';

export const Home = () => {
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
      <LinkButton
        path="/new"
        label="イベント作成"
        color="bg-purple-600 hover:bg-purple-700 text-white"
      />
    </div>
  );
};
