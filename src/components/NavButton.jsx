export default function NavButton({ text }) {
  return (
    <a
      href="#"
      className="relative text-xl text-black font-medium p-2 inline-block group" // Added 'group' class
    >
      {text}
      <svg
        className="absolute left-0 bottom-[-4px] w-full h-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100" // Changed hover class
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
      >
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          d="M0 5 Q 25 0, 50 5 T 100 5"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" /> {/* blue-700 */}
            <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-400 */}
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}
