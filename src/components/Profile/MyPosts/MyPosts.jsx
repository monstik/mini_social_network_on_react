import React from "react";
import Post from "./Post/Post";
import Style from "./MyPosts.module.css"

const MyPosts = (props) => {

    return (
        <div className={Style.posts}>
            {props.posts.map(p => <Post img={p.src} id={p.id} description={p.description} dispatch={props.dispatch}/>)}
        </div>
    );
};

export default MyPosts;