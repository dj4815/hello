import Heading1 from "./Heading1";

export default function Image({ image, heading1Style, heading1 }) {
  return (
    <div className="relative w-full h-full object-cover overflow-hidden mb-4">
      <img
        src={image}
        className="w-full h-full object-cover object-center"
        alt="background"
      />
      <Heading1 text={heading1} style={heading1Style} />
    </div>
  );
}
