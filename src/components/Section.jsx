import Button from "./Button";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";

export default function Section({ heading, paragraph, buttonText, buttonVariant }) {
  return (
    <div className="container-2xl bg-slate-50 px-12 sm:px-32 xl:px-96 py-24 lg:py-48">
      <Heading2 text={heading} />
      <Paragraph text={paragraph} />
      <Button text={buttonText} variant={buttonVariant} />
    </div>
  );
}
