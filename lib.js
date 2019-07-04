const utf8 = require('utf8');
const sha1 = require('sha1');
module.exports = verification;


function verification(secretKey) {

    this.secretKey = secretKey;

};




verification.prototype.verify = function (jvzooIpnBody) {
    try {
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
    } catch (err) {
        throw new Error(err);
    }
}

