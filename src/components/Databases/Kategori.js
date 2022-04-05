import React, { useState } from 'react'
import {TrashIcon,PencilIcon,XIcon} from '@heroicons/react/outline'
function Kategori() {
    const [kategori,setkategori] = useState('')
    const [editkategori,seteditkategori] = useState({id:'',nama:''})
    const [showedit,setshowedit] = useState(false)
    function handleEditshow(id,nama){
        seteditkategori({id:id,nama:nama})
        setshowedit(!showedit)
    }
    
    return (
        <>
            {showedit?<div className='w-full h-[65vh] space-y-1 '>
                <form className='w-full flex flex-col items-start'>
                    <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-60 divide-x'>
                        <input type="text" value={kategori} onChange={(e)=>setkategori(e.target.value)} className="w-full outline-none"/>
                        
                    </div>
                </form>
                <div className='flex space-x-2'>
                    <div className="cursor-pointer w-fit px-2 h-full rounded-md text-white bg-green-600 hover:bg-green-700">Update</div>
                    <div className='cursor-pointer text-white bg-hoveRed hover:bg-red rounded-md px-2 flex items-center' onClick={()=> setshowedit(!showedit)}>Cancel</div>
                </div>
            </div>:
            <>
            <form className='w-full flex flex-col items-start'>
                <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-60 divide-x'>
                <input type="text" value={kategori} onChange={(e)=>setkategori(e.target.value)} className="w-full outline-none" placeholder="Masukan Kategori" />
                <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black">Add</div>
                </div>
            </form>
            <div className='flex w-full '>
            <table className='w-full text-left overflow-x-scroll'>
                <thead className='flex w-fit bg-white rounded-tr-md rounded-tl-md border-b border-gray-200'>
                    <tr className='flex w-fit py-3 px-4 space-x-2'>
                        <th className='text-black w-[15vw] lg:w-10'>No</th>
                        <th className='text-black w-[50vw] lg:w-40'>Kategori</th>
                        <th className='text-black w-[20vw] lg:w-20'>Actions</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
                <tr  className="flex w-fit py-3 px-4 border-b border-gray-100 h-12 space-x-2">
                    <td className='h-auto w-[15vw] lg:w-10'>1</td>
                    <td className='h-auto w-[50vw] lg:w-40'>Laporan 1</td>
                    <td className='h-auto w-[20vw] lg:w-20 flex space-x-1'>
                    <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={()=>handleEditshow(null,null)} />
                    <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={()=>console.log('delet')}/>
                    </td>
                </tr>
                </tbody>
            </table>
            </div></>}
        </>
    )
}

export default Kategori