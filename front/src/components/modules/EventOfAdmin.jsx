import { useEvent } from 'hooks/api/useEvent';

export const EventOfAdmin = ({ event }) => {
  const { completePayment } = useEvent();

  const UserRow = ({ participant, key }) => {
    <div>
      <div>{participant.name}</div>
    </div>;
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
          {event.participants.map(
            (participant, index) => (
              console.log(participant),
              (<UserRow participant={participant} key={index} />)
            )
          )}
        </ul>
      </div>
    </>
  );
};
