import { useNavigate } from 'react-router-dom';
import { $axios } from './axios';

export const useCreateEvent = () => {
  const navigate = useNavigate();
  const createEvent = async (data) => {
    await $axios
      .post('/event', data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      })
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
