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
  imageTitle,
  noTopPadding = false,

}) {
  return (
    <div
      className={`bg-slate-50 py-16 ${
        noTopPadding ? "pt-0 xl:pt-16" : "pt-16"
      }`}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="flex justify-center lg:justify-end">
          <Image image={image} imageTitle={imageTitle} />
        </div>
        <div className="lg:ml-4 lg:px-0 px-4 flex flex-col items-start justify-center text-left">
          <Heading2 text={heading} />
          <Paragraph text={paragraph} paragraphColor={paragraphColor} />
          <Button text={buttonText} variant={buttonVariant} />
        </div>
      </div>
    </div>
  );
}
