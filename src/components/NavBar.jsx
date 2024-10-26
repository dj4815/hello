import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <>
      <ul className="flex justify-around xl:px-80 py-4 xl:py-8 border-b-2 2xl:mb-12">
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
