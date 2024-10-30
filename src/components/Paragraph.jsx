export default function Paragraph({ text, paragraphColor = "primary" }) {
  const styles = {
    primary: "text-md text-black",
    secondary: "text-md text-white",
  };

  return <p className={styles[paragraphColor]}>{text}</p>;
}
