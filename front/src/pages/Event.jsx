import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { useEvent } from 'hooks/api/useEvent';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();
  const [session] = useRecoilState(isAuthenticatedState);

  // const getEvent = async () => {
  //   const event = await $axios
  //     .get(`/event/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });

  //   return event;
  // };

  // const event = getEvent();
  // console.log('event', event);

  const { eventRes } = useEvent(id);
  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  if (eventRes.admin_id === session.id) {
    return <EventOfAdmin event={eventRes} />;
  } else {
    return <EventOfMember event={eventRes} />;
  }
};
