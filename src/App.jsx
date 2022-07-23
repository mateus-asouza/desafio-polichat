import React from "react";
import "../src/App.css";

import CustomNavbar from "../src/components/navbar/navbar";
import ContantItems from "./components/contentItems/contantItems";
import LateralManu from "./components/lateralMenu/lateralMenu";
import ConversationList from "./mobileComponents/conversationListMobile/conversationListMobile";
import LateralMenuMobile from "./mobileComponents/lateralMenuMobile/lateralMenuMobile";
import NavBarMobile from "./mobileComponents/navBarMobile/navBarMobile";

const ThemeContext = React.createContext("light");
const App = () => {
  return (
    <>
      <ThemeContext.Provider value="light">
        <div className="mobile">
          <div id="navBar-container">
            <NavBarMobile />
          </div>
          <div id="body-container">
            <div id="lateralMenu-container">
              <LateralMenuMobile />
            </div>
            <div id="content">
              <ConversationList />
              <ConversationList />
            </div>
          </div>
        </div>
        <CustomNavbar />
        <div className="content-container">
          <LateralManu />

          <div className="items-contaner">
            <ContantItems />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
