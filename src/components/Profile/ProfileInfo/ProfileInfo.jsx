import React from "react";
import Style from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.OnChangePostText = this.OnChangePostText.bind(this);
        this.OnChangePostSrc = this.OnChangePostSrc.bind(this);
    }

    state = {
        src: '',
    };

    test(event) {
        event.preventDefault();
        this.props.addPost();
    };

    OnChangePostText(event) {
        this.props.updateNewPostText(event.target.value);
    };

    OnChangePostSrc(event) {
        this.props.updateNewPostSrc(event.target.value);
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