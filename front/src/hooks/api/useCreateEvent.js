import { $axios } from './axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://warikan-sb4awdmn4q-an.a.run.app';

export const useCreateEvent = () => {
  const createEvent = async (data) => {
    const navigate = useNavigate();
    await $axios
      .post('event', data)
      .then((res) => {
        navigate('/new/complete', {
          state: { id: res.data.id }
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  return { createEvent };
};
