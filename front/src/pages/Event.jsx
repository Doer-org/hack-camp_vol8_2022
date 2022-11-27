import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { useEvent } from 'hooks/api/useEvent';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();
  const [session] = useRecoilState(isAuthenticatedState);

  const { eventRes } = useEvent(id);
  console.log(eventRes);

  useEffect(() => {
    console.log(eventRes, 'eventRes');
  }, [eventRes]);

  // console.log('eventRes', eventRes);
  return <EventOfAdmin event={eventRes} />;
  // const { eventRes } = useEvent(id);
  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  // if (event.admin_id === session.id) {
  //   return <EventOfAdmin event={event} />;
  // } else {
  //   return <EventOfMember event={event} />;
  // }
};
