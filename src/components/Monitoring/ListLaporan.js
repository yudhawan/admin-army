import React from 'react'

function ListLaporan() {
  return (
    <div>
        <div className='w-full h-40 bg-white flex justify-between rounded-xl items-center p-4 space-x-5 relative'>
            <figure className='w-full h-full'>
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' className='w-full h-full object-cover rounded-lg' />
            </figure>
            <div className='w-full flex-col space-y-4'>
                <div className='text-lg text-black font-semibold'>Kegiatan Vaksin Massal</div>
                <div className='text-gray-500 line-clamp-2 text-xs'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </div>
                <div className='text-xs text-blue-500 cursor-pointer'>Location </div>
            </div>
            <div className='absolute bg-black w-5 h-5 rounded-lg top-2 right-2'></div>
        </div>
    </div>
  )
}

export default ListLaporan