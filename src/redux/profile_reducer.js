const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_POST_SRC = "UPDATE-NEW-POST-SRC";

let initialState = {
    posts: [
        {
            id: 1,
            src: "https://s1.1zoom.ru/b5050/460/Tanks_441653_3840x2400.jpg",
            description: ''
        },
        {
            id: 2,
            src: "https://im0-tub-ua.yandex.net/i?id=8b5cd3e1b249a8fb5603cd8e63db9165&n=13",
            description: ''
        },
        {
            id: 3,
            src: "https://pbs.twimg.com/media/EFJA1rPWwAARCn4.jpg",
            description: ''
        },
        {
            id: 4,
            src: "https://avatars.mds.yandex.net/get-pdb/1870806/26358703-dca3-4f2b-a96f-56926fef5a21/s1200",
            description: ''
        },
        {
            id: 5,
            src: "https://avatars.mds.yandex.net/get-zen_doc/1704908/pub_5da30ee7a3f6e400b272fe3f_5da3106c79c26e6477406ac6/scale_1200",
            description: ''
        },
    ],
    newPostText: '',
    newPostSrc: '',
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: Object.keys(state.posts).length + 1,
                src: state.newPostSrc,
                description: state.newPostText,
            };

            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
                newPostSrc: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText,};

        case UPDATE_NEW_POST_SRC:
            return {...state, newPostSrc: action.newSrc};

        case DELETE_POST:
            let index = state.posts.indexOf(state.posts.find(post => post.id === action.id));
            let posts = [...state.posts];
            posts.splice(index, 1);
            return {
                ...state,
                posts: posts,
            };

        default:
            return state;
    }

};


export const addPostCreator = () => ({type: ADD_POST});
export const deletePostCreator = (id) => ({type: DELETE_POST, id: id});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewPostSrcCreator = (src) => ({type: UPDATE_NEW_POST_SRC, newSrc: src});


export default profileReducer;