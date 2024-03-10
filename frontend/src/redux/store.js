import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
    deleteBookById: booksReducer,
  }
});

export default store;