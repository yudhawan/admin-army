import React from 'react'
import {TrashIcon,SearchIcon} from '@heroicons/react/outline'
function Materill() {
  return (
    <div className='flex flex-col space-y-1 lg:space-y-2'>
      <div className='flex space-x-2'>
        <div className='flex space-x-1 border border-gray-400 rounded-lg p-2 w-80 items-center'>
          <SearchIcon className='w-6 h-6 text-gray-400'/>
          <input className='outline-none w-full text-gray-500 bg-transparent' type="text" placeholder='Search...' />
        </div>
      </div>
      <div className='flex'>
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4 space-x-1'>
                    <th className='text-gray-100 w-[15vw] text-sm lg:w-10'>No</th>
                    <th className='text-gray-100 w-[50vw] text-sm lg:w-52'>Nama Inventaris</th>
                    <th className='text-gray-100 w-[50vw] text-sm lg:w-44'>Tahun Pembuatan</th>
                    <th className='text-gray-100 w-[30vw] text-sm lg:w-44'>Status</th>
                    <th className='text-gray-100 w-[40vw] text-sm lg:w-60'>Perawatan</th>
                    <th className='text-gray-100 w-[20vw] text-sm lg:w-20'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              <tr className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-24 space-x-1">
                <td className='h-auto w-[15vw] lg:w-10 '></td>
                <td className='h-auto w-[50vw] lg:w-52 text-sm'></td>
                <td className='h-auto w-[50vw] lg:w-44 text-sm'></td>
                <td className='h-auto w-[30vw] lg:w-44 text-sm'></td>
                <td className='h-auto w-[40vw] lg:w-60 text-sm line-clamp-2'></td>
                <td className='h-auto w-[20vw] lg:w-20'></td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Materill