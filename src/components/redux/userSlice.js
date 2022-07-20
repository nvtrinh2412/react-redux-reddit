import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:{
    name: "Justin Nguyen",
    age: 20,
    about:"I'm a software engineer",
    avatarUrl: "https://i.redd.it/rrz3hmsxcll71.png",
  },
  reducers:{
    update: (state, action)=>{
      state.name = action.payload.name
      state.age = action.payload.age
      state.about = action.payload.about
      state.avatarUrl = action.payload.avatarUrl
    }
  },
})
export const {update}= userSlice.actions

export default userSlice.reducer