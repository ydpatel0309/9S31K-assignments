import React from 'react'
import topselling from "../assets/topselling.jpg"
import wallet from "../assets/wallet.jpg"

export default function Topsection() {
  return (
    <div className='bg-white flex justify-evenly mt-3 mb-3 '>

    <div className='w-2/5'>
    <p className="text-xl font-bold p-2 ">Shopping Essentials</p>
    
          <div className="flex justify-evenly   text-center text-sm ">
          
            <div className="card border border-gray  m-2">
              <img src={wallet} className="w-[100%]"></img>
              <p>Wallet</p>
              <p className="font-bold">From 999 </p>
            </div>
            <div className="card border border-gray  m-2">
              <img src={wallet} className="w-[100%]"></img>
              <p>Wallet</p>
              <p className="font-bold">From 999</p>
            </div>
            </div>

            <div className="flex justify-evenly   text-center text-sm ">
            <div className="card border border-gray  m-2">
              <img src={wallet} className="w-[100%]"></img>
              <p>Wallet</p>
              <p className="font-bold">From 999 </p>
            </div>
            <div className="card border border-gray m-2">
              <img src={wallet} className="w-[100%]"></img>
              <p>Wallet</p>
              <p className="font-bold">From 999 </p>
            </div>

            
        
      </div>
    </div>

    <div className='topselling w-3/5 p-5'>
    <img src={topselling} className='h-[700px]'></img>
    </div>
    </div>
  )
}
