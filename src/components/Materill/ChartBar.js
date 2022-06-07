import React from 'react'

function ChartBar() {
  return (
    <div className='flex space-x-2 lg:space-x-8'>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
            <div className='absolute left-0 top-0 shadow-md h-16 w-16 bg-white flex justify-center rounded-full items-center border-t-indigo-500 border-r-indigo-500 border-b-indigo-500 border-l-indigo-500 border-4 rotate-45'><p className='-rotate-45 text-gray-500 font-semibold'>100%</p></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
            <p className='text-gray-500 font-semibold ml-2 text-xs'>TOTAL INVENTARIS</p>
            <p className='text-gray-500 font-semibold'>1020</p>
            </div>
        </div>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
            <div className='absolute left-0 top-0 shadow-md h-16 w-16 bg-white flex justify-center rounded-full items-center border-t-green-500 border-r-green-500 border-b-green-500 border-l-transparent border-4 rotate-45'><p className='-rotate-45 text-gray-500 font-semibold'>80%</p></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
            <p className='text-gray-500 font-semibold ml-2 text-xs'>TOTAL SENJATA</p>
            <p className='text-gray-500 font-semibold'>800</p>
            </div>
        </div>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
            <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center border-t-yellow-500 border-r-transparent border-b-transparent border-l-transparent border-4 rotate-45 '><p className='-rotate-45 text-gray-500 font-semibold'>25%</p></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
            <p className='text-gray-500 font-semibold ml-2 text-xs'>TOTAL ALMATSUS</p>
            <p className='text-gray-500 font-semibold'>250</p>
            </div>
        </div>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
            <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center border-t-red border-r-red border-b-transparent border-l-transparent border-4 rotate-45 '><p className='-rotate-45 text-gray-500 font-semibold'>50%</p></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
            <p className='text-gray-500 font-semibold ml-2 text-xs'>TERLAMBAT MAINTENANCE</p>
            <p className='text-gray-500 font-semibold'>500</p>
            </div>
        </div>
    </div>
  )
}

export default ChartBar