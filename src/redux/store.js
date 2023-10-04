import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice.reducer";
import faqReducer from "./reducers/faq.reducer";
import loginReducer from "./reducers/login.reducer";

const store = configureStore({
  reducer: {
    searchState: searchReducer,
    faqState: faqReducer,
    loginState: loginReducer,
  },
});

export default store;
