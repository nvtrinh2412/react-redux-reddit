import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../pages/Posts/postSlice";
import userReducer from "../pages/Users/userSlice"
export default configureStore({
  reducer:{
    user: userReducer,
    post: postReducer
  }
})