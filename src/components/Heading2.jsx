export default function Heading2({ text, headingColor = "primary" }) {
      const styles = {
        primary: "text-3xl font-bold text-blue-950 mb-2",
        secondary: "text-3xl font-bold text-white mb-2"
      };
  return <h2 className={styles[headingColor]}>{text}</h2>;
}
