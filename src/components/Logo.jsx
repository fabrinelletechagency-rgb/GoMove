export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" className="shrink-0">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5c8fc4" />
            <stop offset="100%" stopColor="#2e5c8c" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logo-g)" />
        <path d="M32 14 L48 42 L32 34 L16 42 Z" fill="#ffffff" />
      </svg>
      <span
        className={`font-display text-2xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        Go<span className="text-brand-500">Move</span>
      </span>
    </div>
  );
}
