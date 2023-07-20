/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSlice } from "@reduxjs/toolkit";

interface IBook {
  books: IBook[];
}
const initialState: IBook = {
  books: [],
};

const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});
// export const {} = booksSlice.actions;
export default booksSlice.reducer;
