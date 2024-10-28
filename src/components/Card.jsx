export default function Card({ heading, paragraph }) {
  return (
    <>
      <div className="container-2xl bg-blue-600 p-12 sm:p-32 mx-8 my-24 lg:mx-48 xl:mx-96">
        <h1 className="text-4xl text-white font-bold mb-4">{heading}</h1>
        <p className="text-white">{paragraph}</p>
      </div>
    </>
  );
}
