require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: 'change with your base goearli  api key',
      accounts: ['paste your account private key'],
    },
  },
  solidity: '0.8.15',
};
