import React from "react";
import LogoPoli from "../logoPoli/logoPoli";
import NavBarMenuIconsMobile from "../navBarMenuIconsMobile/navBarMenuIconsMobile";
import PolichatIconMobile from "../polichatIconMobile/polichatIconMobile";
import "./navBarMobile.css";

const NavBarMobile = () => {
  return (
    <div className="navBarMobile-container">
      <LogoPoli />
      <PolichatIconMobile />
      <NavBarMenuIconsMobile />
    </div>
  );
};
export default NavBarMobile;
