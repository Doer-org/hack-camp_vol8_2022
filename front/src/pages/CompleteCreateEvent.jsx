import { BaseButton } from '../components/atoms/BaseButton';
import { LinkButton } from '../components/atoms/LinkButton';
import React from 'react';

export const CompleteCreateEvent = () => {
  const text = 'https://warikan-generator.vercel.app/event/1';

  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
          イベント作成完了
        </h1>
      </div>
      <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">
        URLは以下です。こちらのURLをLINEで送信し、参加者はそのURLにアクセスしてください。
      </p>
      <div className="border rounded-sm">
        {/* URLを記載する */}
        <p className="text-center">
          https://warikan-generator.vercel.app/event/1
        </p>
      </div>
      <div className="text-center mt-5 mb-44">
        <BaseButton
          label="URLをコピー"
          color="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={copy}
        />
      </div>
      <hr />
      <div className="text-center my-5">
        <LinkButton
          path="/home"
          label="ホームに戻る"
          color="bg-white text-purple-500 border border-purple-500"
        />
      </div>
    </>
  );
};
