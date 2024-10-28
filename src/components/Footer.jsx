import React from "react";

export default function Footer() {
  return (
    <div className="container-2xl text-center text-lg bg-white p-12 border-t-2 2xl:mt-12">
      <p>Made with React and Tailwind CSS</p>
      <p>
        <a
          className="underline underline-offset-4 decoration-blue-700 decoration-2"
          href="https://github.com/dj4815"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          className="underline underline-offset-4 decoration-blue-700 decoration-2"
          href="www.linkedin.com/in/dj4815"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
