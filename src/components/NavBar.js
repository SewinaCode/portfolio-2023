import { useState } from "react";
import { navLinks } from "../constants/index";
import styles from "../constants/style";

function NavBar() {
  const [active, setActive] = useState("Home");
  return (
    <nav id="home" className="flex flex-row justify-between items-center py-7">
      <div className={`text-white ${styles.fontSize} ${styles.latoBold}`}>
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
