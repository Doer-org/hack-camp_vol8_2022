import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { useEvent } from 'hooks/api/useEvent';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();

  const [session] = useRecoilState(isAuthenticatedState);

  // const [event, setEvent] = useState(null);

  // $axios
  //   .get(`/event/${id}`)
  //   .then((res) => {
  //     console.log(res);
  //     setEvent(res.data);
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

  // console.log('state', event);

  const { eventRes } = useEvent(id);
  useEffect(() => {
    console.log('eventRes', eventRes);
  }, []);

  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  if (eventRes.admin_id === session.id) {
    return <EventOfAdmin event={eventRes} />;
  } else {
    return <EventOfMember event={eventRes} />;
  }
};
