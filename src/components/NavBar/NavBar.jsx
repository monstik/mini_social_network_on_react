import React from "react";
import Style from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
            <nav className={Style.navBar}>
                <div className={Style.item}>
                    <NavLink to="/profile" activeClassName={Style.active}>Profile</NavLink>
                </div>
                <div className={Style.item}>
                    <NavLink to="/dialogs" activeClassName={Style.active}>Сообщения</NavLink>
                </div>
                <div className={Style.item}>
                    <NavLink to="/friends" activeClassName={Style.active}>Друзя</NavLink>
                </div>
            </nav>
    );
};

export default NavBar;