import Button from "./Button";

export default function Section({
  buttonText = [],
  buttonVariants = [],
  noTopPadding = false,
  content,
  children,
}) {
  return (
    <div
      className={`bg-slate-50 py-16 ${
        noTopPadding ? "pt-0 xl:pt-16" : "pt-16"
      }`}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 xl:grid-cols-2 lg:gap-4">
        <div className="bg-white mt-0 lg:ml-4 pt-16 pb-32 pl-4 pr-4 lg:px-16 lg:py-16 flex flex-col items-start justify-center text-left rounded-tr-[200px] shadow-xl">
          <div className="space-y-4 text-black">{children}</div>
          {content}
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
