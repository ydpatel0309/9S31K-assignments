import React from 'react'
import advertisement from "../assets/advertisement/fashon.jpeg"
import electronics from "../assets/bestofelectronics/kettle.jpeg"
export default function BestElectronics() {
  return (
      <div className='mt-5  justify-evenly bg-white'>
        <p className='text-xl font-bold p-2 '>Best of Electronics</p>

    <div className='flex '>
        <div className='Best of Electronics '>


        <div className='flex justify-evenly  p-3 text-center text-sm '>

        <div className='card border border-gray w-2/8 m-2'>
        <img src={electronics}  className='w-[100%]'></img>
        <p>Kettle</p>
        <p className='font-bold'>Grab Now </p>
        </div>
        <div className='card border border-gray w-2/8 m-2'>
        <img src={electronics}  className='w-[100%]'></img>
        <p>Kettle</p>
        <p className='font-bold'>From 999 </p>
        </div>
        <div className='card border border-gray w-2/8 m-2'>
        <img src={electronics}  className='w-[100%]'></img>
        <p>Kettle</p>
        <p className='font-bold'>From 999 </p>
        </div>
        <div className='card border border-gray w-2/8 m-2'>
        <img src={electronics}  className='w-[100%]'></img>
        <p>Kettle</p>
        <p className='font-bold'>From 999 </p>
        </div>
        <div className='card border border-gray w-2/8 m-2'>
        <img src={electronics}  className='w-[100%]'></img>
        <p>Kettle</p>
        <p className='font-bold'>From 999 </p>
        </div>

        </div>
        </div>

        <div className='w-1/4 p-2 flex  justify-center'>
         <img src={advertisement}></img>
        </div>
        </div>
        
    </div>
  )
}
