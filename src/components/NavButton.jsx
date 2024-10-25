import React from "react";

export default function NavButton({ text }) {
  return (
    <>
      <div className="text-2xl decoration-4 hover:underline underline-offset-4 decoration-blue-700">
        <a href="#">{text}</a>
      </div>
    </>
  );
}
