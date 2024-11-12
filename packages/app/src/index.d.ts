import { Eip1193Provider, ethers } from "ethers";

declare global {
  interface Window {
    ethereum: Eip1193Provider & {
      _state: {
        accounts: string[];
      };
      sendTransaction(
        tx: ethers.TransactionRequest
      ): Promise<ethers.TransactionResponse>;
    };
  }
}
