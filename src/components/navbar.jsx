import React from 'react'

const navbar = () => {
  return (
        <div className='flex items-center'>
                <div className='bg-gray-900 bg-opacity-40 h-10 md:h-12 w-fit p-1 md:p-2 rounded-xl md:rounded-full flex text-gray-400 items-center'>
                    <i class="fa-brands fa-youtube text-sm md:text-2xl mx-1 md:mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                    <i class="fa-brands fa-spotify text-sm md:text-2xl mx-1 md:mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                    <i class="fa-brands fa-facebook text-sm md:text-2xl mx-1 md:mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                <i class="fa-brands fa-instagram text-sm md:text-2xl mx-1 md:mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                    
                </div>
                <div className='flex justify-center items-center mx-2 md:mx-36'>
                    <input className='py-2 px-2 text-center md:px-4 text-sm md:text-lg rounded-xl w-20 md:w-80 bg-gray-900 bg-opacity-30 outline-none text-gray-400 capitalize' placeholder='Search' autoFocus/>
                </div>
                <div className='flex items-center'>
                    <div className='mx-1 md:mx-2 bg-gray-900 p-1 md:p-2  text-xs md:text-lg rounded-lg bg-opacity-40 text-gray-400 hover:text-gray-300 '>Tue, 27 Nov, 2023</div>
                    <i class="fa-regular fa-bell mx-1 md:mx-2  text-lg md:text-2xl text-gray-400 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                </div>
            </div>
  )
}

export default navbar