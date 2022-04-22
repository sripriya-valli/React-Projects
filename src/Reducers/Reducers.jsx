import { ADD_TO_FAVOURITE, DELETE_USER, UPDATE_USER, VIEW_USER } from "../Actions/ActionType";
import { usersList } from "../UsersData";

usersList.forEach(object => {
    object.like = false;
});

const initialState = {
    users : usersList,
    user : []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_USER : return {
            ...state,
            users : state.users.filter((userInfo) => action.payload !== userInfo.id)
        }
        case UPDATE_USER : return {
            ...state,
            users : action.payload
        }
        case VIEW_USER : return {
            ...state,
            user : action.payload
        }
        case ADD_TO_FAVOURITE : return {
            ...state,
            users : action.payload
        }
        default : return state
    }
}
