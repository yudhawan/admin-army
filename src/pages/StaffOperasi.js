import React, { useState } from 'react'
import {SearchIcon,CalendarIcon,DownloadIcon,TrashIcon} from '@heroicons/react/outline'
function StaffOperasi() {
  const [action,setaction]=useState(null)
  return (
    <div className='flex flex-col space-y-2 lg:space-y-5 w-full'>
      <div className='flex flex-col lg:flex-row space-x-1 lg:space-x-2 w-full items-center'>
            <div className='flex space-x-1 items-center border border-gray-400 rounded-md w-full px-3 py-2'>
                <SearchIcon className='h-6 w-6 text-gray-400' />
                <input type="text" placeholder='Search...' className='outline-none w-full bg-transparent text-gray-400' />
            </div>
        </div>
      <div className='flex flex-wrap gap-4 w-full h-full border-t border-slate-200 py-2 lg:py-5 justify-center'>
            {
                ['pdf','doc','exe','xls','mp4','jpeg'].map(items=><div className='flex flex-col justify-center p-2 items-center w-44 h-52 border border-gray-200 hover:border-red rounded-lg cursor-pointer' onClick={()=>setaction(items)}>
                <div className='w-36 h-36 flex justify-center items-center bg-gray-500 rounded-lg'>
                    {
                        (action===items)?<div className='relative flex flex-col space-y-4 bg-gray-500 rounded-lg'>
                        <button className="flex space-x-1 items-center border border-green-400 px-2 py-1 rounded-md">
                            <DownloadIcon className='text-green-500 w-5 h-5' />
                            <p className='text-white'>Download</p>
                        </button>
                        <button className="flex space-x-1 items-center border border-rose-400 px-2 py-1 rounded-md" onClick={()=>console.log('asdsa')}>
                            <TrashIcon className='text-rose-500 w-5 h-5' />
                            <p className='text-white'>Delete</p>
                        </button>
                        </div>:
                        <h4 className='text-gray-200 text-3xl'>{items}</h4>
                    }
                </div>
                <h5 className='text-gray-600 text-xs font-semibold line-clamp-2 self-start'>Server tambahan barang dan jasa UMP5.pdf</h5>
                <div className="flex space-x-1 self-start items-center mt-1">
                    <CalendarIcon className='text-green-500 w-4 h-4 ' />
                    <h5 className='text-gray-600 text-xs'>12/05/2022</h5>
                </div>
                </div>)
            }
            
        </div>
    </div>
  )
}

export default StaffOperasi