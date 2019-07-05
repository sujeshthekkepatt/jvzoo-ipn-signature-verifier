const utf8 = require('utf8');
const sha1 = require('sha1');

/**
 * Initialize the verifier with secret key
 *
 * Secret key is needed to verify the signature
 *
 * @param {*} secretKey
 */
class JvzooVerification {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    verify(jvzooIpnBody) {
        try {
            if (!jvzooIpnBody || !(typeof jvzooIpnBody === 'object')) throw new Error('Invalid request body received')
            const keys = [];
            Object.keys(jvzooIpnBody).forEach((key) => {
                if (key !== 'cverify') {
                    keys.push(key);
                }
            });
            keys.sort();
            let pop = '';
            keys.forEach((key) => {
                pop += `${jvzooIpnBody[key]}|`;
            });
            pop += this.secretKey;
            pop = utf8.encode(pop);
            let calcedVerify = sha1(pop);
            calcedVerify = calcedVerify.substr(0, 8).toUpperCase();
            return calcedVerify === jvzooIpnBody.cverify;
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
;


module.exports = JvzooVerification;

