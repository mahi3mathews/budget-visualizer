export function Button({ children, onClick, theme, error, ...props }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };
  return (
    <div>
      <button
        className={`button ${theme ?? ""}`}
        onClick={handleClick}
        {...props}
      >
        <span>{children}</span>
      </button>
      <div className="button-error">{error}</div>
    </div>
  );
}
