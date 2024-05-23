import CryptoJS from "crypto-js";

export function encrypt(text: string): string {
  const secret = process.env.REACT_APP_SECRET_KEY ?? "";
  const enryptedText = CryptoJS.AES.encrypt(text, secret).toString();
  return enryptedText;
}

export function decrypt(text: string): string {
  const secret = process.env.REACT_APP_SECRET_KEY ?? "";
  try {
    const decryptedText = CryptoJS.AES.decrypt(text, secret).toString(CryptoJS.enc.Utf8);
    return decryptedText;
  } catch (error) {
    console.error('Error decrypting text:', error);
    return '';
  }
}