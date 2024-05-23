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
        createPost: builder.mutation({
            query: (body) => ({
                url: "/forum/post",
                method: "POST",
                body,
            }),
        }),
        deletePost: builder.mutation({
            query: (postId) => ({
                url: `/forum/post/${postId}`,
                method: "DELETE",
            }),
        }),
        reportPost: builder.mutation({
            query: (body) => ({
                url: "/forum/post/report",
                method: "POST",
                body,
            }),
        }),
    }),
    overrideExisting: false,
});
