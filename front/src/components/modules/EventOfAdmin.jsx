import { BaseButton } from '../components/atoms/BaseButton';

export const EventOfAdmin = ({id}) => {
  return (
    <>
      <div className="text-center font-bold my-5">2/5</div>

      <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white rounded-lg shadow">
        <ul className="flex flex-col divide divide-y">
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
                <div className="font-medium">Jean Marc</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Developer
                </div>
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
                <div className="text-gray-600 text-sm">Charlie Moi</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
