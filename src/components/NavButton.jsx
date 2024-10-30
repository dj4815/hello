export default function NavButton({ text }) {
  return (
    <a
      href="#"
      className="relative text-xl text-black font-medium p-2 before:absolute before:left-0 before:bottom-[-4px] before:h-[8px] before:w-full before:bg-gradient-to-b from-blue-700 to-cyan-400 before:origin-center before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
    >
      {text}
    </a>
  );
}
