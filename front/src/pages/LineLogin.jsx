import { LinkButton } from '../components/atoms/LinkButton';

export const LineLogin = () => {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
        ログイン画面
      </h1>

      <LinkButton
        path="/"
        label="LINEログイン"
        color="hover:bg-green-700 text-white bg-green-500"
      />
    </div>
  );
};
