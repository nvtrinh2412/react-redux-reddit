import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Justin Nguyen",
    age: 20,
    about: "I'm a software engineer",
    avatarUrl: "https://i.redd.it/rrz3hmsxcll71.png",
    themeColor: "#ff9051",
    pending: false,
    error: false
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true
    },
    updateError: (state) => {
      state.error = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.error = false
      state.name = action.payload.name
      state.age = action.payload.age
      state.about = action.payload.about
      state.avatarUrl = action.payload.avatarUrl
      state.themeColor = action.payload.themeColor
    }
  },
})
export const { updateStart, updateSuccess,updateError} = userSlice.actions

export default userSlice.reducer