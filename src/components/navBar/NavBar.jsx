import React from "react";

import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const NavBar = () => {
  return (
    <nav className={`flex w-full bg-neutral-900 h-20 justify-between items-center px-[40px]`}>
      <Logo />
      <Menu />
    </nav>
  );
};

export default NavBar;
