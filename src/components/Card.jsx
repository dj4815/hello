import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
export default function Card({
  heading,
  headingStyle,
  paragraph,
  paragraphColor,
  bgColor,
}) {
  return (
    <div
      // check container documentation
      className={`${bgColor} max-w-screen-xl container-xl lg:mx-auto mx-4 my-16 px-8 py-12 sm:p-32 rounded-xl`}
    >
      <Heading2 text={heading} style={headingStyle} />
      <Paragraph text={paragraph} paragraphColor={paragraphColor} />
    </div>
  );
}
