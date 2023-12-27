import React from 'react'

const navbar = () => {
  return (
        <div className='flex'>
                <div className='bg-gray-900 bg-opacity-40 w-fit p-2 rounded-full flex text-gray-400 '>
                <i class="fa-brands fa-youtube text-2xl mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                <i class="fa-brands fa-spotify text-2xl mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                <i class="fa-brands fa-facebook text-2xl mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                <i class="fa-brands fa-instagram text-2xl mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                    
                </div>
                <div className='flex justify-center items-center mx-36'>
                    <input className='py-2 px-4 rounded-xl w-80 bg-gray-900 bg-opacity-30 outline-none text-gray-400 capitalize' placeholder='Search' autoFocus/>
                </div>
                <div className='flex items-center'>
                    <div className='mx-2 bg-gray-900 p-2 rounded-lg bg-opacity-40 text-gray-400 hover:text-gray-300 '>Tue, 27 Nov, 2023</div>
                    <i class="fa-regular fa-bell text-2xl mx-2 text-gray-400 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                </div>
            </div>
  )
}

export default navbar