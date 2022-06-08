import React, { useEffect, useState } from 'react'
import {TrashIcon,PencilIcon,XIcon} from '@heroicons/react/outline'
import {useDispatch,useSelector} from 'react-redux'
import { getSatuan,postSatuan,clearMsgAndStatus,deleteSatuan,updateSatuan } from '../../features/catandlapSlice'
function Satuan() {
    const dispatch = useDispatch()
    const {satuan,message,error,loading} = useSelector(state=>state.catandlap)
    const [data,setdata] = useState('')
    const [editdata,seteditdata] = useState({id:'',satuan:''})
    const [showedit,setshowedit] = useState(false)
    function handleEditshow(id,nama){
        seteditdata({id:id,satuan:nama})
        setshowedit(!showedit)
    }
    useEffect(()=>{
        dispatch(getSatuan())
    },[])
    return (
        <>
        {
            showedit?<div className='w-full h-[65vh] space-y-1 '>
            <form className='w-full flex flex-col items-start'  onSubmit={(e)=>{
                e.preventDefault()
                dispatch(updateSatuan(editdata))
                setdata('')
                setshowedit(!showedit)
            }}>
                <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-60 divide-x'>
                    <input type="text" value={editdata.satuan} onChange={(e)=>seteditdata({...editdata,satuan:e.target.value})} className="w-full outline-none"/>
                    <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black" onClick={()=> {
                        dispatch(updateSatuan(editdata))
                        setdata('')
                        setshowedit(!showedit)
                        }}>Update</div>
                </div>
            </form>
            <div className='cursor-pointer text-white w-fit bg-hoveRed hover:bg-red rounded-md px-2 flex items-center' onClick={()=> setshowedit(!showedit)}>Cancel</div>
            </div>:
            <>
            <form className='w-full flex flex-col items-start' onSubmit={(e)=>{
                e.preventDefault()
                dispatch(postSatuan(data))
                setdata('')
            }}>
                <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-60 divide-x'>
                <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} className="w-full outline-none" placeholder="Masukan Satuan" />
                <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black" onClick={()=> {
                    dispatch(postSatuan(data))
                    setdata('')
                    }}>Add</div>
                </div>
            </form>
            <div className='flex w-full '>
            <table className='w-full text-left overflow-x-scroll'>
                <thead className='flex w-fit bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                    <tr className='flex w-fit py-3 px-4 space-x-2'>
                        <th className='text-gray-100 w-[15vw] lg:w-10'>No</th>
                        <th className='text-gray-100 w-[50vw] lg:w-40'>data</th>
                        <th className='text-gray-100 w-[20vw] lg:w-20'>Actions</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto w-full h-full flex flex-col bg-white rounded-br-md rounded-bl-md'>
                    {
                        satuan&&satuan.map((item,index)=>(
                            <tr key={index+1} className="flex w-fit py-3 px-4 border-b border-gray-100 h-12 space-x-2">
                                <td className='h-auto w-[15vw] lg:w-10'>{index+1}</td>
                                <td className='h-auto w-[50vw] lg:w-40'>{item.nama}</td>
                                <td className='h-auto w-[20vw] lg:w-20 flex space-x-1'>
                                <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={()=>handleEditshow(item.id,item.nama)} />
                                <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={()=> dispatch(deleteSatuan(item.id))}/>
                                </td>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
            </div></>
        }
        </>
    )
}

export default Satuan