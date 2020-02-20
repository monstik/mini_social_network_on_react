import React from "react";
import Style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);


    let onChangeMessageText = (event) => {
        props.dispatch(updateNewMessageCreator(event.target.value))
    };


    let onSubmitMessage = () => {
        props.dispatch(addMessageCreator())
    };

    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={Style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea value={props.state.newMessageText} onChange={onChangeMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSubmitMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default Dialogs;