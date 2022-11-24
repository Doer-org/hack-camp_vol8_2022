import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { useParams } from 'react-router-dom';

export const Event = () => {
  const { id } = useParams();

  //roleを取得する
  const isAdmin = true;

  if (isAdmin)
    return (
      <>
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          イベント{id}詳細画面
        </h2>
        {isAdmin ? <EventOfAdmin id={id} /> : <EventOfMember id={id} />}
      </>
    );
};
