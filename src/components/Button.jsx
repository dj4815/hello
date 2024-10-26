export default function Button({ text, variant = "primary" }) {
  const baseStyles =
    "rounded-full transition duration-500 text-xl font-medium px-4 py-2 mt-8";

  const styles = {
    primary: `${baseStyles} bg-blue-700 hover:bg-blue-500 border-2 border-blue-700 hover:border-blue-500 text-white`,
    secondary: `${baseStyles} bg-black border-2 border-black text-white hover:bg-white hover:text-black`,
  };
  return (
    <button className={styles[variant]} type="button">
      {text}
    </button>
  );
}
