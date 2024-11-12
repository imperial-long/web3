import { shortenAddress } from "src/utils";
import { FC } from "react";
import { useQuery } from "react-query";

const API_KEY = "Rh9rPTdrQsHJTup5JEzEFPmi6aX3vUg1";

interface TransactionsCardProps {
  sender: string;
  receiver: string;
  date: string;
  message: string;
  keyword: string;
  amount: string;
  url?: string;
}

const fetchGif = async (keyword: string) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
      .split(" ")
      .join("")}&limit=1`
  );
  const { data } = await response.json();

  return data[0]?.images?.downsized_medium.url;
};

const TransactionsCard: FC<TransactionsCardProps> = ({
  sender,
  receiver,
  date,
  message,
  keyword,
  amount,
  url,
}) => {
  const { data } = useQuery([keyword], () => {
    return fetchGif(keyword);
  });

  return (
    <div
      className='bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl'
    >
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='display-flex justify-start w-full mb-6 p-2'>
          <a
            href={`https://ropsten.etherscan.io/address/${sender}`}
            target='_blank'
            rel='noreferrer'
          >
            <p className='text-white text-base'>
              From: {shortenAddress(sender)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${receiver}`}
            target='_blank'
            rel='noreferrer'
          >
            <p className='text-white text-base'>
              To: {shortenAddress(receiver)}
            </p>
          </a>
          <p className='text-white text-base'>
            Amount: {amount.toString()} ETH
          </p>
          {message && (
            <>
              <br />
              <p className='text-white text-base'>Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={data || url}
          alt='nature'
          loading='lazy'
          className='w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover'
        />
        <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
          <p className='text-[#37c7da] font-bold'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionsCard;
