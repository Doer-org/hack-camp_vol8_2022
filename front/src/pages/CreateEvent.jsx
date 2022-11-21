import { CreateEventForm } from '../components/modules/CreateNewEvent';

export const CreateEvent = () => {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
          イベント作成フォーム
        </h1>
      </div>
      <CreateEventForm />
    </>
  );
};
