import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <>
      <ul className="flex justify-around xl:px-96 py-4 border-b-2">
        <li>
          <NavButton text="Projects" />
        </li>
        <li>
          <NavButton text="Resume" />
        </li>
        <li>
          <NavButton text="Contact" />
        </li>
      </ul>
    </>
  );
}
