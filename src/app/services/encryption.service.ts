import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private readonly secretKey = 'your-secret-key'; // Replace with your secure key

  constructor() {}

  // Encrypt password
  encrypt(password: string): string {
    try {
      const encrypted = CryptoJS.AES.encrypt(password, this.secretKey);
      return encrypted.toString();
    } catch (error) {
      console.error('Encryption error:', error);
      throw new Error('Failed to encrypt password');
    }
  }

  // Decrypt password
  decrypt(encryptedPassword: string): string {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedPassword, this.secretKey);
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Decryption error:', error);
      throw new Error('Failed to decrypt password');
    }
  }

  // Generate a random secret key
  generateSecretKey(length: number = 32): string {
    return CryptoJS.lib.WordArray.random(length).toString();
  }
}