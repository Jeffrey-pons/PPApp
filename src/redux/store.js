import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice.reducer";
import faqReducer from "./reducers/faq.reducer";

const store = configureStore({
  reducer: {
    search: searchReducer,
    faq: faqReducer,
  },
});

export default store;
