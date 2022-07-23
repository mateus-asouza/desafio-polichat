import React from "react";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BsGear, BsHouseDoor, BsQuestionCircle } from "react-icons/bs";
import { FaRegBuilding, FaRocketchat } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import PhotoIconInitials from "../../components/photoIconInitials/photoIconInitials";
import "./lateralMenuMobile.css";

const LateralMenuMobile = () => {
  return (
    <div className="lateralMenuMobile-container">
      <div style={{ width: "100%", height: "70%" }}>
        <div
          style={{
            paddingTop: "30%",
            dispay: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <BsHouseDoor />
          <FaRocketchat />
          <BiPieChartAlt2 />
          <FaRegBuilding />
          <BsGear />
          <TbCurrencyDollar />
          <VscTools />
        </div>

        <div
          style={{
            paddingTop: "80%",
            dispay: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <BsQuestionCircle />
          <PhotoIconInitials name="Mateus Alves" />
          <MdDoubleArrow />

          <p style={{ color: "white", fontSize: "8px", textAlign: "center" }}>
            Versão v0.15.182
          </p>
        </div>
      </div>
    </div>
  );
};
export default LateralMenuMobile;
