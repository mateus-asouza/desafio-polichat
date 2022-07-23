import React, { useState } from "react";
import { BsWhatsapp, BsMegaphone, BsFillMoonFill } from "react-icons/bs";
import { FaRocketchat } from "react-icons/fa";
import { SiAtom } from "react-icons/si";
import { FiUser } from "react-icons/fi";
import { IoMdGlobe } from "react-icons/io";
import { ImSun } from "react-icons/im";
import { RiMoonFill } from "react-icons/ri";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import PoliLogo from "../../util/logos/poliLogo";
import Button from "../button/button";
import PhotoIconInitials from "../photoIconInitials/photoIconInitials";

import "./navbar.css";
import ToggleSwitch from "../../util/toggleSwitch/toggleSwitch";

const CustomNavbar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="navbar-container">
        <Navbar {...args} expand="md" className="navbar">
          <NavItem className="logo">
            <PoliLogo />
          </NavItem>
          <NavbarToggler onClick={toggle} />
          <Collapse navbar isOpen={isOpen}>
            <Nav className="me-auto" navbar>
              <NavItem className="navbar-navItem">
                <FaRocketchat className="menu-icons" />
                <NavLink
                  href=""
                  style={{
                    paddingLeft: "2px",
                    fontWeight: "bold",
                    paddingTop: "10px",
                  }}
                >
                  POLICHAT
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
                className="dropdown-list-navbar"
                id="dropdown-poli"
              >
                <PhotoIconInitials name={"Poli "} />
                <p>Poli</p>
                <DropdownToggle caret nav></DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown
                inNavbar
                nav
                className="dropdown-list-navbar"
              >
                <BsWhatsapp id="bs-whatsapp-icon" />
                <div id="canal" style={{ fontSize: "12px" }}>
                  <p>Canal Canal SDR 0001</p>
                  <div>
                    <p>
                      <strong
                        style={{
                          color: "#fdcf58",
                          fontSize: "18px",
                        }}
                      >
                        90
                      </strong>
                    </p>
                    <p style={{ paddingTop: "3px", color: "#1e9199" }}>
                      <strong style={{ fontSize: "15px" }}>\1000</strong>{" "}
                      Contatos-dia
                    </p>
                  </div>
                </div>

                <DropdownToggle caret nav></DropdownToggle>
              </UncontrolledDropdown>
              <NavItem id="button-indique-ganhe">
                <Button>Indique e ganhe</Button>
              </NavItem>
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
                  <PhotoIconInitials name={"5 "} />
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default CustomNavbar;
