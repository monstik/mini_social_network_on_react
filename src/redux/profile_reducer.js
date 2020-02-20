const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_POST_SRC = "UPDATE-NEW-POST-SRC";


const profileReducer = (state, action) => {


   let addPost = () => {
        let newPost = {
            id: 5,
            src: state.newPostSrc,
            description: state.newPostText,
        };
        state.posts.unshift(newPost);
        state.newPostText = '';
        state.newPostSrc = '';

    };


    switch (action.type) {
        case ADD_POST:
            addPost();
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        case UPDATE_NEW_POST_SRC:
            state.newPostSrc = action.newSrc;
            break;
        default:
            break;
    }



    return state;
};



export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewPostSrcCreator = (src) => ({type: UPDATE_NEW_POST_SRC, newSrc: src});


export default profileReducer;