import React from "react";
import Style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return(
        <div>

            <ProfileInfo dispatch={props.dispatch}
                         newPostText={props.state.newPostText}
                         newPostSrc={props.state.newPostSrc}/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};


export default Profile;