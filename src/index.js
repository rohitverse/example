const ethers = require('ethers');

// Replace with your own private key
const privateKey =
  '4ddcb7d145bee9bd7a6149f1741937cea4de846f40a0fc39bb207747e837d1aa';

// Connect to the Ethereum network using the private key
const provider = new ethers.providers.JsonRpcProvider(
  'https://base-goerli.infura.io/v3/ae7c982aa0af45ce93c4e4a981f35d23'
);
const signer = new ethers.Wallet(privateKey, provider);

// Generate the signature for a message
const message = 'Merge';
const messageHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(message));
const signedMessage = await signer.signMessage(
  ethers.utils.arrayify(messageHash)
);
const signature = ethers.utils.splitSignature(signedMessage);
const signatureBytes = ethers.utils.concat([
  signature.r,
  signature.s,
  signature.v,
]);
console.log(signatureBytes);
