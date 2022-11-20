import { useParams } from 'react-router-dom';

export const Event = () => {
  const { id } = useParams();
  return <div>Event {id}</div>;
};
