import React from "react";
import Style from "./Post.module.css"


const Post = (props) => {
    return(
        <div className={Style.item}>
            <img src={props.img} alt="картинка"/>
            post1
        </div>
    );
};

export default Post;