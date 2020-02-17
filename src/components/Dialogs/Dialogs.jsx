import React from "react";
import Style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return(
        <div className={Style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {

    return(
        <div className={Style.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: "Dania"},
        {id:2, name: "Ilona"},
        {id:3, name: "Katya"},
        {id:4, name: "Nastya"},
        {id:5, name: "Diana"},
        {id:6, name: "Mask"},
    ];

    let messages = [
        {message: "Hello"},
        {message: "Hi"},
        {message: "How are you?"},
        {message: "I dont know"},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

  return(
      <div className={Style.dialogs}>
        <div className={Style.dialogsItem}>
            {dialogsElements}
        </div>
          <div className={Style.messages}>
              {messagesElements}
          </div>

      </div>
  );

};

export default Dialogs;