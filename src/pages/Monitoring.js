import {SearchIcon,AdjustmentsIcon} from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import ListLaporan from '../components/Monitoring/ListLaporan'
import MapZone from '../components/Monitoring/MapZone'
function Monitoring() {
  const [filter,setfilter]=useState({
    time:null,
    laporan:''
  })
  const [showfilter,setshowfilter]=useState(false)
  return (
    <div className='flex w-[40vw]'>
      <div className='w-full h-auto flex flex-col space-y-5'>
        <div className='flex bg-white rounded-lg space-x-2 p-2 px-3 items-center relative'>
          <SearchIcon className='text-gray-500 w-5 h-5' />
          <input type='text' className='outline-none w-full' placeholder='Search...' />
          <AdjustmentsIcon className={`${showfilter?'text-red':'text-gray-500'} w-5 h-5 hover:text-hoveRed cursor-pointer`} onClick={()=>setshowfilter(!showfilter)} />
          {showfilter&&<div className='absolute -bottom-24 z-10 right-0 bg-[#F4DFE1] rounded-lg flex flex-col p-2 space-y-1'>
            <div className='flex items-center -space-x-10'>
                <p className='font-poppins text-gray-500 text-sm'>Terbaru?</p>
                <input type='checkbox' className='outline-none w-full' value={filter.time} onChange={(e)=> setfilter({...filter, time:e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <p className='font-poppins text-gray-500 text-sm'>Laporan</p>
              <div className='rounded-md border border-gray-400 bg-white py-1 w-fit px-2'>
                  <select className='outline-none w-full text-sm text-gray-500' value={filter.laporan} onChange={(e)=> setfilter({...filter, laporan:e.target.value})}>
                      <option value="">--/--</option>
                      <option value="laporan_harian">Laporan harian</option>
                  </select>
              </div>
            </div>
          </div>}
        </div>
        <ListLaporan filter={filter} />
      </div>
      <div className='absolute right-5'>
        <div>
          <MapZone long={null} lat={null}/>
        </div>
      </div>
    </div>
  )
}

export default Monitoring