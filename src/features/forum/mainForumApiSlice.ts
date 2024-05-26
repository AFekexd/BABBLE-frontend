import { apiSlice } from "../../app/api/apiSlice";

export const mainForumApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForum: builder.query({
      query: () => ({
        url: "/forum",
        method: "GET",
      }),
    }),
    getThread: builder.query({
      query: (threadId) => ({
        url: `/forum/thread/${threadId}`,
        method: "GET",
      }),
    }),
    createThread: builder.mutation({
      query: (body) => ({
        url: "/forum/thread",
        method: "POST",
        body,
      }),
    }),
    deleteThread: builder.mutation({
      query: (postId) => ({
        url: `/forum/thread/${postId}`,
        method: "DELETE",
      }),
    }),
    reportThread: builder.mutation({
      query: (threadId) => ({
        url: `/forum/thread/report/${threadId}`,
        method: "POST",
      }),
    }),
    updateThread: builder.mutation({
      query: (body) => ({
        url: "/forum/thread",
        method: "PUT",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});
