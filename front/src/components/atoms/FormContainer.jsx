import { FormProvider, useForm } from 'react-hook-form';

export const FormContainer = ({ submitFunction, className, id, children }) => {
  const methods = useForm();

  const onSubmit = (data) => {
    submitFunction?.(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        id={id}
      >
        {children}
      </form>
    </FormProvider>
  );
};
