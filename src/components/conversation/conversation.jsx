import React from "react";
import { BsPerson } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import DateComponent from "../../util/dateComponent/dateComponent";
import DefaultIcon from "../defaultIcon/defaultIcon";
import PhotoIcon from "../photoIcon/photoIcon";
import "./conversation.css";

const Conversation = ({ conversation, handleConversationClick }) => {
  const message = conversation.messages.map((message) => {
    return message.message;
  });
  const messageSplited = message[0].split(" ");
  return (
    <div
      className="conversation-container"
      style={
        conversation.onFocus
          ? {
              backgroundColor: "#232c3d",
              borderLeft: "6px solid #0f99a7",
              borderTop: "1px solid #3f4a5e",
              borderRight: "1px solid #3f4a5e",
              borderBottom: "1px solid #3f4a5e",
            }
          : {}
      }

      // onClick={() => handleConversationClick(conversation.id)}
    >
      <div
        className="messageInfo"
        onClick={() => handleConversationClick(conversation.id)}
      >
        <PhotoIcon />
        <div>
          <p>{conversation.name}...</p>
          <p>
            {messageSplited[0]} {messageSplited[1]}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0",
              marginRight: "5%",
              width: "100%",
            }}
          >
            <BsPerson />
            <p style={{ fontSize: "10px", fontWeight: "200" }}>
              {conversation.name}
            </p>
          </div>
        </div>
      </div>
      <div className="messageInfoDate">
        <DateComponent />
        <FaWhatsappSquare />
      </div>

      {/* <DefaultIcon /> */}
    </div>
  );
};

export default Conversation;
