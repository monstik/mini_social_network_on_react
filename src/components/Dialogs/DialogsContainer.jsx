import React from "react";
import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return{
        changeMessage: (text) => {
            dispatch(updateNewMessageCreator(text))
        },
        addMessage : () => {
            dispatch(addMessageCreator())
        }

    };
};
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;