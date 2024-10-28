export default function Image({ image }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden mb-8 xl:rounded-xl">
      <img
        src={image}
        className="w-full h-full object-cover object-center lg:w-[200%] lg:object-left"
      />
    </div>
  );
}
