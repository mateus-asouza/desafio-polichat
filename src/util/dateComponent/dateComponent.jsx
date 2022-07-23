import React from "react";

const DateComponent = () => {
  const date = new Date();
  return <p>{date.toLocaleDateString()}</p>;
};

export default DateComponent;
