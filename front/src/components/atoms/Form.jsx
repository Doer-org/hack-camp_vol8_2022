import { FormProvider, useForm } from 'react-hook-form';

export const Form = ({ submitFunction, className, children }) => {
  const methods = useForm();

  const onSubmit = (data) => {
    submitFunction?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};
