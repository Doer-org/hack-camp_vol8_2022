import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { useParams } from 'react-router-dom';

export const Event = () => {
  const { id } = useParams();

  //roleを取得する
  const isAdmin = true;

  if (isAdmin)
    return (
      <>{isAdmin ? <EventOfAdmin id={id} /> : <EventOfMember id={id} />}</>
    );
};
