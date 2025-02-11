import { configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "./apis/projects.slice";
import { baseApi } from "./apis/blogs.slice";

export const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(projectsApi.middleware)
      .concat(baseApi.middleware),
});
