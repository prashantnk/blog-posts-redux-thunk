import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';
export const fetchPosts = () => async dispatch => {
    const result = await jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: result.data });
}

export const fetchUser = (id) => async dispatch => {
    const result = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: result.data });
}

export const FetchPostsWithUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // const userIds = _.uniq(getState().posts.map((post) => post.userId));
    // userIds.forEach((id) => dispatch(fetchUser(id)));
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}




//  solution of overfetching using memoization 
// const temp = _.memoize(async (id, dispatch) => {
//     const result = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: result.data });
// });
// export const fetchUser = (id) => {
//     return ((dispatch) => {
//         temp(id, dispatch);
//     });
// }


























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