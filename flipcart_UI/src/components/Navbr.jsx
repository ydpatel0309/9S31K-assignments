import React from "react";
import logo from "../assets/logo/flipcart_logo.svg";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbr() {
  return (
    <div className="flex w-full justify-evenly p-3 items-center bg-white ">
      <div>
        <img src={logo} />
      </div>

      <div className="relative flex items-center w-[800px]">
        <CiSearch size={22} className="text-slate-500 absolute left-3" />
        <input className="bg-slate-200 rounded-md w-full h-[40px] pl-10 py-[11px] text-lg" placeholder="Search for Brands,Products and more"/>
      </div>

      <div className="flex items-center">
        <VscAccount size={21} className="m-2"/>
        Yash
      </div>
      <div className="flex items-center">
        <IoCartOutline size={22} className="m-2"/> Cart
      </div>
      <div className="flex items-center">
        <CiShop size={22} className="m-2 "/> Become a Seller
      </div>

      <CiMenuBurger />
    </div>
  );
}
