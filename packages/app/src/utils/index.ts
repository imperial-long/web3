import dayjs from "dayjs";

export const shortenAddress = (address: string) =>
  `${address.slice(0, 5)}***${address.slice(address.length - 4)}`;

export const formattedDate = (val: bigint) => {
  const timestampInSeconds = Number(val);
  return dayjs.unix(timestampInSeconds).format("MM/DD/YYYY, h:mm:ss A");
};
