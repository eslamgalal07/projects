import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zM_HypvO6pAhNklH1eZ2yaP-cCs7wkflMO3GrtRnRXc",
  },
});
