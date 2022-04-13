import React from 'react'

function DeleteUser({handleDeleteShow}) {
  return (
    <div className='flex flex-col w-full h-full lg:w-[74vw] lg:h-[65vh] justify-center items-center  bg-transparent backdrop-blur-sm absolute z-10 space-y-5'>
        <div className='text-xl font-semibold'>Hapus User ini ?</div>
        <div className='flex space-x-2'>
            <button className='text-white bg-rose-500 rounded-lg w-32'>Yes</button>
            <button className='text-white bg-gray-500 rounded-lg w-32' onClick={handleDeleteShow}>No</button>
        </div>
    </div>
  )
}

export default DeleteUser