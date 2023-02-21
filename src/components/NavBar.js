import { navLinks } from "../constants/index";

function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-white text-2xl sm:text-lg font-lato font-bold">
        HELLO VISITOR!
      </div>

      <ul className="list-none flex flex-row">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-lato font-normal text-base text-white ml-[30px] cursor-pointer"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
