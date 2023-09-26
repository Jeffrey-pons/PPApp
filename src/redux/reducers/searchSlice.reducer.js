import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInputVisible: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleInputVisibility: (state) => {
      state.isInputVisible = !state.isInputVisible;
    },
  },
});

export const { toggleInputVisibility } = searchSlice.actions;

export default searchSlice.reducer;
