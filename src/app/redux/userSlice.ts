import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  user: object | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    LOGOUT_USER: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_USER, LOGOUT_USER } = userSlice.actions;

export default userSlice.reducer;
