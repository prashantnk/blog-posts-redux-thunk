import { combineReducers } from "redux";
import FetchPostsReducer from "./FetchPostsReducer";


export default combineReducers({
    posts: FetchPostsReducer
});