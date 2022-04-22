import { combineReducers } from "redux";
import { deleteReducer, usersReducer } from "./Reducers";

export const rootReducer = combineReducers({
    usersReducer : usersReducer,
})