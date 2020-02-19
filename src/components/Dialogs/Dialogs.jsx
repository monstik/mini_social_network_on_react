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



    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

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