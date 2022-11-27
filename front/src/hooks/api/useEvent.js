import { $axios } from './axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

export const useEvent = (event_id) => {
  const [session] = useRecoilState(isAuthenticatedState);
  const getEvent = async (event_id) => {
    const event = await $axios.get(`/event/${event_id}`);
    // .then((res) => {
    //   return res.data;
    // })
    // .catch(() => {
    //   console.log('イベント取得失敗');
    //   // participateEvent(event_id);
    // });
    return event;
  };

  const { data: eventRes } = useQuery(['/event'], () =>
    $axios.get(`/event/${event_id}`).then((res) => {
      console.log('res', res.data);
      return res.data;
    })
  );

  const participateEvent = async (event_id) => {
    const event = await $axios
      .post(`/status`, {
        id: session.id,
        event_id: event_id
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
    return event;
  };

  const completePayment = async (user_id, event_id) => {
    const event = await $axios
      .post(`/status`, {
        id: user_id,
        event_id: event_id
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
    return event;
  };

  return { getEvent, completePayment, eventRes };
};
