export default function NavButton({ text }) {
  return (
    <a
      href="#"
      className="relative text-xl text-black font-medium p-2 before:absolute before:left-0 before:bottom-[-4px] before:h-[8px] before:w-0 before:bg-gradient-to-r from-blue-700 to-cyan-400 before:transition-all before:duration-500 hover:before:w-full"
    >
      {text}
    </a>
  );
}
