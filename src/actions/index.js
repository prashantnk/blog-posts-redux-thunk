import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';
export const fetchPosts = () => async dispatch => {
    const result = await jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: result.data });
}

// export const fetchUser = (id) => async dispatch => {
//     const result = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: result.data });
// }


//  solution using memoization 
const temp = _.memoize(async (id, dispatch) => {
    const result = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: result.data });
});
export const fetchUser = (id) => {
    return ((dispatch) => {
        temp(id, dispatch);
    });
}


























// Could be used below
// export const fetchPosts = () => {
//     return {
//         type: "FETCH_POSTS",
//     };
// };
// export const fetchPosts = () => {
//     return async (dispatch, getState) => {
//         const result = jsonPlaceHolder.get("/posts");
//         const action = {
//             type: "FETCH_POSTS",
//         };
//         dispatch(action);
//     }
// }