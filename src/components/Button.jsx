export default function Button({ text, variant = "bluePrimary" }) {
  const baseStyles =
    "relative overflow-hidden rounded-full text-lg xl:text-base font-medium py-4 px-6 md:py-2 mt-8 transition duration-500 w-full md:w-auto";

  const styles = {
    bluePrimary: `${baseStyles} bg-blue-700 hover:bg-blue-500 text-white font-semibold transition-colors duration-300 shadow-md`,
    blueSecondary: `${baseStyles} bg-slate-50 text-blue-700 border border-blue-700 transition-colors duration-300 hover:bg-blue-100 shadow-md`,
    blackPrimary: `${baseStyles} bg-black border-2 border-black text-white font-semibold hover:bg-white hover:text-black`,
  };

  return (
    <button
      className={`${styles[variant]} ${variant === "bluePrimary" && "group"}`}
      type="button"
    >
      <span className="relative z-10">{text}</span>
      
    </button>
  );
}
