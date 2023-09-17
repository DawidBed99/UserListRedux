import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export function getData() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailed(err.message));
      });
  };
}

export function getSingleData(id) {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch(getDataSuccess(res.data));
        // console.log(res.data);
      })
      .catch((err) => {
        dispatch(getDataFailed(err.message));
      });
  };
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.users = action.payload;
      // console.log(state.users);
      return state;
    },
    getDataFailed(state, action) {
      const message = action.payload;
      return alert(message + " - Problem ");
    },
  },
});
export const { getDataSuccess, getDataFailed } = userSlice.actions;
export default userSlice.reducer;
