import React from "react";
import Style from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={Style.item}>
            <img src={props.img} alt="картинка"/>
            <div>
                post{props.id}
            </div>
            <div>
                Описание: {props.description}
            </div>

        </div>
    );
};

export default Post;