import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { $axios } from 'hooks/api/axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();
  const [session] = useRecoilState(isAuthenticatedState);

  const { data } = useQuery(['/event/id'], () =>
    $axios.get(`/event/${id}`).then((res) => {
      console.log('res', res.data);
      return res.data;
    })
  );

  console.log('eventRes', data);
  return <EventOfAdmin event={data} />;
  // const { eventRes } = useEvent(id);
  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  // if (event.admin_id === session.id) {
  //   return <EventOfAdmin event={event} />;
  // } else {
  //   return <EventOfMember event={event} />;
  // }
};
