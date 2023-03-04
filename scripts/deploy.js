const hre = require('hardhat');

const { ethers } = require('hardhat');
// const { ethers } = require("hardhat");

async function generateSignature() {
  // Set up the signer
  const [signer] = await ethers.getSigners();

  // Define the riddle answer

  //for 2nd challenge
  const riddleAnswer = 'The Merge';
  //for 3rd challenge
  // const riddleAnswer = 'EIP-4844';

  // Calculate the message hash
  const messageHash = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(riddleAnswer)
  );

  // Sign the message hash
  const signature = await signer.signMessage(
    ethers.utils.arrayify(messageHash)
  );

  // Convert the signature to bytes
  const signatureBytes = ethers.utils.arrayify(signature);

  console.log(`Signature bytes: ${signatureBytes}`);
  console.log(`Signature: ${signature}`);
  return { signature, signatureBytes };
}
generateSignature();
// async function signMessage() {
//   const privateKey =
//     '4ddcb7d145bee9bd7a6149f1741937cea4de846f40a0fc39bb207747e837d1aa';

//   // Create a signer using the private key
//   const signer = new ethers.Wallet(privateKey);

//   // Generate the signature for the riddle answer
//   const riddleAnswer = 'Merge';
//   const messageHash = ethers.utils.keccak256(
//     ethers.utils.toUtf8Bytes(riddleAnswer)
//   );
//   const signedMessage = await signer.signMessage(
//     ethers.utils.arrayify(messageHash)
//   );
//   const signature = ethers.utils.splitSignature(signedMessage);
//   // console.log(`Signature: ${signature}`);
//   // Convert the signature to bytes
//   const signatureBytes = ethers.utils.concat([
//     signature.r,
//     signature.s,
//     signature.v,
//   ]);

// console.log(`Signature bytes: ${signatureBytes}`);
// console.log(`Signature: ${signature}`);
//   await signature;
//   return signature;
// }

// signMessage();

// // // We recommend this pattern to be able to use async/await everywhere
// // // and properly handle errors.
// // main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });
