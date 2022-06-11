const CryptoJS = require('crypto-js');

// Encrypt
// const crypto = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
// const bytes = CryptoJS.AES.decrypt(crypto, 'secret key 123');
// const originalText = bytes.toString(CryptoJS.enc.Utf8);
// console.log(originalText); // 'my message'

const generateToken = (message, secrety) => {
  const crypto = CryptoJS.AES.encrypt(message, secrety).toString();
  const token = crypto.substring(17, 1);
  return token;
};

module.exports = generateToken;