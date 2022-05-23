import React, { useEffect, useState } from 'react'
import {SearchIcon,CalendarIcon,DownloadIcon,TrashIcon} from '@heroicons/react/outline'
import {useDispatch,useSelector} from 'react-redux'
import {getDrive,downloadFile} from '../features/renSlice'
function StaffPerencanaan() {
    const dispatch = useDispatch()
    const {ren,loading} = useSelector(state=>state.ren)
    const [search,setsearch] = useState('')
  const [action,setaction]=useState(null)
  useEffect(()=>{
    dispatch(getDrive())
},[])
  return (
    <div className='flex flex-col space-y-2 lg:space-y-5 w-full'>
      <div className='flex flex-col lg:flex-row space-x-1 lg:space-x-2 w-full items-center'>
            <div className='flex space-x-1 items-center border border-gray-400 rounded-md w-full px-3 py-2'>
                <SearchIcon className='h-6 w-6 text-gray-400' />
                <input type="text" placeholder='Search...' onChange={(e)=>setsearch(e.target.value) } value={search} className='outline-none w-full bg-transparent text-gray-400' />
            </div>
        </div>
      <div className='flex flex-wrap gap-4 w-full h-full border-t border-slate-200 py-2 lg:py-5 justify-center'>
      {
                loading?
                [1,2,3,4,5].map(items=><div key={items} className='flex flex-col justify-center p-2 items-center w-44 h-52 border border-gray-200 hover:border-blue-300 rounded-lg space-y-2'>
                    <div className='w-36 h-36 rounded-lg bg-gray-300 animate-pulse'></div>
                    <div className='w-24 h-4 bg-gray-300 animate-pulse self-start'></div>
                    <div className='w-20 h-4 bg-gray-300 animate-pulse self-start'></div>
                </div>):
                ren?.filter(value=> value.originalName.toLowerCase().includes(search.toLowerCase())).map((items,index)=>{
                let extension = items.originalName.split('.').pop()
                let date = new Date(items.createdAt).toISOString().substring(0,10)
                return(<div key={index+1} className='flex flex-col justify-center p-2 items-center w-44 h-52 border border-gray-200 hover:border-blue-300 rounded-lg cursor-pointer' onClick={()=>setaction(items.id)}>
                <div className='w-36 h-36 flex justify-center items-center bg-gray-500 rounded-lg'>
                    {
                        (action===items.id)?<div className='relative flex flex-col space-y-4 bg-gray-500 rounded-lg'>
                        <button className="flex space-x-1 items-center border border-green-400 px-2 py-1 rounded-md" onClick={()=>dispatch(downloadFile({filename:items.name,originalname:items.originalName,dir:items.maindir}))}>
                            <DownloadIcon className='text-green-500 w-5 h-5' />
                            <p className='text-white'>Download</p>
                        </button>
                        </div>:
                        <h4 className='text-gray-200 text-3xl'>{extension}</h4>
                    }
                </div>
                <h5 className='text-gray-600 text-xs font-semibold line-clamp-1 self-start'>{items.originalName}</h5>
                <div className="flex space-x-1 self-start items-center mt-1">
                    <CalendarIcon className='text-green-500 w-4 h-4 ' />
                    <h5 className='text-gray-600 text-xs'>{date}</h5>
                </div>
                </div>)})
            }
            
        </div>
    </div>
  )
}

export default StaffPerencanaan