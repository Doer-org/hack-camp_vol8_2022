export const AppContainer = ({ children }) => {
  return (
    <main className="mx-5 md:w-full md:mx-auto p-6 max-w-2xl grow drop-shadow-xl border-2 rounded-md my-2">
      {children}
    </main>
  );
};
