import React from "react";
import Style from "./Dialogs.module.css"

const Dialogs = (props) => {
  return(
      <div className={Style.dialogs}>
        <div className={Style.dialogsItem}>
            <div className={Style.dialog + ' ' + Style.active}>Dania</div>
            <div className={Style.dialog}>Andrey</div>
            <div className={Style.dialog}>Sveta</div>
            <div className={Style.dialog}>Sasha</div>
            <div className={Style.dialog}>Victor</div>
        </div>
          <div className={Style.messages}>
              <div className={Style.message}>Hi</div>
              <div className={Style.message}>Привет</div>
              <div className={Style.message}>Как дела?</div>

          </div>

      </div>
  );

};

export default Dialogs;