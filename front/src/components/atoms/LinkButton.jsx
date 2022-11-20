export const LinkButton = (props) => {
  const { label, color, size, disabled, path } = props;
  const className = `${color} ${size} ${'items-center rounded-md px-4 py-2'}`;

  return (
    <a href={path}>
      <span className={className} tabIndex={-1} aria-disabled={disabled}>
        {label}
      </span>
    </a>
  );
};
