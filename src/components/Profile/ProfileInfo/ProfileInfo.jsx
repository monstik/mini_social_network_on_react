import React from "react";
import Style from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {


    let onAddPost = (event) => {
        event.preventDefault();
        props.addPost();
    };

    let onChangePostText = (event) => {
        props.updatePostText(event.target.value);
    };

    let onChangePostSrc = (event) => {
        props.updatePostSrc(event.target.value);
    };

    return (
        <div className={Style.profileInfo}>
            <h2 className={Style.profileInfo}>Profile</h2>

            <form onSubmit={onAddPost}>
                <div>
                    <label>
                        Описание:
                        <input type="text" onChange={onChangePostText} value={props.newPostText}/>
                    </label>
                </div>

                <div>
                    <label>
                        Путь к картинке:
                        <input type="text" onChange={onChangePostSrc} value={props.newPostSrc}/>
                    </label>
                </div>

                <button>Добавить пост</button>
            </form>

        </div>
    );

};


export default ProfileInfo;