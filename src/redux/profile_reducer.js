const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_POST_SRC = "UPDATE-NEW-POST-SRC";


const profileReducer = (state, action) => {


    let addPost = () => {
        let newPost = {
            id: Object.keys(state.posts).length + 1,
            src: state.newPostSrc,
            description: state.newPostText,
        };
        state.posts.unshift(newPost);
        state.newPostText = '';
        state.newPostSrc = '';

    };

    let deletePost = (id) => {

     //   console.log( state.posts.find(post => post.id === id));

        let index = state.posts.indexOf(state.posts.find(post => post.id === id));
        state.posts.splice(index, 1);
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
        case DELETE_POST:
            deletePost(action.id);
            break;
        default:
            break;
    }


    return state;
};


export const addPostCreator = () => ({type: ADD_POST});
export const deletePostCreator = (id) => ({type: DELETE_POST, id: id});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewPostSrcCreator = (src) => ({type: UPDATE_NEW_POST_SRC, newSrc: src});


export default profileReducer;