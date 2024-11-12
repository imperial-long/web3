import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { message } from "antd";
import useStore from "src/stores";

const ConnectButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);
  const { request, checkConnected } = useStore();
  const onClick = async () => {
    try {
      setLoading(true);
      await request();
      setHidden(true);
      message.success("connect success");
    } catch (e) {
      console.log(e, "e");
      setHidden(false);
      message.error("connect failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const hasConnect = checkConnected();
    setHidden(hasConnect);
  }, [checkConnected]);

  return (
    <>
      {hidden ? null : (
        <button
          className=' w-1/3 mt-5 rounded-full bg-primary hover:bg-primaryHover px-4 py-3 text-white text-base flex justify-center items-center'
          onClick={onClick}
        >
          {loading ? (
            <span>
              Connecting... <LoadingOutlined />{" "}
            </span>
          ) : (
            " Connect Wallet"
          )}
        </button>
      )}
    </>
  );
};

export default ConnectButton;
