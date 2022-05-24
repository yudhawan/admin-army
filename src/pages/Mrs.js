import {SearchIcon,TrashIcon,} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import EditMrs from '../components/MRS/EditMrs'
import {getData,deleteData} from '../features/mrsSlice'
function Mrs() {
  const dispatch = useDispatch()
  const [editshow,seteditshow]=useState(0)
  const {mrs,loading} = useSelector(state=>state.mrs)
  const [search,setsearch]=useState('')
  const handleEdit=()=> seteditshow(0)
  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div className='flex flex-col w-full h-full space-y-5'>
      
      {editshow?<EditMrs handleEdit={handleEdit} id={editshow} />:<><div className='flex w-full items-center space-x-2'>
        
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 py-1 space-x-1'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' value={search} onChange={(e)=>setsearch(e.target.value)} />
          </div>
        </div>
        <div className='text-gray-400 hidden lg:block'>0 Users</div>
        </div>
      <div className='flex'>
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4'>
                    <th className='text-gray-100 w-[15vw] lg:w-10'>No</th>
                    <th className='text-gray-100 w-[50vw] lg:w-60'>Nama</th>
                    <th className='text-gray-100 w-[85vw] lg:w-72'>Diagnosis</th>
                    <th className='text-gray-100 w-[40vw] lg:w-60'>Control Ulang</th>
                    <th className='text-gray-100 w-[20vw] lg:w-20'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              
               {mrs.filter(val => val.nama.toLowerCase().includes(search.toLowerCase())).map((item,index)=> <tr key={index+1} className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-auto">
                    <td className='h-auto w-[15vw] lg:w-10'>{index+1}</td>
                    <td className='h-auto w-[50vw] lg:w-60 text-sm'>{item.nama}</td>
                    <td className='h-auto w-[85vw] lg:w-72 text-sm line-clamp-2'>{item.diagnosis}</td>
                    <td className='h-auto w-[40vw] lg:w-60 text-sm line-clamp-2'>{item.waktuKontrolUlang}</td>
                    <td className='h-auto w-[20vw] lg:w-20 text-sm'>
                      <TrashIcon className='text-red-500 w-6 h-6' onClick={()=>dispatch(deleteData(item.id))} />
                    </td>
                </tr>)}
                
            </tbody>
        </table>
      </div></>}
    </div>
  )
}

export default Mrs