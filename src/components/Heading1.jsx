
export default function Heading1({ text, style = "primary" }) {
      const styles = {
        primary: "absolute inset-0 flex items-center justify-center text-black text-5xl font-bold mx-4",
        secondary: "absolute inset-0 flex items-center justify-center text-white text-5xl font-bold mx-4"
      };
  return <h1 className={styles[style]}>{text}</h1>;
}
