/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    searchBooks: builder.query({
      query: (searchQuery) => `/books?search=${searchQuery}`,
      // transformResponse: (response) => response.data, // You may need to adjust this based on your API response structure
    }),
  }),
});

export const { useGetBooksQuery  , useSingleBookQuery , useSearchBooksQuery} = bookApi;
