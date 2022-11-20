export const Button = (props) => {
  const { label, color, disabled, onClick } = props;
  const className = `${color} ${'items-center rounded-md px-4 py-2'}`;

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
