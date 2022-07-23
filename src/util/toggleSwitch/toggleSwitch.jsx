import React from "react";
import "./toggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
