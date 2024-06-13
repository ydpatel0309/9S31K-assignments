import React from 'react'
import topbar1 from "../assets/Topbar_images/1.webp"
import topbar2 from "../assets/Topbar_images/2.webp"
import topbar3 from "../assets/Topbar_images/3.png"
import topbar4 from "../assets/Topbar_images/4.png"
import topbar5 from "../assets/Topbar_images/5.jpg"
import topbar6 from "../assets/Topbar_images/6.jpg"
import topbar7 from "../assets/Topbar_images/7.png"
import topbar8 from "../assets/Topbar_images/8.png"
import topbar9 from "../assets/Topbar_images/9.png"

export default function Topbar() {
  return (
    <div className='flex items-center justify-evenly h-[100px] p-5 bg-white font-bold text-sm text-slate-700'>
        
        <div className='text-center '><img src={topbar1} className='w-[80%]'></img>
        Grocery
        </div>
        

        <div className='text-center'><img src={topbar2} className='w-[80%]'></img>
        Mobile
        </div>
        <div className='text-center'><img src={topbar3} className='w-[80%]'></img>
        Fashon
        </div>
        <div className='text-center'><img src={topbar4} className='w-[80%]'></img>
        Electronics
        </div>
        <div className='text-center'><img src={topbar5} className='w-[60%]'></img>
        Home & Furiture
        </div>
        <div className='text-center'><img src={topbar6} className='w-[80%]'></img>
        Applications
        </div>
        <div className='text-center'><img src={topbar7} className='w-[80%]'></img>
        Travel
        </div>
        <div className='text-center'><img src={topbar8} className='w-[40%]'></img>
        Beauty,Toys and More
        </div>
        <div className='text-center'><img src={topbar9} className='w-[80%]'></img>
        Two wheelers
        </div>

    </div>
  )
}
