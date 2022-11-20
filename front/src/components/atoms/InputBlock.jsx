import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

export const InputBlock = ({
  // ラベル
  text,
  subText,
  isRequired,
  //フィールド
  type,
  name,
  options,
  placeholder,
  defaultValue
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const colorStyle = errors[name]
    ? 'bg-red-100 focus:outline-red-200'
    : 'border-gray-600 focus:bg-indigo-100 focus:outline-indigo-200';

  return (
    <div className="my-1">
      <label htmlFor={name} className="mb-2">
        <span className="text-sm">
          {text}
          {isRequired && <span className="text-red-600">*</span>}
        </span>
        {subText && <div className="text-xxs text-gray-400">{subText}</div>}
      </label>
      <div className="text-xxs text-red-600 my-2">
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <input
        className={`${colorStyle} ${'border rounded px-3 py-2 text-sm mr-4'}`}
        id={name}
        type={type}
        {...register(name, options)}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
