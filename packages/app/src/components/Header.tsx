import { FC } from "react";
import logo from "src/assets/images/logo.png";

const Header: FC = () => {
  return (
    <nav className='w-screen p-4 flex justify-between items-center'>
      <div className='flex justify-center items-center '>
        <img src={logo} alt='logo' className='w-32' loading='lazy'></img>
      </div>
      <ul className='text-white list-none flex flex-4 justify-between items-center'>
        <li className='cursor-pointer mx-4'>Market</li>
        <li className='cursor-pointer mx-4'>Exchange</li>
        <li className='cursor-pointer mx-4'>Tutorials</li>
        <li className='cursor-pointer mx-4'>Wallets</li>
        <li className='mx-4 cursor-pointer'>
          <button className='rounded-full hover:bg-primaryHover bg-primary px-6 py-2'>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
