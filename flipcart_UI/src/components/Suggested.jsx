import React from 'react'
import electronics from "../assets/suggested/1.jpeg";
export default function Suggested() {
  return (
    <div className="mt-5  justify-evenly bg-white">
      <p className="text-xl font-bold p-2 ">Suggested for you</p>

      <div className="flex ">
        <div className="Best of Electronics ">
          <div className="flex justify-evenly  p-3 text-center text-sm ">
            <div className="card border border-gray w-2/8 m-2 ">
              <img src={electronics} className="w-[100%]"></img>
              <p>Camera</p>
              <p className="font-bold">Grab Now </p>
            </div>
            <div className="card border border-gray w-2/8 m-2">
              <img src={electronics} className="w-[100%]"></img>
              <p>Camera</p>
              <p className="font-bold">From 99,999 </p>
            </div>
            <div className="card border border-gray w-2/8 m-2">
              <img src={electronics} className="w-[100%]"></img>
              <p>Camera</p>
              <p className="font-bold">From 99,999 </p>
            </div>
            <div className="card border border-gray w-2/8 m-2">
              <img src={electronics} className="w-[100%]"></img>
              <p>Camera</p>
              <p className="font-bold">From 99,999 </p>
            </div>

            <div className="card border border-gray w-2/8 m-2">
              <img src={electronics} className="w-[100%]"></img>
              <p>Camera</p>
              <p className="font-bold">From 99,999 </p>
            </div>
            <div className="card border border-gray w-2/8 m-2">
              <img src={electronics} className="w-[100%]"></img>
              <p>Camera</p>
              <p className="font-bold">From 99,999 </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
