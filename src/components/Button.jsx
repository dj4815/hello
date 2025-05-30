import { Link } from "react-router-dom";

export default function Button({ text, variant = "bluePrimary" }) {
  const baseStyles =
    "relative flex items-center justify-center overflow-hidden rounded-full text-lg xl:text-base font-medium py-4 px-6 md:py-2 mt-4 w-full md:w-auto";

  const styles = {
    bluePrimary: `${baseStyles} bg-blue-700 text-white font-semibold 
              hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg 
              active:bg-blue-800 active:translate-y-0 active:shadow-md 
              transition-all duration-300 ease-in-out`,
    blueSecondary: `${baseStyles} bg-slate-50 text-blue-700 border border-blue-700 font-semibold 
              hover:bg-blue-100 hover:text-blue-800 
              active:bg-blue-200 active:text-blue-900 
              hover:shadow-md active:shadow-sm 
              transition-all duration-300 ease-in-out`,
    blackPrimary: `${baseStyles} bg-black text-white font-semibold 
              hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-800 
              active:translate-y-0 active:shadow-md transition-all duration-300`,
    blackSecondary: `${baseStyles} bg-white border border-neutral-800 text-neutral-900 font-semibold 
              hover:bg-neutral-100 hover:text-black hover:shadow-md 
              active:bg-neutral-200 active:shadow-sm transition-all duration-300`,
  };

  const routes = {
    "View Resume": "/hello/resume",
    "View Projects": "/hello/projects",
  };

  const to = routes[text];

  const content = <span className="relative z-10">{text}</span>;

  return to ? (
    <Link
      to={to}
      className={`${styles[variant]} ${variant === "bluePrimary" && "group"}`}
    >
      {content}
    </Link>
  ) : (
    <button
      type="button"
      className={`${styles[variant]} ${variant === "bluePrimary" && "group"}`}
    >
      {content}
    </button>
  );
}
