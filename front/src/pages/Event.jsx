import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { $axios } from 'hooks/api/axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();

  const [session] = useRecoilState(isAuthenticatedState);

  const event = $axios.get(`/event/${id}`);

  // idを元にBEからイベント情報を取得する
  console.log(event);

  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  if (event.admin_id === session.id) {
    return <EventOfAdmin event={event} />;
  } else {
    return <EventOfMember event={event} />;
  }
};
