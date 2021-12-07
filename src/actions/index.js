import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    const result = jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: result });
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