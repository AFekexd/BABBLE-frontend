import { apiSlice } from "../../app/api/apiSlice";

export const tagsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchTags: builder.query({
      query: (name) => ({
        url: `/tags/search/${name}`,
        method: "GET",
      }),
    }),
    createTag: builder.mutation({
      query: (body) => ({
        url: "/tags",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazySearchTagsQuery, useCreateTagMutation } = tagsApiSlice;
