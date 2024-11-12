import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useStore from "src/stores";
import { LoadingOutlined } from "@ant-design/icons";

const schema = z.object({
  receiver: z.string({ message: "must be sting" }),
  amount: z.string({ message: "must be number" }),
  message: z.string({ message: "must be message" }),
  keyword: z.string({ message: "must be keyword" }),
});

type FormValues = z.infer<typeof schema>;

const TransactionForm: FC = () => {
  const { handleSubmit, register } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const { transfer } = useStore();

  const onSubmit = async () => {
    setLoading(true);
    const onValid = async (data: FormValues) => {
      const { receiver, amount, message, keyword } = data;
      try {
        setLoading(true);
        await transfer({
          receiver,
          amount: amount,
          message,
          keyword,
        });
      } catch (e) {
        console.log(e, "e");
      } finally {
        setLoading(false);
      }
    };
    const submit = await handleSubmit(onValid, (errors) => {
      console.log(errors, "errors");
    });
    submit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder='Address To'
        {...register("receiver")}
        className='my-2 p-2 w-full border-[1px] border-transparent focus:border-primary  bg-transparent text-sm rounded-sm outline-none text-white white-glassmorphism'
      />
      <input
        placeholder='Amount (ETH)'
        {...register("amount")}
        type='number'
        className='my-2 p-2 w-full bg-transparent border-[1px] border-transparent focus:border-primary text-sm rounded-sm  outline-none text-white white-glassmorphism'
      />
      <input
        placeholder='Keyword (Gif)'
        {...register("keyword")}
        className='my-2 p-2 w-full bg-transparent border-[1px] border-transparent focus:border-primary text-sm rounded-sm  outline-none text-white white-glassmorphism'
      />
      <input
        placeholder='Enter Message'
        {...register("message")}
        className='my-2 p-2 w-full bg-transparent border-[1px] border-transparent focus:border-primary text-sm rounded-sm  outline-none text-white white-glassmorphism'
      />
      <div className='w-full h-[1px] bg-gray-400 my-2'></div>
      <button
        className='w-full h-10 text-white  mt-2 border-[1px] border-gray-800 hover:bg-gray-800  rounded-full'
        onClick={onSubmit}
      >
        {loading ? (
          <span>
            sending... <LoadingOutlined />
          </span>
        ) : (
          "send Now"
        )}
      </button>
    </form>
  );
};

export default TransactionForm;
