export function Card({ children, onClick, className }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick(e);
  };
  return (
    <div className={`card ${className ?? ""}`} onClick={handleClick}>
      {children}
    </div>
  );
}
