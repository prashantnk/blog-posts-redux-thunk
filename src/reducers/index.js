import { combineReducers } from "redux";
import FetchPostsReducer from "./FetchPostsReducer";
import FetchUserReducer from "./FetchUserReducer";


export default combineReducers({
    posts: FetchPostsReducer,
    users: FetchUserReducer
});