import { $axios } from './axios';
import { isAuthenticatedState } from 'hooks/sessionStore';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const useCreateEvent = () => {
  const navigate = useNavigate();
  const [session] = useRecoilState(isAuthenticatedState);
  const createEvent = async (data) => {
    await $axios
      .post(
        '/event',
        {
          name: data.name,
          number: data.number,
          total_amount: data.total_amount,
          admin_id: session.id
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        console.log('success');
        navigate('/new/complete', {
          state: { id: res.data.id }
        });
      })
      .catch((error) => {
        console.log('イベント作成失敗');
        throw error;
      });
  };

  return { createEvent };
};
