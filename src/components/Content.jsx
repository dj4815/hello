export default function Content({ children, textColor = "primary" }) {
  const styles = {
    primary: "text-lg lg:text-base text-black",
    secondary: "text-lg lg:text-base text-slate-50",
  };

  return (
    <div className={`bg-white p-8 rounded-md shadow-md ${styles[textColor]}`}>
      {children}
    </div>
  );
}
