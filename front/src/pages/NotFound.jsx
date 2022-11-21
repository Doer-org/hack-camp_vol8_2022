import { LinkButton } from '../components/atoms/LinkButton';
import { AppContainer } from '../components/layout/AppContainer';

export const NotFound = () => {
  return (
    <AppContainer>
      <div className="mt-10 text-center">
        <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
          That’s a 404
        </p>
        <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
          Page not found
        </h1>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">
          The page you’re looking for doesn’t exist.
        </p>

        <LinkButton
          path="/"
          label="Go back home"
          color="bg-indigo-500 text-white"
        />
      </div>
    </AppContainer>
  );
};
