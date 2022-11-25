import { BaseButton } from '.././atoms/BaseButton';

export const EventOfAdmin = ({ id }) => {
  //BEからイベント情報を取得する
  const eventId = id;
  const eventName = 'イベント名';
  const sum = 5;
  const remain = 2;
  return (
    <>
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
        {eventName} 詳細画面 {eventId}
      </h2>

      <div className="text-center font-bold my-5">
        {remain}/{sum}
      </div>

      <div className="container flex flex-col mx-auto w-72 items-center justify-center bg-white rounded-lg shadow">
        <ul className="flex flex-col divide divide-y">
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <img
                  alt="profile"
                  src="https://source.unsplash.com/random"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">Jean Marc</div>
              </div>
              <BaseButton
                label="完了"
                color="bg-purple-600 hover:bg-purple-700 text-white"
                type="submit"
              />
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img
                    alt="profile"
                    src="https://source.unsplash.com/random"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">Designer</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
