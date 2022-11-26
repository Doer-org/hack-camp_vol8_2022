import { $axios } from './axios';
import { useNavigate } from 'react-router-dom';

export const useCreateEvent = () => {
  const navigate = useNavigate();
  const createEvent = async (data) => {
    await $axios
      .post('/event', data)
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
