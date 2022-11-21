export const BaseButton = ({
  label,
  color,
  type,
  form,
  onClick,
  disabled,
  size
}) => {
  const className = `${size} ${color} ${'items-center rounded-md px-4 py-2'}`;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      form={form}
    >
      {label}
    </button>
  );
};
