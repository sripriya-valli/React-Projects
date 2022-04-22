import { createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { rootReducer } from "./Reducers/RootReducer";

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));