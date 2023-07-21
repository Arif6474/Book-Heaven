import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'books',
  tagTypes: ['books'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://book-heaven-server.vercel.app/' }),
  endpoints: () => ({}),
});

