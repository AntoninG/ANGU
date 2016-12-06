const encrypt = require('./iut-encrypt');

// Encode password 'password' with sha1 algorithm
console.log(encrypt.encodeSha1('password'));