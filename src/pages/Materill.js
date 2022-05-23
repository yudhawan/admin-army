import React, { useEffect, useState } from 'react'
import {TrashIcon,SearchIcon} from '@heroicons/react/outline'
import {getData,deleteData} from '../features/materillSlice'
import {useDispatch,useSelector} from 'react-redux'
function Materill() {
  const dispatch = useDispatch()
  const {materill} = useSelector(state=>state.materill)
  const [search,setsearch]=useState('')
  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div className='flex flex-col space-y-1 lg:space-y-2'>
      <div className='flex space-x-2'>
        <div className='flex space-x-1 border border-gray-400 rounded-lg p-2 w-80 items-center'>
          <SearchIcon className='w-6 h-6 text-gray-400'/>
          <input className='outline-none w-full text-gray-500 bg-transparent' type="text" placeholder='Search...' value={search} onChange={(e)=>setsearch(e.target.value)} />
        </div>
      </div>
      <div className='flex'>
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4 space-x-1'>
                    <th className='text-gray-100 w-[15vw] text-sm lg:w-10'>No</th>
                    <th className='text-gray-100 w-[50vw] text-sm lg:w-52'>Nama Inventaris</th>
                    <th className='text-gray-100 w-[50vw] text-sm lg:w-44'>Tahun Pengadaan</th>
                    <th className='text-gray-100 w-[30vw] text-sm lg:w-44'>Status</th>
                    <th className='text-gray-100 w-[40vw] text-sm lg:w-60'>Perawatan</th>
                    <th className='text-gray-100 w-[20vw] text-sm lg:w-20'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              {materill.filter(val => val.nomor_kendaraan.toLowerCase().includes(search.toLowerCase())).map((item,index)=><tr className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-24 space-x-1" key={index+1}>
                <td className='h-auto w-[15vw] lg:w-10 '>{index+1}</td>
                <td className='h-auto w-[50vw] lg:w-52 text-sm'>{item.nomor_kendaraan}</td>
                <td className='h-auto w-[50vw] lg:w-44 text-sm'>{item.tahun_pengadaan}</td>
                <td className='h-auto w-[30vw] lg:w-44 text-sm'>{item.status}</td>
                <td className='h-auto w-[40vw] lg:w-60 text-sm line-clamp-2'><p className='text-gray-700  text-sm'>Perawatan setiap {item.periode_waktu+' '+item.periode} sekali pada tanggal {item.waktu_perawatan}</p></td>
                <td className='h-auto w-[20vw] lg:w-20'><TrashIcon className='w-5 h-5 text-red cursor-pointer' onClick={()=>dispatch(deleteData(item.id))} /></td>
              </tr>)}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Materill