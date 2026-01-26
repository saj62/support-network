export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-teal text-white text-lg hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
