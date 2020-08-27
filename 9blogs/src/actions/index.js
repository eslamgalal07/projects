import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//combo AC  call two AC fetchPosts , fetchUsers
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // call AC get posts and set it in state
  await dispatch(fetchPosts());
  //make array of userIds
  let userIds = getState().posts.map((post) => post.userId);
  //remove dublication from array
  let uniqUserIds = [...new Set(userIds)];
  //call AC get users and set it in state
  uniqUserIds.forEach((id) => dispatch(fetchUser(id)));
};

// async AC get posts and set it in state
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  return dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// async AC get users and set it in state
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  return dispatch({ type: "FETCH_USER", payload: response.data });
};
