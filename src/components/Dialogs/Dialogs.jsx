import React from "react";
import Style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);


    let onChangeMessageText = (event) => {
        props.changeMessage(event.target.value);
    };


    let onSubmitMessage = () => {
        props.addMessage();
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
                        <textarea value={props.dialogsPage.newMessageText} onChange={onChangeMessageText}/>
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