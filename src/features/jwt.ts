//function that decodes the token and returns the whole object

import { decrypt } from "../util/encrypt";
import { decodeToken, isExpired } from "react-jwt";

export const DecodeToken = (token: string) => {
    const decryptedToken = decrypt(token);
    const decodedToken = decodeToken(decryptedToken);
    return decodedToken;
    }

export const IsTokenExpired = (token: string) => {
    return isExpired(decrypt(token));
}