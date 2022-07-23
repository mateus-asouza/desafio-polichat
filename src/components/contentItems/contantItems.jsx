import React, { useState } from "react";
import { Input, NavItem } from "reactstrap";
import Button from "../button/button";
import { FaMicrophone, FaRocketchat, FaSmile } from "react-icons/fa";
import { BsChatLeftText, BsPaperclip } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPhoneIphone, MdTextFields } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

import ConversationList from "../conversationList/conversationList";
import MessageBaloon from "../messageBaloon/messageBaloon";
import SearchBar from "../searchBar/searchBar";
import PhotoIcon from "../photoIcon/photoIcon";
import "./contantItems.css";
import DefaultIcon from "../defaultIcon/defaultIcon";
import FinishedConversationMessage from "../finishedConversationMessage/finishedConversationMessage";
import PhotoIconInitials from "../photoIconInitials/photoIconInitials";
import { VscNotebook } from "react-icons/vsc";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

const ContantItems = () => {
  const [focusConversation, setFocusConversation] = useState({
    id: 0,
    name: "Mateus Alves",
    lastMessageDate: "",
    messages: [
      {
        sender: "i",
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
           Ut enim ad minim veniam, quis nostrud exercitation ullamco
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
           Ut enim ad minim veniam, quis nostrud exercitation ullamco
           Ut enim ad minim veniam, quis nostrud exercitation ullamco
           `,
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
    whoSendLastMessge: "",
    statusConversation: 0,
    messageOrigin: "",
    img: "",
    onFocus: false,
  });

  const hanldeShowMessagesOfConversation = (conversation) => {
    setFocusConversation(conversation);
  };
  return (
    <>
      <div className="containt menssages">
        <div className="containt-header">
          <div className="source-items">
            <div className="source-item">
              <NavItem className="navItem">
                <FaRocketchat className="menu-icons" />
              </NavItem>
            </div>
            <div className="source-item">
              <NavItem className="navItem">
                <BsChatLeftText className="menu-icons" />
              </NavItem>
            </div>
            <div className="source-item">
              <NavItem className="navItem">
                <GoMail className="menu-icons" />
              </NavItem>
            </div>
          </div>
          <div className="container-searcBar">
            <Button>
              <FiFilter />
            </Button>
            <Button>
              <BiUser />
            </Button>
            <SearchBar />
          </div>
        </div>

        <div className="conversationList-container">
          <ConversationList
            hanldeShowMessagesOfConversation={hanldeShowMessagesOfConversation}
          />
        </div>
      </div>
      <div className="containt chat">
        <div className="message-info">
          <div>
            <PhotoIcon />
            <h4>Mateus Alves</h4>
          </div>
          <div>
            <PhotoIconInitials name={focusConversation.name} />
            <BsThreeDotsVertical id="BsThreeDotsVertical" />
          </div>
        </div>
        <div className="messages-container">
          {focusConversation.messages.map((message) => (
            <>
              {message.message === "finished conversation" ? (
                <FinishedConversationMessage name={focusConversation.name} />
              ) : (
                <div
                  className="messageStructure"
                  style={
                    message.sender === "i"
                      ? { flexDirection: "row-reverse", marginRight: "10px" }
                      : {}
                  }
                >
                  <PhotoIcon />
                  <MessageBaloon
                    message={message.message}
                    sender={message.sender}
                  />
                  <DefaultIcon>
                    <FaWhatsappSquare className="whatsapp-icon" />
                  </DefaultIcon>
                </div>
              )}
            </>
          ))}
        </div>
        <div className="messages-textArea">
          <DefaultIcon>
            <FaWhatsappSquare className="whatsapp-icon" />
          </DefaultIcon>
          <Input className="textArea" placeholder="Aa" />
        </div>
        <div className="toolbar-container">
          <div className="toolbar">
            <DefaultIcon>
              <MdTextFields />
            </DefaultIcon>
            <DefaultIcon>
              <MdPhoneIphone />
            </DefaultIcon>
          </div>
          <div className="toolbar-right">
            <DefaultIcon>
              <VscNotebook />
            </DefaultIcon>
            <DefaultIcon>
              <BsPaperclip />
            </DefaultIcon>
            <DefaultIcon>
              <IoIosRocket />
            </DefaultIcon>
            <DefaultIcon>
              <FaSmile />
            </DefaultIcon>
            <DefaultIcon>
              <FaMicrophone />
            </DefaultIcon>
            <DefaultIcon>
              <RiSendPlaneFill />
            </DefaultIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContantItems;
