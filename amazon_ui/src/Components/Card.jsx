const Card = () => {
    return (
        <>
      <div className='p-4 bg-grey shadow-md rounded-lg w-[23%] transition-transform transform hover:scale-105 py-2 px-1'>
        <h1 className="p-2 text-lg font-bold">Revamp your home in style</h1>
        <div className='flex flex-wrap'>
          <div className='w-1/2 p-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg" alt="img1" className='rounded-md' />
          </div>
          <div className='w-1/2 p-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="img2" className='rounded-md' />
          </div>
          <div className='w-1/2 p-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg" alt="img3" className='rounded-md' />
          </div>
          <div className='w-1/2 p-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg" alt="img4" className='rounded-md' />
          </div>
        </div>
        <h2 className="text-blue-500 font-bold p-2">Explore more...</h2>
      </div>
      </>
    );
  }
  
  export default Card;
  