export const Button = (props) => {
  const { label, color, size, disabled } = props;
  const className = `${color} ${size} ${'items-center rounded-md px-4 py-2'}`;

  return (
    <button type="button" className={className} disabled={disabled}>
      {label}
    </button>
  );
};
