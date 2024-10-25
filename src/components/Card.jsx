export default function Card({ heading, text }) {
  return (
    <>
      <div className="container-2xl bg-blue-600 p-12 sm:p-32 mx-12 my-24 lg:mx-48 xl:mx-96">
        <h1 className="text-5xl text-white font-bold mb-4">{heading}</h1>
        <p className="text-white">{text}</p>
      </div>
    </>
  );
}
