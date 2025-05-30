import Button from "./Button";
import Image from "./Image";

export default function Section({
  heading1,
  heading1Style,
  buttonText = [],
  buttonVariants = [],
  buttonLinks = [],
  image,
  noTopPadding = false,
  reverse = false,
  roundedCornerClass = "",
  content,
  children,
}) {
  return (
    <div
      className={`py-16 ${
        noTopPadding ? "pt-0 xl:pt-16" : "pt-16"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Combined wrapper for image and text */}
        <div
          className={`flex flex-col xl:flex-row ${
            reverse ? "xl:flex-row-reverse" : ""
          } w-full`}
        >
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              image={image}
              heading1={heading1}
              heading1Style={heading1Style}
            />
          </div>

          {/* Text Section */}
          <div
            className={`flex-1 bg-white pt-8 pb-16 px-4 lg:px-16 lg:py-16 flex flex-col items-start justify-center text-left shadow-xl ${roundedCornerClass}`}
          >
            <div className="space-y-4 text-black">{children}</div>
            {content}
            <div className="flex flex-col lg:flex-row lg:gap-4 mt-8 lg:mt-4 w-full">
              {buttonVariants.map((variant, index) => (
                <a
                  key={index}
                  href={buttonLinks[index] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto"
                >
                  <Button
                    text={buttonText[index]}
                    variant={variant}
                    className="w-full lg:w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
