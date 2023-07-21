/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IBook } from "../../../types/globalTypes";
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
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReviews: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
    }),

    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `book/${id}`,
        method: 'PATCH',
        body: updatedData,
      }),
    }),
    deleteBook: builder.mutation<void, number>({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useSearchBooksQuery,
  usePostReviewMutation,
  useGetReviewsQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
} = bookApi;
