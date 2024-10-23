import React from "react";

export default function NavButton({ text }) {
  return (
    <>
      <div className="text-xl hover:underline">
        <a href="#">{text}</a>
      </div>
    </>
  );
}
