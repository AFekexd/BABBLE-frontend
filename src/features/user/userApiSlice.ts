import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users/all",
        method: "GET",
        credentials: "include",
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
    uploadUserImage: builder.mutation({
      query: (image) => ({
        url: `/users/image`,
        method: "PUT",
        body: image,
      }),
    }),
    getUserImage: builder.query({
      query: (userId) => ({
        url: `/users/pfp/${userId}`,
        method: "GET",
      }),
    }),
    getPersonalPfp: builder.query({
      query: () => ({
        url: `/users/pfp`,
        method: "GET",
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
  useUploadUserImageMutation,
  useLazyGetUserImageQuery,
  useLazyGetPersonalPfpQuery,
  // useReportUserMutation,
  // useAddFriendMutation,
  // useRemoveFriendMutation,
  // useGetFriendsQuery,
  // useGetFriendRequestsQuery,
  // useAcceptFriendRequestMutation,
  // useRejectFriendRequestMutation,
} = userApiSlice;
