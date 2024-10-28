import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
export default function Card({
  heading,
  headingColor,
  paragraph,
  paragraphColor,
}) {
  return (
    <>
      <div className="container-2xl bg-gradient-to-b from-blue-700 to-cyan-500 px-8 py-12 sm:p-32 mx-4 my-24 lg:mx-48 xl:mx-96 rounded-xl">
        <Heading2 text={heading} headingColor={headingColor} />
        <Paragraph text={paragraph} paragraphColor={paragraphColor} />
      </div>
    </>
  );
}
