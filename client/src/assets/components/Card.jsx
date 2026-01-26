export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white/60 rounded-3xl border border-teal/20 shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
