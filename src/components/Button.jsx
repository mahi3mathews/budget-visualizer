export function Button({ children, onClick, theme, error, ...props }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };
  return (
    <>
      <button
        className={`button ${theme ?? ""}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
      {error && <div className="button-error">{error}</div>}
    </>
  );
}
