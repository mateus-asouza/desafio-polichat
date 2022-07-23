import React from "react";
import { Nav, NavItem } from "reactstrap";
import { BsHouseDoor } from "react-icons/bs";
import { FaRocketchat } from "react-icons/fa";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";

import "./lateralMenu.css";
import PhotoIcon from "../photoIcon/photoIcon";
import PhotoIconInitials from "../photoIconInitials/photoIconInitials";

const LateralManu = () => {
  return (
    <div className="container">
      <div className="menu-features">
        <Nav vertical>
          <NavItem className="navItem">
            <BsHouseDoor className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <FaRocketchat style={{ color: "#377a86" }} className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <BiPieChartAlt2 className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <FaRegBuilding className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <BsGear className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <TbCurrencyDollar className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <VscTools className="menu-icons" />
          </NavItem>
        </Nav>
      </div>
      <div>
        <Nav vertical>
          <NavItem className="navItem">
            <BsQuestionCircle className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <PhotoIconInitials
              name="mateus alves"
              className="menu-photo-icon"
            />
          </NavItem>
          <NavItem className="navItem">
            <MdDoubleArrow className="menu-icons" />
          </NavItem>
          <NavItem className="navItem">
            <div className="version">
              <p>Versão</p>
              <p>v0.15.182</p>
            </div>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default LateralManu;
