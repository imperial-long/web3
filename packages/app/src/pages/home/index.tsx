import { FC, useEffect } from "react";
import useStore from "src/stores";
import {
  Header,
  TransactionForm,
  ConnectButton,
  Service,
  Transaction,
  Footer,
} from "src/components";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from "src/utils";

const Home: FC = () => {
  const { getAccount, account } = useStore();

  useEffect(() => {
    getAccount();
  }, [getAccount]);

  return (
    <div className='min-h-screen bg-black bg-welcome'>
      <Header />
      <div className='w-full flex justify-center items-center py-12 px-4'>
        <div className=' flex'>
          <div className='flex flex-col flex-3 text-white text-4xl'>
            <h1 className='text-gradient'>Send Crypto</h1>
            <h1 className='text-gradient'>across the world</h1>
            <span className='pt-5 text-base '>
              Explore the crypto world. Crypto
            </span>
            <span className='text-base'>
              Buy and sell cryptocurrencies easily on
            </span>
            <ConnectButton />
            <div className='mt-12 grid grid-cols-3 grid-rows-2 text-base font-light'>
              <div className='rounded-tl-2xl flex justify-center items-center border-gray-400 px-10 py-5 border-[1px] border-b-0'>
                Security
              </div>
              <div className='flex justify-center items-center border-gray-400 border-t-[1px] px-10 py-5'>
                Ethereum
              </div>
              <div className='rounded-tr-2xl flex justify-center items-center border-gray-400 border-[1px] px-10 py-5 border-b-0'>
                Web 3.0
              </div>
              <div className='rounded-bl-2xl flex justify-center items-center border-gray-400 border-[1px] px-10 py-5'>
                Low Fees
              </div>
              <div className='flex justify-center items-center border-gray-400 border-y-[1px] px-10 py-5'>
                Blockchain
              </div>
              <div className='rounded-br-2xl flex justify-center items-center border-gray-400 border-[1px] px-10 py-5'>
                Reliability
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center flex-col flex-2 ml-10'>
          <div className='flex justify-center'>
            <div className='w-72 h-40 rounded-xl flex flex-col justify-between p-3 my-5  eth-card'>
              <div className='flex justify-between'>
                <div className='w-10 h-10 rounded-full flex justify-center items-center border-2 border-white'>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
              </div>
              <div className='flex flex-col'>
                <span className='text-white text-sm font-light'>
                  {account ? shortenAddress(account) : "Connect your account"}
                </span>
                <span className='text-white text-lg mt-1 font-semibold'>
                  Ethereum
                </span>
              </div>
            </div>
          </div>
          <div className='w-96 justify-center items-center h-80 p-5 blue-glassmorphism '>
            <TransactionForm />
          </div>
        </div>
      </div>
      <Service />
      <Transaction />
      <Footer />
    </div>
  );
};

export default Home;
