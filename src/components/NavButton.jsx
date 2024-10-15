import React from "react";

export default function NavButton({ text }) {
  return (
    <>
      <div className="text-xl hover:underline">
        <li>
          <a href="#">{text}</a>
        </li>
      </div>
    </>
  );
}
