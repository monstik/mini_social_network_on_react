const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Dania"},
        {id: 2, name: "Ilona"},
        {id: 3, name: "Katya"},
        {id: 4, name: "Nastya"},
        {id: 5, name: "Diana"},
        {id: 6, name: "Mask"},
    ],
    messages: [
        {message: "Hello"},
        {message: "Hi"},
        {message: "How are you?"},
        {message: "I dont know"},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message,
            };
        case ADD_MESSAGE:
            let body = state.newMessageText;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageText: '',
            };
        default:
            return state;
    }


};


export const updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message});
export const addMessageCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer;