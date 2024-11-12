import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition";
import "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  ignition: {
    requiredConfirmations: 1,
    disableFeeBumping: true,
  },
  etherscan: {
    apiKey: "Q9FKKXHFAPHDRH5S54ANTW9VNSFB7727Q9",
  },
  sourcify: {
    enabled: true,
  },
  networks: {
    sepolia: {
      accounts: [
        "0x4ecde033bdd9ca6a16e81889f51ba2030a67d91919a766cb5a2e6203fd124869",
      ],
      url: "https://eth-sepolia.g.alchemy.com/v2/XRaRPLxMVqnQaV8i3cmRILNe6KTbNbWe",
      chainId: 11155111,
    },
    holesky: {
      accounts: [
        "0x4ecde033bdd9ca6a16e81889f51ba2030a67d91919a766cb5a2e6203fd124869",
      ],
      url: "https://holesky.infura.io/v3/681cbf8a9ba046e0b2c27743c6a7d93c",
    },
    // hardhat: {
    //   accounts: [
    //     {
    //       privateKey:
    //         "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
    //       balance: "10000",
    //     },
    //   ],
    // },
  },
};

export default config;
