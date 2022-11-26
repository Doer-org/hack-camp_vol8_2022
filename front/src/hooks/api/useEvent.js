import { $axios } from './axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useRecoilState } from 'recoil';

export const useEvent = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  const getEvent = async (event_id) => {
    const event = await $axios
      .get(`/event`, {
        id: session.id,
        event_id: event_id
      })
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        participateEvent(event_id);
      });
    return event;
  };

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

  return { getEvent, completePayment };
};