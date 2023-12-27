import React from 'react'

const youtube = () => {
  return (
        <div className='p-4 bg-gray-900 bg-opacity-50 rounded-xl'>
            <div className='mb-2 flex items-center'>
                <i class="fa-brands fa-youtube text-2xl mx-2"></i>
                <div>YouTube</div>
            </div>
            <img className='w-full h-40 object-cover rounded-md my-3' src='https://i.ytimg.com/vi/5XVoRGhrhZk/maxresdefault.jpg'/>
            <div className='mt-5 mb-3 text-sm'>New shows</div>
            <div className='grid grid-cols-3 gap-3'>
                <div className=''>
                    <img className='object-cover h-36 rounded-sm' src='https://m.media-amazon.com/images/M/MV5BYzkyZjQ0MjAtNmMyYS00ZDQwLWE1YmItYzIwNTUyMDlmYWM5XkEyXkFqcGdeQXVyNDc0MDgzNTE@._V1_FMjpg_UX1000_.jpg'/>
                </div>
                <div>
                    <img className='object-cover h-36 rounded-sm' src='https://i.ytimg.com/vi/LxLf3G00DyM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0DatsiRvYLkItT85smwsbJl-1vw'/>
                </div>
                <div>
                    <img className='object-cover h-36 rounded-sm' src='https://i.ytimg.com/vi/FtJRfsJgtYI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnesJql7Hwoy50EL-t-gUR7dK-ig'/>
                </div>
            </div>
        </div>
  )
}

export default youtube