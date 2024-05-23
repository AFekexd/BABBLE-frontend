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
        parsedToken: null,
        refresh_token: null,
    } as AuthState,
    reducers: {
        setCredentials(state: AuthState, action: PayloadAction<AuthState>) {
            const { jwt, parsedToken, refresh_token } = action.payload;
            state.jwt = encrypt(jwt ?? "");
            state.parsedToken = parsedToken;
            state.refresh_token = refresh_token;
        },
        deleteCredentials(state: AuthState) {
            state.jwt = null;
            state.parsedToken = null;
            state.refresh_token = null;
        },
    },
});

export const { setCredentials, deleteCredentials } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState) => decrypt(state.user.jwt ?? "");
export const selectParsedToken = (state: RootState) => state.user.parsedToken;
export const selectRefreshToken = (state: RootState) => state.user.refresh_token;
