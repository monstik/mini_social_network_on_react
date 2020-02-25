import React from "react";
import Style from "./Post.module.css"


const Post = (props) => {
    let onClickDelete = () => {
        props.deletePost(props.id);
    };


    return (
        <div className={Style.item}>
            <div className={Style.deleteButton}>
                <button onClick={onClickDelete}>+</button>
            </div>
            <div >
                <img src={props.img} alt="картинка"/>
            </div>
            <div className={Style.descriptionBlock}>
                <div>
                    post{props.id}
                </div>
                <div>
                    Описание: {props.description}
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default Post;