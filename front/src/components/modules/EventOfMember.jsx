import { $axios } from 'hooks/api/axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const EventOfMember = ({ event }) => {
  const [session] = useRecoilState(isAuthenticatedState);
  const participateEvent = async () => {
    await $axios
      .post(`/status`, {
        id: session.id,
        event_id: event.id
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
    return event;
  };
  useEffect(() => {
    participateEvent();
  }, []);
  participateEvent();
  return (
    <>
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
        {event.name} 詳細画面
      </h2>
      <div className="bg-pink-600 mt-10">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-pink-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="">あなたは借金中です。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 justify-between mx-5">
        <div className="bg-purple-600 text-white rounded-md py-3 px-2 text-center w-1/3">
          {/* 支払うべきお金 */}
          {Math.ceil((event.total_amount / event.number) * 0.01) / 0.01}円
        </div>
        <div className="font-bold">TO</div>
        <div className="shadow-lg rounded-2xl bg-white p-2">
          <div className="flex-row gap-4 flex justify-center items-center">
            <div className="flex-shrink-0">
              <img
                alt="profile"
                src="https://source.unsplash.com/random"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </div>
            <div className=" flex flex-col">
              <span className="text-gray-600 text-lg font-medium">event</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
