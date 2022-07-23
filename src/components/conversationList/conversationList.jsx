import React, { useState } from "react";
import Conversation from "../conversation/conversation";

import "./conversationList.css";

const ConversationList = ({ hanldeShowMessagesOfConversation }) => {
  const [conversationList, setConversationList] = useState([
    {
      id: 6,
      name: "Mateus Alves",
      lastMessageDate: "Há 10 horas",
      messages: [
        {
          sender: "i",
          message: "teste",
        },
        {
          sender: "i",
          message: "finished conversation",
        },
        {
          sender: "you",
          message: "oi",
        },
      ],
      whoSendLastMessge: "Mateus Alves",
      statusConversation: 1,
      messageOrigin: "whatsapp",
      img: "",
      onFocus: false,
    },
    {
      id: 5,
      name: "Mateus Alves",
      lastMessageDate: "17/07/2022",
      messages: [
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "i",
          message: "teste",
        },
        {
          sender: "i",
          message: "teste",
        },
        {
          sender: "i",
          message: "teste",
        },
        {
          sender: "i",
          message: "teste",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
        {
          sender: "you",
          message: "Bom dia",
        },
      ],
      whoSendLastMessge: "Mateus Alves",
      statusConversation: 1,
      messageOrigin: "chat",
      img: "",
      onFocus: false,
    },
    {
      id: 4,
      name: "Mateus Alves",
      lastMessageDate: "16/07/2022",
      messages: [
        {
          sender: "you",
          message: "Boa tarde",
        },
      ],
      whoSendLastMessge: "Mateus Alves",
      statusConversation: 1,
      messageOrigin: "email",
      img: "",
      onFocus: false,
    },
    {
      id: 3,
      name: "Mateus Alves",
      lastMessageDate: "15/07/2022",
      messages: [
        {
          sender: "you",
          message: "Pode me judar",
        },
      ],
      whoSendLastMessge: "Mateus Alves",
      statusConversation: 0,
      messageOrigin: "email",
      img: "",
      onFocus: false,
    },
    {
      id: 2,
      name: "Mateus Alves",
      lastMessageDate: "14/07/2022",
      messages: [
        {
          sender: "you",
          message: "Bom dia",
        },
      ],
      whoSendLastMessge: "Mateus Alves",
      statusConversation: 2,
      messageOrigin: "chat",
      img: "",
      onFocus: false,
    },
    {
      id: 1,
      name: "Mateus Alves",
      lastMessageDate: "10/07/2022",
      messages: [
        {
          sender: "you",
          message: "Ola",
        },
      ],
      whoSendLastMessge: "Mateus Alves",
      statusConversation: 0,
      messageOrigin: "whatsapp",
      img: "",
      onFocus: false,
    },
  ]);

  const handleConversationClick = (id) => {
    let focusConversation = {};
    const updateConversation = conversationList.map((conversation) => {
      if (conversation.id === id) return { ...conversation, onFocus: true };
      return { ...conversation, onFocus: false };
    });
    setConversationList(updateConversation);
    for (let i = 0; i <= conversationList.length; i++) {
      if (conversationList[i].id === id) {
        focusConversation = conversationList[i];
        break;
      }
    }
    hanldeShowMessagesOfConversation(focusConversation);
  };

  return (
    <>
      {conversationList.map((conversation) => (
        <Conversation
          conversation={conversation}
          handleConversationClick={handleConversationClick}
        />
      ))}
    </>
  );
};

export default ConversationList;
