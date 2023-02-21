import { useState } from "react";
import { navLinks } from "../constants/index";

function NavBar() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="flex flex-row justify-between items-center sticky top-0 z-30">
      <div className="text-white text-2xl sm:text-lg font-lato font-bold relative">
        HELLO VISITOR!
      </div>

      <ul className="list-none flex flex-row">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-lato font-normal text-base text-white ml-[30px] cursor-pointer ${
              active === nav.title ? "text-accent" : "text-white"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
