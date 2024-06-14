import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between p-4 mr-28 bg-grey-300'>
      <img className='w-[8%]'src='https://images.indianexpress.com/2021/01/myntra.png' alt='myntra logo'/>
     <div className= 'flex text-black font-bold pl--1 mr-20 cursor-pointer'>
        <h3 className="mx-4">Men</h3>
        <h3 className="mx-4">Women</h3>
        <h3 className="mx-4">Kids</h3>
        <h3 className="mx-4">Home&Living</h3>
        <h3 className="mx-4">Beauty</h3>
        <h3 className="mx-4">Studio</h3>

     </div>
     <div className="mr-10 text-black bg-grey-200">
        <input className=' pl-2 mr-16 py-2 mx-auto  text-sm text-black  border border-black rounded-full bg-grey-600 w-[120%]'type='text' placeholder='Search for products brand and more..'></input>
     </div>
     <div className="flex justify-between items-center  cursor-pointer">
      <div className=" px-4">
         <CgProfile size={22}/>
        <p>Profile</p>
        </div>
        <div  className="  px-4">
         <FaRegHeart size={22}/>
        <p>WishList</p>
        </div>
        <div  >
         <FaShoppingCart size={22}/>
        <p>Bag</p>
        </div>
     </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Header