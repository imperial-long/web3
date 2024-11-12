import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const myTransaction = buildModule("MyTransaction1", (m) => {
  const myTransaction = m.contract("MyTransaction1");
  return {
    myTransaction,
  };
});

export default myTransaction;
