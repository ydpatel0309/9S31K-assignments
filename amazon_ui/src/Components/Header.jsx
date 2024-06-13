import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-zinc-950 cursor-pointer'>
      <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578" className='h-16 w-30 pl-5'
      alt='Amazon logo'/>
      <p className='text-lg text-white'>Update Location</p>
      <div className='flex items-center bg-orange-300 border border-black-400 rounded-md px-2'>
        <p className="text-black font-bold px-2 ">All</p>
        <input
          type="text"
          className='bg-white-300 outline-none px-2 py-1 w-64'
          placeholder='Search Amazon.in'
        />
        <FaSearch className='text-gray-900 ml-2 px--2' />
      </div>
      <p className='text-white font-bold cursor-pointer'>En^</p>
      <h3 className='text-white font-bold cursor-pointer'>Sign in</h3>
      <h4 className='text-white font-bold cursor-pointer'>Orders</h4>
    </div>
  );
};

export default Header;
