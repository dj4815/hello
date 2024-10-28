import Button from "./Button";
import Heading2 from "./Heading2";
import Image from "./Image";
import Paragraph from "./Paragraph";

export default function Section({
  heading,
  paragraph,
  paragraphColor,
  buttonText,
  buttonVariant,
  image,
}) {
  return (
    <div className="container-2xl bg-slate-50 px-8 sm:px-32 3xl:px-96 2xl:mx-48 py-16 lg:py-32">
      <Heading2 text={heading} />
      <Image image={image} />
      <Paragraph text={paragraph} paragraphColor={paragraphColor} />
      <Button text={buttonText} variant={buttonVariant} />
    </div>
  );
}
