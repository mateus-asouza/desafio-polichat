import React from "react";
import "./messageBaloon.css";

const MessageBaloon = (message) => {
  return (
    <>
      <div
        className="messageBaloon-container"
        style={
          message.sender === "i"
            ? {
                alignSelf: "flex-end",
                justifyContent: "flex-end",
                padding: "0 15px 0 5px",
              }
            : {}
        }
      >
        <div
          className={
            message.sender === "i" ? "baloon-head-reverse" : "baloon-head"
          }
          style={
            message.sender === "i"
              ? {
                  borderLeft: "10px solid #066069",
                  borderTop: "10px solid #066069",
                }
              : {}
          }
        ></div>
        <div
          className="baloon-body"
          style={
            message.sender === "i"
              ? {
                  marginLeft: "0",
                  marginRight: "15px",
                  backgroundColor: "#066069",
                }
              : {}
          }
        >
          <p> {message.message}</p>
        </div>
      </div>
    </>
  );
};

export default MessageBaloon;
