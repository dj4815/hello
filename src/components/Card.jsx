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
      className={`${bgColor} container-2xl px-8 py-12 sm:p-32 mx-8 my-16 lg:mx-48 xl:mx-96 rounded-xl`}
    >
      <Heading2 text={heading} style={headingStyle} />
      <Paragraph text={paragraph} paragraphColor={paragraphColor} />
    </div>
  );
}
