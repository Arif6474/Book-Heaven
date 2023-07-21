import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import userReducer from './features/users/userSlice';
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
