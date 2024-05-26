import { apiSlice } from "../../app/api/apiSlice";

export const forumCommentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
               //TODO: Implementálja a szükséges végpontokat 
        getComments: builder.query({
            query: (threadId) => ({
                url: `/forum/thread/${threadId}/comments`,
                method: "GET",
            }),
        }),
        createComment: builder.mutation({
            query: (body) => ({
                url: "/forum/comment",
                method: "POST",
                body,
            }),
        }),
        deleteComment: builder.mutation({
            query: (commentId) => ({
                url: `/forum/comment/${commentId}`,
                method: "DELETE",
            }),
        }),
        reportComment: builder.mutation({
            query: (body) => ({
                url: "/forum/comment/report",
                method: "POST",
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation } = forumCommentApiSlice;