import { $axios } from './axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useRecoilState } from 'recoil';

export const useEvent = () => {
  const [session] = useRecoilState(isAuthenticatedState);

  const completePayment = async (user_id, event_id) => {
    const event = await $axios
      .post(`/status`, {
        user_id: user_id,
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

  return { completePayment };
};
