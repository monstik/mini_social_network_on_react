import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _state: {
        profilePage: {
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

        },
        dialogsPage: {
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
        },

    },

    getState() {
        return this._state;
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },

    _callSubscriber() {

    },


};

export default store;