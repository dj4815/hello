export default function Paragraph({ text, paragraphColor = "primary" }) {
  const styles = {
    primary: "text-lg text-black",
    secondary: "text-lg text-white",
  };

  return <p className={styles[paragraphColor]}>{text}</p>;
}
