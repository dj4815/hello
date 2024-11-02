import { Link } from "react-router-dom";
import NavButton from "./NavButton";


export default function NavBar() {
  return (
    <>
      <ul className="flex justify-around xl:px-96 py-4 border-b-2">
        <li>
          <Link to="/hello/">
            <NavButton text="Home" />
          </Link>
        </li>
        <li>
          <Link to="/hello/projects">
            <NavButton text="Projects" />
          </Link>
        </li>
        <li>
          <Link to="/hello/resume">
            <NavButton text="Resume" />
          </Link>
        </li>
        <li>
          <Link to="/hello/contact">
            <NavButton text="Contact" />
          </Link>
        </li>
      </ul>
    </>
  );
}
