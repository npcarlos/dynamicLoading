import * as CryptoJS from 'crypto-js';

export class JwtJs {
  signature;

  base64url(source) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  }

  encodeJWT(header, payload, secret) {
    const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    const encodedHeader = this.base64url(stringifiedHeader);

    const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    const encodedData = this.base64url(stringifiedData);

    this.signature = encodedHeader + '.' + encodedData;
    this.signature = CryptoJS.HmacSHA256(this.signature, secret);
    this.signature = this.base64url(this.signature);

    let jwt = encodedHeader + '.' + encodedData + '.' + this.signature;
    this.decodeJWT(jwt);

    return jwt;
  }

  decodeJWT(jwt) {
    let base64Url = jwt.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    let parsedStr = JSON.parse(jsonPayload);
    return parsedStr;
  }
}

const JwtObj = new JwtJs();
