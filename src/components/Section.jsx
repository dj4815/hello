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
      className={`bg-slate-100 py-16 ${
        noTopPadding ? "pt-0 xl:pt-16" : "pt-16"
      }`}
    >
      <div
        className={`max-w-screen-xl mx-auto flex flex-col xl:flex-row items-start ${
          reverse ? "xl:flex-row-reverse" : ""
        } lg:gap-4`}
      >
        <div className="bg-white flex-1 flex justify-center lg:justify-end">
          <div className="w-full h-full">
            <Image
              image={image}
              heading1={heading1}
              heading1Style={heading1Style}
            />
          </div>
        </div>

        <div
          className={`flex-1 bg-white mt-0 xl:ml-4 pt-16 pb-32 pl-4 pr-4 lg:px-16 lg:py-16 flex flex-col items-start justify-center text-left shadow-xl ${roundedCornerClass}`}
        >
          <div className="space-y-4 text-black">{children}</div>
          {content}
          <div className="flex flex-col lg:flex-row lg:gap-4 mt-8 lg:mt-4 w-full">
            {/* Mapping over the buttonVariants array, giving each button a style and a text, as well as a key */}
            {buttonVariants.map((variant, index) => (
              <a
                key={index}
                href={buttonLinks[index] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto"
              >
                <Button
                  key={index}
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
  );
}
