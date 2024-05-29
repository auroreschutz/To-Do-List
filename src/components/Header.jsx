import React from "react";
import { VscSparkleFilled } from "react-icons/vsc";
import { IconContext } from "react-icons";

function Header() {
  
    return (
      <div className="header">
        <IconContext.Provider value={{size: "2.5em", className: "coffee" }}><VscSparkleFilled /></IconContext.Provider>
        <h1>TO DO LIST</h1>
        
      </div>
    );
  }
  
  export default Header;