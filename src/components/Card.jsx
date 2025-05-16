import Heading2 from "./Heading2";

export default function Card({
  heading,
  headingStyle,
  bgColor,
  children,
}) {
  return (
    <div
      // check container documentation
      className={`${bgColor} max-w-screen-lg container-xl lg:mx-auto mx-4 my-16 px-8 py-12 sm:p-32 rounded-xl`}
    >
      <Heading2 text={heading} style={headingStyle} />
      <div className="space-y-4 text-white">{children}</div>
    </div>
  );
}
