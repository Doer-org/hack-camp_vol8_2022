import { EventOfAdmin } from 'components/modules/EventOfAdmin';
import { EventOfMember } from 'components/modules/EventOfMember';
import { $axios } from 'hooks/api/axios';
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
    const getEvent = async () => {
      const response = await $axios
        .get(`/event/${id}`)
        .then((res) => {
          console.log('res', res.data);
          setEvent(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log('err', err);
        });
      console.log(response.data);
      return response.data;
    };
    getEvent();
  }, []);

  return (
    <div>
      {event && event.admin_id === session.id && <EventOfAdmin event={event} />}
      {event && event.admin_id !== session.id && (
        <EventOfMember event={event} />
      )}
    </div>
  );
};
