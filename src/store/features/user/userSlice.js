import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "./userAPI";

const name = "user";
const initialState = {
  loading: false,
  error: null,
  result: null,
};

const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return await userAPI();
});

const userSlice = createSlice({
  name,
  initialState,
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.result = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export { fetchUser };
export const USER = name;
export const userReducer = userSlice.reducer;
