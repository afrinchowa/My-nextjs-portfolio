import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-portfolio-client-plum.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getblogs: builder.query({
      query: () => "/blogs",
    }),
  }),
});

export const { useGetblogsQuery } = baseApi;
export default baseApi;
