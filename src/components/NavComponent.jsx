import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const NavComponent = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.addEventListener("scroll", changeColor);
    };
  });

  return (
    <header
      className={
        color
          ? "shadow-[0px_2px_6px_0px_rgba(0,0,0,0.16)] duration-300 fixed w-full padding-x py-8 z-20 top-0 start-0 bg-white"
          : "padding-x py-6 fixed z-10 w-full duration-300"
      }>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavComponent;
