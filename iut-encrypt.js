const crypto = require('crypto');

let iut_encrypt = {
    encodeSha1: function(password) {
        if (typeof password !== 'string')
            return false;

        let hash = crypto.createHash('sha1');
        hash.update(password);
        return hash.digest('hex');
    }
};

module.exports = iut_encrypt;