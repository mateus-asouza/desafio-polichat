import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import "./photoIconInitials.css";

const PhotoIconInitials = ({ name }) => {
  console.log(name);
  const fullName = name.split(" ");
  const firstName = fullName.shift();
  const lastName = fullName.shift();
  return (
    <div className="photoIconInitials-container">
      <p>
        {firstName[0]}
        {lastName[0]}
      </p>
    </div>
  );
};

export default PhotoIconInitials;
