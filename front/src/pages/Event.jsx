import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { $axios } from 'hooks/api/axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();
  const [session] = useRecoilState(isAuthenticatedState);
  const [event, setEvent] = useState();

  $axios
    .get(`/event/${id}`)
    .then((res) => {
      setEvent(res.data);
    })
    .catch((error) => {
      throw error;
    });

  useEffect(() => {
    if (event !== null) {
      console.log(event);
    }
  }, [event]);

  // const event = getEvent();
  // console.log('event', event);

  // const { eventRes } = useEvent(id);
  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  if (event.admin_id === session.id) {
    return <EventOfAdmin event={event} />;
  } else {
    return <EventOfMember event={event} />;
  }
};
