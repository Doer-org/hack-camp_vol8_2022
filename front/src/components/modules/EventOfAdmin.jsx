import { BaseButton } from 'components/atoms/BaseButton';
import { useEvent } from 'hooks/api/useEvent';

export const EventOfAdmin = ({ event }) => {
  const { completePayment } = useEvent();

  const UserRow = ({ participant, key }) => {
    <li className="flex flex-row" key={key}>
      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <img
            alt="profile"
            src={participant.user.picture_url}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </div>
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium">{participant.user.display_name}</div>
        </div>
        <BaseButton
          label="完了"
          color="bg-purple-600 hover:bg-purple-700 text-white"
          type="submit"
          onClick={() => {
            completePayment(participant.user.id, participant.status.event_id);
          }}
        />
      </div>
    </li>;
  };
  return (
    <>
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
        {event.name} 詳細画面
      </h2>

      <div className="text-center font-bold my-5">
        {event.participants.length}/{event.number}
      </div>

      <div className="container flex flex-col mx-auto w-72 items-center justify-center bg-white rounded-lg shadow">
        <ul className="flex flex-col divide divide-y">
          {event.participants.map((participant, index) => {
            return (
              <li className="flex flex-row" key={index}>
                <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                  <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <img
                      alt="profile"
                      src={participant.user.picture_url}
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">
                      {participant.user.display_name}
                    </div>
                  </div>
                  <BaseButton
                    label="完了"
                    color="bg-purple-600 hover:bg-purple-700 text-white"
                    type="submit"
                    onClick={() => {
                      completePayment(
                        participant.user.id,
                        participant.status.event_id
                      );
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
