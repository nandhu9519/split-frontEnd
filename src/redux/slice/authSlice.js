import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require("dotenv").config();

const BASEURL = process.env.REACT_APP_BASE_URL;
const initialState = {
  loggedInUser: null,
  newUser: null,
  error: null,
};

export const createUser = createAsyncThunk("/user/signUp", async (data) => {
  try {
    const response = await axios.post(`${BASEURL}/user/signup`, {
      username: data.username,
      password: data.password,
      email: data.email,
    });
    return response;
  } catch (err) {
    return err.response;
  }
});

export const userLogin = createAsyncThunk("/user/login", async (data) => {
  try {
    const response = axios.post(`${BASEURL}/user/userLogin`, {
      email: data.email,
      password: data.password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
});

export const authSlice = createSlice({
  name: "user",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.status === 201) state.newUser = true;
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loggedInUser = action.payload.data.userId;
    });
  },
});

export const selectLoggedInUser = (state) => state.authReducer.loggedInUser;
export const selectError = (state) => state.authReducer.error;

console.log("user", initialState);

export default authSlice.reducer;
