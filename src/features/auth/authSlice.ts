import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { decrypt, encrypt } from "../../util/encrypt";

export interface AuthState {
  jwt: string | null;
  parsedToken: string | null;
  refresh_token: string | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    jwt: null,
    refresh_token: null,
  } as AuthState,
  reducers: {
    setCredentials(state: AuthState, action: PayloadAction<AuthState>) {
      const { jwt, refresh_token } = action.payload;
      state.jwt = encrypt(jwt ?? "");
      state.refresh_token = encrypt(refresh_token ?? "");
    },
    deleteCredentials(state: AuthState) {
      state.jwt = null;
      state.refresh_token = null;
    },
  },
});

export const { setCredentials, deleteCredentials } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState) => decrypt(state.user.jwt ?? "");
export const selectRefreshToken = (state: RootState) =>
  decrypt(state.user.refresh_token ?? "");
