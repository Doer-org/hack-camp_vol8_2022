import { EventOfAdmin } from 'components/modules/EventOfAdmin';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const Event = () => {
  const { id } = useParams();
  const [session] = useRecoilState(isAuthenticatedState);
  const [event, setEvent] = useState(null);

  // const { data } = useQuery(['/event/id'], () =>
  //   $axios.get(`/event/${id}`).then((res) => {
  //     console.log('res', res.data);
  //     return res.data;
  //   })
  // );

  useEffect(() => {
    console.log('test');
    // const getEvent = async () => {
    //   const response = await $axios.get(`/event/${id}`).then((res) => {
    //     console.log('res', res.data);
    //     return res.data;
    //   });
    //   console.log(response.data);
    //   return response.data;
    // };
    // const e = getEvent();
    // setEvent(e);
  }, []);

  return (
    <div>
      こんにちは
      <EventOfAdmin event={event} />
    </div>
  );
  // const { eventRes } = useEvent(id);
  // イベントのadmin_idがログインユーザーのidと一致するかどうかで表示を分ける
  // if (event.admin_id === session.id) {
  //   return <EventOfAdmin event={event} />;
  // } else {
  //   return <EventOfMember event={event} />;
  // }
};
