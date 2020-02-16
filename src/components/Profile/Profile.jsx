import React from "react";
import Style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <h2>Profile</h2>
            <MyPosts/>
        </div>
    );
};


export default Profile;