import React from "react";
import Style from "./Header.module.css"


const Header = (props) => {
    return(
      <div className={Style.header}>
          <h1>Tests</h1>
      </div>
    );
};

export default Header;