const SET_USERS = "SET-USERS";


let initialState = {
  users: [
      {id: 1, fullName: "Дмитрий", location: {city: "Киев", country: "Россия"}, state: 'online', avatar: 'src'},
      {id: 2, fullName: "Даня", location: {city: "Москва", country: "Россия"}, state: 'online', avatar: 'src'},
      {id: 3, fullName: "Катя", location: {city: "Минск", country: "Россия"}, state: 'offline', avatar: 'src'},
  ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return state;
        default:
            return state;
    }


};

export const setUsersAC = () => ({type:SET_USERS});

export default usersReducer;