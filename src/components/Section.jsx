import ButtonMain from "./ButtonMain";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";

export default function Section({buttonStyle}) {
  return (
    <div className="container-2xl bg-slate-50 px-12 sm:px-32 xl:px-96 py-24 lg:py-48">
      <Heading2 text="I am Section One." />
      <Paragraph
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga."
      />
      {buttonStyle}
    </div>
  );
}
