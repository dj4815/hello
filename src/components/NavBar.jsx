import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <>
      <ul className="flex justify-around px-1 py-8 border-b-2">
        <NavButton text="Projects" />
        <NavButton text="Resume" />
        <NavButton text="Contact" />
      </ul>
    </>
  );
}
