const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


const dialogsReducer = (state, action) => {

    let addMessage = () => {
        let message = {
            message: state.newMessageText,
        };
        state.messages.push(message);
        state.newMessageText = '';
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            break;
        case ADD_MESSAGE:
            addMessage();
            break;
        default:
            break;
    }
    return state;
};


export const updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message});
export const addMessageCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer;