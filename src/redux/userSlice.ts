import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProps {
  first_name: string;
  last_name: string;
  is_active: boolean;
  roles: Array<string>;
  metadata: {
    id?: number;
    email?: string;
    phone?: string;
    address?: string;
    birthdate?: string;
    gender?: string;
    guardian?: string;
    profile_picture?: string;
  };
}

// Define a type for the slice state
interface UserState {
  user: UserProps | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<UserProps | null>) => {
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
