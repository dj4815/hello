import Button from "./Button";
import Heading2 from "./Heading2";
import Image from "./Image";
import Paragraph from "./Paragraph";
export default function Section({
  heading2,
  heading2Style,
  heading1,
  heading1Style,
  paragraph,
  paragraphColor,
  buttonText = [],
  buttonVariants = [],
  image,
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
          <Image
            image={image}
            heading1={heading1}
            heading1Style={heading1Style}
          />
        </div>
        <div className="lg:ml-4 lg:px-0 px-4 flex flex-col items-start justify-center text-left">
          <Heading2 text={heading2} style={heading2Style} />
          <Paragraph text={paragraph} paragraphColor={paragraphColor} />
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            {/* Mapping over the buttonVariants array, giving each button a style and a text, as well as a key */}
            {buttonVariants.map((variant, index) => (
              <Button
                key={index}
                text={buttonText[index]}
                variant={variant}
                className="w-full lg:w-auto"
              />
              
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
