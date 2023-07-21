/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  _id: string;
  title: string;
  img: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews: any[];
}

interface WishlistState {
  books: Book[];
}

const initialState: WishlistState = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Book>) => {
      const bookToAdd = action.payload;
      if (!state.books.find((book) => book._id === bookToAdd._id)) {
        state.books.push(bookToAdd);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      const bookIdToRemove = action.payload;
      state.books = state.books.filter((book) => book._id !== bookIdToRemove);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
