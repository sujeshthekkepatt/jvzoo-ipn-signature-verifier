# Jvzoo-Ipn-Signature-Verifier

jvzoo-signature-verifier is a nodejs library for dealing with jvzoo ipn signature verification. It's a port of sample code deployed at [here](https://jvzoo.zendesk.com/hc/en-us/articles/206456857-JVZIPN-How-to-create-your-own-integrated-script).

## Installation

Use the package manager [npm](https://www.npmjs.com/package/npm) to install jvzoo-signature-verifier.

```bash
npm install jvzoo-signature-verifier
```

## Usage

```node js
const JvzooVerifier =  require('jvzoo-ipn-signature-verifier');

const verifier = new JvzooVerifier('Your key');

verifier.verify(req.body); # returns 'true' or 'false' 

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)