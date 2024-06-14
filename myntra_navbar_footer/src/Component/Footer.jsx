import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 w-[100%] h-[100%] py-7 flex">
        <div>
          <div className="py-2 px-8 my-4 mx-4">
            <h2 className="font-bold py-6 text-lg">Online Shopping</h2>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Men</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Women</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Kids</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Beauty</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">LifeStyle</p>
          </div>
          <div className="px-8 mx-4 pb-8">
            <h2 className="font-bold py-6 text-lg">Useful Links</h2>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Blogs</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Career</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Site Map</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">WhiteChat</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">ClearTrip</p>
          </div>
        </div>
        <div>
          <div className="py-2 px-8 my-4 mx-4 cursor-pointer">
            <h2 className="font-bold py-6 text-lg">Customer Policies</h2>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Contact Us</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">FAQ</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">T&C</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Terms of Use</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Returns</p>
            <p className="text-md text-gray-400 font-bold cursor-pointer hover:text-gray-600">Cancellation</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="py-2 px-8 my-4 mx-4">
              <h2 className="font-bold py-6 text-lg">Experience Myntra on Mobile Phone</h2>
              <img className="w-[30%] pl-6 ml-3 pt-1" src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="Google Play Store" />
              <p className="font-bold pl-14 text-lg pt-3">Keep in touch</p>
              <div className="flex px-12 py-2">
                <FaFacebook className="mx-3 text-lg" />
                <FaTwitter className="mx-3 text-lg" />
                <FaYoutube className="mx-3 text-lg" />
              </div>
            </div>
          </div>
          <div className=" mr-20 pt-20">
            <p className="text-md text-gray-600 font-bold cursor-pointer "><span className="font-bold text-lg text-black">100% original </span>for all products at myntra </p>
            <br/>
            <p className="text-md text-gray-600 font-bold cursor-pointer "><span className="font-bold text-lg text-black">Return Within 14 days </span>of recieving your order </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
