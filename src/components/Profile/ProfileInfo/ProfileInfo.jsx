import React from "react";
import Style from "./ProfileInfo.module.css";
import {addPostCreator, updateNewPostSrcCreator, updateNewPostTextCreator} from "../../../redux/profile_reducer";

class ProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.OnChangePostText = this.OnChangePostText.bind(this);
        this.OnChangePostSrc = this.OnChangePostSrc.bind(this);
    }




    test(event) {
        event.preventDefault();
        this.props.dispatch(addPostCreator());
    };

    OnChangePostText(event) {
        this.props.dispatch(updateNewPostTextCreator(event.target.value));
    };

    OnChangePostSrc(event) {
        this.props.dispatch(updateNewPostSrcCreator(event.target.value));
    };


    render() {

        return (
            <div className={Style.profileInfo}>
                <h2 className={Style.profileInfo}>Profile</h2>

                <form onSubmit={this.test}>
                    <div>
                        <label>
                            Описание:
                            <input type="text" onChange={this.OnChangePostText} value={this.props.newPostText}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Путь к картинке:
                            <input type="text" onChange={this.OnChangePostSrc} value={this.props.newPostSrc}/>
                        </label>
                    </div>

                    <button>Добавить пост</button>
                </form>

            </div>
        );
    };
};


export default ProfileInfo;