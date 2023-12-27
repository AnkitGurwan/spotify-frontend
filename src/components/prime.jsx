import React from 'react'

const prime = () => {
  return (
        <div className='md:w-1/3 p-2 md:p-4 bg-gray-900 bg-opacity-50 rounded-xl md:mr-4'>
            <div className='mb-2 flex items-center'>
                <img className='h-8 w-8 mr-2 rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png'/>
                <div>Prime</div>
            </div>
            <img className='w-full h-40 object-cover rounded-md my-3' src='https://pyxis.nymag.com/v1/imgs/b8d/b1a/780ad74e4749445e4d1a6dd440c5a2a4c8-prime-lede.jpg'/>
            <div className='mt-5 mb-3 text-sm'>New shows</div>
            <div className='grid grid-cols-3 gap-3'>
                <div className=''>
                    <img className='object-cover h-36 rounded-sm' src='https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/Snapinsta.app_355431527_648558270467187_5594636517855612856_n_1080.jpg?size=*:900'/>
                </div>
                <div>
                    <img className='object-cover h-36 rounded-sm' src='https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/01/from-californication-to-girls-here-are-steamy-tv-shows-streaming-on-amazon-prime-video004.jpg'/>
                </div>
                <div>
                    <img className='object-cover h-36 rounded-sm' src='https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/06/Best-TV-Series-Amazon-Prime-Video.jpeg'/>
                </div>
            </div>
        </div>
  )
}

export default prime