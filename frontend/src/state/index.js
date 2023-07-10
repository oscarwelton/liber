import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "Light",
  user: "null",
  token: "null",
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload.followers;
      } else {
        console.error("user followers non-existent");
      }
    }

  }
})
