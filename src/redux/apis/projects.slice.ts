import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API service
export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-portfolio-client-plum.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
  }),
});

// Export hooks and API
export const { useGetProjectsQuery } = projectsApi;
export default projectsApi;
