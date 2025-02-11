import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API service
export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
  }),
});

// Export hooks and API
export const { useGetProjectsQuery } = projectsApi;
export default projectsApi;
