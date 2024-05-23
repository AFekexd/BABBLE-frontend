import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getUserViaId: builder.query({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: "/user",
        method: "PUT",
        body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
    }),
    /*
    TODO: BACKEND IMPLEMENTATION
    
    reportUser: builder.mutation({
      query: (body) => ({
        url: "/user/report",
        method: "POST",
        body,
      }),
    }),
    addFriend: builder.mutation({
      query: (body) => ({
        url: "/user/friend",
        method: "POST",
        body,
      }),
    }),
    removeFriend: builder.mutation({
      query: (userId) => ({
        url: `/user/friend/${userId}`,
        method: "DELETE",
      }),
    }),
    getFriends: builder.query({
      query: () => ({
        url: "/user/friend",
        method: "GET",
      }),
    }),
    getFriendRequests: builder.query({
      query: () => ({
        url: "/user/friend/request",
        method: "GET",
      }),
    }),
    acceptFriendRequest: builder.mutation({
      query: (userId) => ({
        url: `/user/friend/request/${userId}`,
        method: "POST",
      }),
    }),
    rejectFriendRequest: builder.mutation({
      query: (userId) => ({
        url: `/user/friend/request/${userId}`,
        method: "DELETE",
      }),
    }),
    */
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useGetUserViaIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  // useReportUserMutation,
  // useAddFriendMutation,
  // useRemoveFriendMutation,
  // useGetFriendsQuery,
  // useGetFriendRequestsQuery,
  // useAcceptFriendRequestMutation,
  // useRejectFriendRequestMutation,
} = userApiSlice;
