export default function Button({ text, variant = "primary" }) {
  const baseStyles =
    "relative overflow-hidden rounded-full text-lg font-medium px-4 py-2 mt-8 transition duration-500";

  const styles = {
    primary: `${baseStyles} bg-blue-700 text-white hover:text-white`,
    secondary: `${baseStyles} bg-black border-2 border-black text-white hover:bg-white hover:text-black`,
  };

  return (
    <button
      className={`${styles[variant]} ${variant === "primary" ? "group" : ""}`}
      type="button"
    >
      <span className="relative z-10">{text}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-b from-blue-700 to-cyan-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      )}
    </button>
  );
}