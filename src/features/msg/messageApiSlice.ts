import { apiSlice } from "../../app/api/apiSlice";

export const messageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (body) => ({
        url: "/message",
        method: "GET",
        body,
      }),
    }),
    getMessagesByUser: builder.query({
      query: (userId) => ({
        url: `/message/${userId}`,
        method: "GET",
      }),
    }),
    sendMessage: builder.mutation({
      query: (body) => ({
        url: "/message",
        method: "POST",
        body,
      }),
    }),
    createRoom: builder.mutation({
      query: (body) => ({
        url: "/message/room",
        method: "POST",
        body,
      }),
    }),
    createGroup: builder.mutation({
      query: (body) => ({
        url: "/message/group",
        method: "POST",
        body,
      }),
    }),
    getGroups: builder.query({
      query: () => ({
        url: "/message/group",
        method: "GET",
      }),
    }),
    inviteToGroup: builder.mutation({
      query: (body) => ({
        url: "/message/group/invite",
        method: "POST",
        body,
      }),
    }),
    leaveGroup: builder.mutation({
      query: (groupId) => ({
        url: `/message/group/${groupId}`,
        method: "DELETE",
      }),
    }),
    getGroupMessages: builder.query({
      query: (groupId) => ({
        url: `/message/group/${groupId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = messageApiSlice;
