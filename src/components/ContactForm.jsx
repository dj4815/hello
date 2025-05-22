import { useState } from "react";
import HeroImage from "./HeroImage";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateName = (evt) => setName(evt.target.value);
  const updateEmail = (evt) => setEmail(evt.target.value);

  return (
    <>
      <HeroImage
        image="./assets/crystals.jpg"
        heading1="Contact"
        heading1Style="primaryBg"
      />

      <div className="flex items-center justify-center pb-8 pt-8 bg-slate-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={updateName}
            id="name"
            className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded"
          />
          <label htmlFor="email">Enter your e-mail address:</label>
          <input
            type="text"
            placeholder="E-mail address"
            value={email}
            onChange={updateEmail}
            id="email"
            className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            className="relative flex items-center justify-center overflow-hidden rounded-full text-lg xl:text-base py-4 px-6 md:py-2 mt-8 w-full lg:max-w-md mx-auto bg-blue-700 text-white font-semibold 
              hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg 
              active:bg-blue-800 active:translate-y-0 active:shadow-md 
              transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
