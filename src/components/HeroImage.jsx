import Heading1 from "./Heading1";

export default function HeroImage({ image, heading1Style, heading1 }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden mb-0">
      <img
        src={image}
        className="w-full h-full object-cover object-center lg:w-[200%] lg:object-left"
        alt="background"
      />
      <Heading1 text={heading1} style={heading1Style} />
    </div>
  );
}
