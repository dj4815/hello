export default function Heading2({ text, headingColor = "primary" }) {
      const styles = {
        primary: "text-4xl font-bold text-black mb-4",
        secondary: "text-4xl font-bold text-white mb-4"
      };
  return <h2 className={styles[headingColor]}>{text}</h2>;
}
