import React from "react";
import { BsMegaphone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoMdGlobe } from "react-icons/io";
import { RiMoonFill } from "react-icons/ri";
import { SiAtom } from "react-icons/si";
import { NavItem } from "reactstrap";
import ToggleSwitch from "../../util/toggleSwitch/toggleSwitch";

import "./navBarMenuIconsMobile.css";

const NavBarMenuIconsMobile = () => {
  return (
    <div className="navBarMenuIconsMobile-container">
      <NavItem
        id="navitem-icons-navbar-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavItem
          id="navitem-icons-navbar"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SiAtom />
        </NavItem>
        <NavItem>
          <FiUser />
        </NavItem>
        <NavItem>
          <IoMdGlobe />
        </NavItem>
        <NavItem>
          <BsMegaphone />
        </NavItem>
        <NavItem>
          <ImSun />
        </NavItem>
        <NavItem style={{ margin: "0" }}>
          <ToggleSwitch />
        </NavItem>
        <NavItem>
          <RiMoonFill />
        </NavItem>
      </NavItem>
    </div>
  );
};
export default NavBarMenuIconsMobile;
