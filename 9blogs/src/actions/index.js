import jsonPlaceHolder from "../apis/jsonPlaceHolder";
export const fetchPost = () => async (dispatch, getState) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
export const fetchUser = (Id) => async (dispatch, getState) => {
  const response = await jsonPlaceHolder.get(`/users/${Id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
