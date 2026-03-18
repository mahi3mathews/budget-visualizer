export function Pills({ variant, children, onClick, className }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick(e);
  };
  return (
    <div
      className={`pill ${variant ?? "transparent"}  ${onClick ? "pointer" : ""} ${className ?? ""} `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
