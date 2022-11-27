import { EventOfAdmin } from '../components/modules/EventOfAdmin';
import { EventOfMember } from '../components/modules/EventOfMember';
import { $axios } from 'hooks/api/axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();

  const [session] = useRecoilState(isAuthenticatedState);

  const [event, setEvent] = useState(null);

  $axios
    .get(`/event/${id}`)
    .then((res) => {
      console.log(res);
      setEvent(res.data);
    })
    .catch((error) => {
      throw error;
    });

  // idを元にBEからイベント情報を取得する

  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  if (event.admin_id === session.id) {
    return <EventOfAdmin event={event} />;
  } else {
    return <EventOfMember event={event} />;
  }
};
