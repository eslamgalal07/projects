import axios from "axios";
export const KEY = "AIzaSyDlC5NmfkdFnsy2vwjTuzRmQCZwXoLP6xg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY
  }
});
