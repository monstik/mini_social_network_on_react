import React from "react";
import Style from "./Users.module.css";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {

    let users = props.users.map(u => <UserItem/>);

    return (
        <div>
            {users}
        </div>
    );
};

export default Users;