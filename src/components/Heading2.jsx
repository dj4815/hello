export default function Heading2({ text, style = "primary" }) {
      const styles = {
        primary: "text-4xl font-bold text-black mb-8",
        secondary: "text-3xl font-bold text-white mb-8",
      };
  return <h3 className={styles[style]}>{text}</h3>;
}
