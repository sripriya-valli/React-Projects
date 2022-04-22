import { ADD_TO_FAVOURITE, DELETE_USER, UPDATE_USER, VIEW_USER } from "./ActionType";

export const deleteUser = (userId) => {
    return {
        type : DELETE_USER,
        payload : userId
    }
}

export const editUser = (users) => {
    return {
        type : UPDATE_USER,
        payload : users
    }
}

export const viewUser = (user) => {
    return {
        type : VIEW_USER,
        payload : user
    }
}

export const addToFavorite = (users) => {
    return {
        type : ADD_TO_FAVOURITE,
        payload : users
    }
}