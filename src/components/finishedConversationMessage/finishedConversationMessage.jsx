import React from "react";
import "./finishedConversationMessage.css";

const FinishedConversationMessage = ({ name }) => {
  const date = new Date();
  return (
    <div className="finished-message-container">
      <p>
        {" "}
        Esta conversa foi finalizada por {name} em {date.toLocaleDateString()}{" "}
        às {date.getHours()}:{date.getMinutes()}
      </p>
    </div>
  );
};

export default FinishedConversationMessage;
