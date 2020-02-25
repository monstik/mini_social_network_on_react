import MyPosts from "./MyPosts";
import React from "react";
import {deletePostCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return{
      posts: state.profilePage.posts,
  }
};

let mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => {
            dispatch(deletePostCreator(id));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;