import { create } from "zustand";
import { Contract, parseEther } from "ethers";
import { formatEther } from "ethers";
import { formattedDate } from "src/utils";
import { BrowserProvider } from "ethers";

const abi = [
  "event Transfer(address indexed from, address indexed receiver, uint256 amount)",
  "function transfer(address payable receiver, uint256 amount, string calldata message, string calldata keyword) public",
  "function getTransactionCount() public view returns (uint256)",
  "function getTransactions() public view returns (tuple(address sender,address receiver,uint256 amount,string message,string keyword, uint256 timestamp)[] memory)",
];

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const provider = new BrowserProvider(window.ethereum);
const singer = await provider.getSigner();

const contract = new Contract(address, abi, singer);

export interface Transaction {
  sender: string;
  receiver: string;
  amount: string;
  message: string;
  keyword: string;
  date: string;
}

interface Store {
  account: string;
  transactions: Transaction[];
}

interface Actions {
  getTransactions: () => void;
  getTransactionCount: () => void;
  transfer: (data: Omit<Transaction, "sender" | "date">) => void;
  request: () => void;
  checkConnected: () => boolean;
  getAccount: () => void;
}

const store = create<Store & Actions>((set, get) => {
  return {
    account: "",
    transactions: [],
    async getTransactions() {
      const getTransactions = contract.getFunction("getTransactions");
      const transactionResult = await getTransactions();
      console.log(transactionResult, "res");
      const transactions = transactionResult.map((transaction: any) => {
        return {
          sender: transaction[0],
          receiver: transaction[1],
          amount: formatEther(transaction[2]),
          message: transaction[3],
          keyword: transaction[4],
          date: formattedDate(transaction[5]),
        };
      });
      set((state) => ({
        ...state,
        transactions,
      }));
    },
    async getTransactionCount() {
      const getTransactionCount = contract.getFunction("getTransactionCount");
      const count = await getTransactionCount();
      set((state) => ({
        ...state,
        count,
      }));
    },
    async transfer(data) {
      const { receiver, message, keyword, amount } = data;
      const { getTransactionCount, getTransactions } = get();
      const transfer = contract.getFunction("transfer");
      await transfer(receiver, parseEther(amount), message, keyword);
      await getTransactionCount();
      await getTransactions();
    },
    // connect metamask
    async request() {
      if (!window.ethereum) {
        console.log("you should download metamask");
        return;
      }

      const [account] = await provider.send("eth_requestAccounts", []);
      set((state) => ({
        ...state,
        account,
        contract,
      }));
    },
    checkConnected() {
      return window.ethereum._state.accounts.length > 0;
    },
    getAccount() {
      if (window.ethereum) {
        const accounts = window.ethereum._state.accounts;
        if (accounts.length) {
          set((state) => ({ ...state, account: accounts[0] }));
        }
      }
    },
  };
});

export default store;
