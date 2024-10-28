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
  noTopPadding = false,
}) {
  return (
    <div
      className={`container-2xl xl:columns-2 bg-slate-50 xl:px-32 2xl:px-96 py-16 ${
        noTopPadding ? "pt-0 xl:pt-16" : "pt-16"
      }`}
    >
      <div className="object-fill">
        <Image image={image} />
      </div>
      <div className="lg:ml-4 px-4">
        <Heading2 text={heading} />
        <Paragraph text={paragraph} paragraphColor={paragraphColor} />
        <Button text={buttonText} variant={buttonVariant} />
      </div>
    </div>
  );
}
