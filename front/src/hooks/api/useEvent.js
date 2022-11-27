import { $axios } from './axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useRecoilState } from 'recoil';

export const useEvent = () => {
  const [session] = useRecoilState(isAuthenticatedState);

  const completePayment = async (user_id, event_id) => {
    const event = await $axios
      .put(`/status`, {
        user_id: user_id,
        event_id: event_id
      })
      .then((res) => {
        console.log('完了');
        return res.data;
      })
      .catch((error) => {
        console.log('失敗');
        throw error;
      });
    return event;
  };

  return { completePayment };
};
