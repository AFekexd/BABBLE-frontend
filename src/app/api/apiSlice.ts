import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  deleteCredentials,
  setCredentials,
} from "../../features/auth/authSlice";
import { RootState } from "../store";

const tokenSelector = (state: RootState) => state.user.jwt;

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api-babble.afeke.com/",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = tokenSelector({ user: { jwt: "" } } as RootState);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Access-Control-Allow-Origin", "true");
    }
    return headers;
  },
});

const baseQueryWithRetry = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = (await baseQuery(
      "/api/auth/refresh",
      api,
      extraOptions
    )) as any;
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult?.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(deleteCredentials());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithRetry,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
});
