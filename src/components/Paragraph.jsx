export default function Paragraph({ text, paragraphColor = "primary" }) {
  const styles = {
    primary: "text-lg lg:text-base text-black",
    secondary: "text-lg lg:text-base text-slate-50",
  };

  return <div className={styles[paragraphColor]}>{text}</div>;
}
