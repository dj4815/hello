export default function Heading1({ text, style = "primary" }) {
  const styles = {
    primary:
      "absolute inset-0 flex items-center justify-center text-black text-5xl font-bold mx-4",
    secondary:
      "absolute inset-0 flex items-center justify-center text-white text-5xl font-bold mx-4",
    primaryBg: "absolute inset-0 flex items-center justify-center mx-4 z-10",
  };

  return style === "primaryBg" ? (
    <div className={styles[style]}>
      <span className="bg-white px-4 py-2 text-black text-5xl font-bold rounded-md">
        {text}
      </span>
    </div>
  ) : (
    <h2 className={styles[style]}>{text}</h2>
  );
}
