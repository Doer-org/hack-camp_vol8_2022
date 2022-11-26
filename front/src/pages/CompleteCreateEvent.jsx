import { BaseButton } from '../components/atoms/BaseButton';
import { LinkButton } from '../components/atoms/LinkButton';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const CompleteCreateEvent = () => {
  const location = useLocation();
  //idを取得
  const id = location.state.id;
  const url = `https://warikan-generator.vercel.app/event/${id}`;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, []);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setVisible(true);
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-gray-800 text-2xl md:text-3xl font-bold mb-10">
          イベント作成完了
        </h1>
        <p className="max-w-screen-md text-gray-500 md:text-lg mb-12">
          URLは以下です。こちらのURLをLINEで送信し、参加者はそのURLにアクセスしてください。
        </p>
        {visible && (
          <p className=" text-red-500 md:text-sm mb-4">コピーしました！</p>
        )}
        <div className="border rounded-sm">
          <p className="text-center">{url}</p>
        </div>
        <div className="mt-5 mb-44">
          <BaseButton
            label="URLをコピー"
            color="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={copy}
          />
        </div>

        <hr />
        <div className="my-5">
          <LinkButton
            path="/"
            label="ホームに戻る"
            color="bg-white text-purple-500 border border-purple-500"
          />
        </div>
      </div>
    </>
  );
};
