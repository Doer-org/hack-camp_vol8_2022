import { $axios } from './axios';
import { useNavigate } from 'react-router-dom';

export const useCreateEvent = () => {
  const createEvent = async (data) => {
    const navigate = useNavigate();
    await $axios
      .post('/event', data)
      .then((res) => {
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
