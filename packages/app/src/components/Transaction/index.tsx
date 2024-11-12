import { FC, useEffect } from "react";
import TransactionsCard from "./TransactionCard";
import useStore, { Transaction } from "src/stores";

const Transactions: FC = () => {
  const { transactions, account, getTransactions } = useStore();

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const dummyData: (Transaction & { url: string })[] = [
    {
      url: "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284",
      message: "",
      date: "12/21/2021, 4:33:21 PM",
      sender: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      amount: "0.01",
      receiver: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      keyword: "",
    },
    {
      url: "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif",
      message: "",
      date: "12/21/2021, 4:33:21 PM",
      sender: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      amount: "0.01",
      receiver: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      keyword: "",
    },
    {
      url: "https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif",
      message: "",
      date: "12/21/2021, 4:33:21 PM",
      sender: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      amount: "0.01",
      receiver: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      keyword: "",
    },
    {
      url: "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif",
      message: "",
      date: "12/21/2021, 4:33:21 PM",
      sender: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      amount: "0.01",
      receiver: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      keyword: "",
    },
    {
      url: "https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif",
      message: "",
      date: "12/21/2021, 4:33:21 PM",
      sender: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      amount: "0.01",
      receiver: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      keyword: "",
    },
    {
      url: "https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif",
      message: "",
      date: "12/21/2021, 4:33:21 PM",
      sender: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      amount: "0.01",
      receiver: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      keyword: "",
    },
  ];

  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {account ? (
          <h3 className='text-white text-3xl text-center my-2'>
            Latest Transactions
          </h3>
        ) : (
          <h3 className='text-white text-3xl text-center my-2'>
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className='flex flex-wrap justify-center items-center mt-10'>
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
