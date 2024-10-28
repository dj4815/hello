import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
export default function Card({ heading, headingColor, paragraph, paragraphColor }) {
  return (
    <>
      <div className="container-2xl bg-blue-600 p-12 sm:p-32 mx-8 my-24 lg:mx-48 xl:mx-96">
        <Heading2 text={heading} headingColor={headingColor} />
        <Paragraph text={paragraph} paragraphColor={paragraphColor} />
      </div>
    </>
  );
}
