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
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const upadatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.post = upadatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFollowers, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
