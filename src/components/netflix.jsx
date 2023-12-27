import React from 'react'

const netflix = () => {
  return (
            <div className='w-1/3 p-4 bg-gray-900 bg-opacity-50 rounded-xl mr-4'>
                <div className='mb-2 flex items-center'>
                    <img className='h-8 w-8 mr-2 rounded-lg' src='https://yt3.googleusercontent.com/ytc/AIf8zZQKCG8w7wVznj9sHhrHge3cKYVuUblDUuOaUp_psQ=s900-c-k-c0x00ffffff-no-rj'/>
                    <div>Netflix</div>
                </div>
                <img className='w-full h-40 object-cover rounded-md my-3' src='https://economictimes.indiatimes.com/thumb/msid-85768771,width-1200,height-900,resizemode-4,imgsize-37998/kota-factory.jpg?from=mdr'/>
                <div className='mt-5 mb-3 text-sm'>New shows</div>
                <div className='grid grid-cols-3 gap-3'>
                    <div className=''>
                        <img className='object-cover h-36 rounded-sm' src='https://images.summitmedia-digital.com/candy/images/2023/01/11/netflix-shows-new-seasons-for-2023.jpg'/>
                    </div>
                    <div>
                        <img className='object-cover h-36 rounded-sm' src='https://img.buzzfeed.com/buzzfeed-static/static/2019-03/13/15/asset/buzzfeed-prod-web-03/sub-buzz-7114-1552504628-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto'/>
                    </div>
                    <div>
                        <img className='object-cover h-36 rounded-sm' src='https://api.ellecanada.com/app/uploads/2022/12/ginny-georgia-season-2.png'/>
                    </div>
                </div>
            </div>
        
  )
}

export default netflix