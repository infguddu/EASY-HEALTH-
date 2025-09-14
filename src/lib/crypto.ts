'use client';
import CryptoJS from 'crypto-js';

// IMPORTANT: In a real production app, this secret key should be managed securely
// and not hardcoded directly in the client-side code.
// Consider environment variables or a more robust key management system.
const SECRET_KEY = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY || 'my-super-secret-key-that-is-not-so-secret';

/**
 * Encrypts JSON data into a Base64 string.
 * @param data The JSON object to encrypt.
 * @returns An encrypted string.
 */
export const encryptData = (data: object): string => {
  const jsonString = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
  return encrypted;
};

/**
 * Decrypts a Base64 string back into a JSON object.
 * @param encryptedData The encrypted string to decrypt.
 * @returns The decrypted JSON object, or null if decryption fails.
 */
export const decryptData = (encryptedData: string): any | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decryptedJson = bytes.toString(CryptoJS.enc.Utf8);
    
    // Ensure the decrypted string is not empty
    if (!decryptedJson) {
        return null;
    }
    
    return JSON.parse(decryptedJson);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};
