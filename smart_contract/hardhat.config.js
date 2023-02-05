//https://eth-goerli.g.alchemy.com/v2/doBwr4lg3TPkRlkeHM8ECbakj0IEg5ZM
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    Goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/doBwr4lg3TPkRlkeHM8ECbakj0IEg5ZM",
      accounts: [
        "f1ed6582bbdc6a6f70d5cb5ab2b69517abe355298fb0e481e5caa2f3c6dcda86",
      ],
    },
  },
};
