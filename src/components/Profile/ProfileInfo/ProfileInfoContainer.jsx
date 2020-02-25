import React from "react";
import ProfileInfo from "./ProfileInfo";
import {addPostCreator, updateNewPostSrcCreator, updateNewPostTextCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return{
      newPostText: state.profilePage.newPostText,
      newPostSrc: state.profilePage.newPostSrc,
  }
};

let mapDispatchToProps = (dispatch) => {
  return{
      addPost: () => {
        dispatch(addPostCreator());
      },
      updatePostText: (text) => {
          dispatch(updateNewPostTextCreator(text));
      },
      updatePostSrc: (src) => {
          dispatch(updateNewPostSrcCreator(src));
      }
  }
};

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;