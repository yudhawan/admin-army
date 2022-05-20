import React, { useEffect, useState } from 'react'
import {TrashIcon,PencilIcon,XIcon} from '@heroicons/react/outline'
import {useDispatch,useSelector} from 'react-redux'
import { getCategories,postCategories,clearMsgAndStatus,deleteCategories,updateCategories } from '../../features/catandlapSlice'
function Kategori() {
    const dispatch = useDispatch()
    const {categories,message,error,loading} = useSelector(state=>state.catandlap)
    const [kategori,setkategori] = useState('')
    const [editkategori,seteditkategori] = useState({id:'',kategori:''})
    const [showedit,setshowedit] = useState(false)
    function handleEditshow(id,nama){
        seteditkategori({id:id,kategori:nama})
        setshowedit(!showedit)
    }
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    return (
        <>
            {showedit?<div className='w-full h-[65vh] space-y-1 '>
                <form className='w-full flex flex-col items-start'  onSubmit={(e)=>{
                    e.preventDefault()
                    dispatch(updateCategories(editkategori))
                    setkategori('')
                    setshowedit(!showedit)
                }}>
                    <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-60 divide-x'>
                        <input type="text" value={editkategori.kategori} onChange={(e)=>seteditkategori({...editkategori,kategori:e.target.value})} className="w-full outline-none"/>
                        <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black" onClick={()=> {
                            dispatch(updateCategories(editkategori))
                            setkategori('')
                            setshowedit(!showedit)
                            }}>Update</div>
                    </div>
                </form>
                <div className='cursor-pointer text-white w-fit bg-hoveRed hover:bg-red rounded-md px-2 flex items-center' onClick={()=> setshowedit(!showedit)}>Cancel</div>
            </div>:
            <>
            <form className='w-full flex flex-col items-start' onSubmit={(e)=>{
                e.preventDefault()
                dispatch(postCategories(kategori))
                setkategori('')
            }}>
                <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-60 divide-x'>
                <input type="text" value={kategori} onChange={(e)=>setkategori(e.target.value)} className="w-full outline-none" placeholder="Masukan Kategori" />
                <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black" onClick={()=> {
                    dispatch(postCategories(kategori))
                    setkategori('')
                    }}>Add</div>
                </div>
            </form>
            <div className='flex w-full '>
            <table className='w-full text-left overflow-x-scroll'>
                <thead className='flex w-fit bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                    <tr className='flex w-fit py-3 px-4 space-x-2'>
                        <th className='text-gray-100 w-[15vw] lg:w-10'>No</th>
                        <th className='text-gray-100 w-[50vw] lg:w-40'>Kategori</th>
                        <th className='text-gray-100 w-[20vw] lg:w-20'>Actions</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto w-full h-[50vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
                    {
                        categories&&categories.map((item,index)=>(
                            <tr key={index+1} className="flex w-fit py-3 px-4 border-b border-gray-100 h-12 space-x-2">
                                <td className='h-auto w-[15vw] lg:w-10'>{index+1}</td>
                                <td className='h-auto w-[50vw] lg:w-40'>{item.kategori}</td>
                                <td className='h-auto w-[20vw] lg:w-20 flex space-x-1'>
                                <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={()=>handleEditshow(item.id,item.kategori)} />
                                <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={()=> dispatch(deleteCategories(item.id))}/>
                                </td>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
            </div></>}
        </>
    )
}

export default Kategori