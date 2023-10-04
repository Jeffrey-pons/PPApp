import { createSlice } from "@reduxjs/toolkit";

const LOGIN_STATE = {
  isLoggedIn: false,
};
const getInitialState = () => LOGIN_STATE;
const loginSlice = createSlice({
  name: "login",
  initialState: getInitialState(),
  reducers: {
    setLogin: (state, action) => {
      const login = action.payload.login;
      return { ...state, isLoggedIn: login };
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
