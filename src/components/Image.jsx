export default function Image({ image, imageTitle }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden mb-4">
      <img
        src={image}
        className="w-full h-full object-cover object-center lg:w-[200%] lg:object-left"
        alt="background"
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold mx-4">
        {imageTitle}
      </h1>
    </div>
  );
}
