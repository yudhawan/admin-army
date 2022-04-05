import React, { useState } from 'react'
import {TrashIcon,PencilIcon,XIcon} from '@heroicons/react/outline'
function JenisLaporan() {
    const [editlaporan,seteditlaporan] = useState({id:'',nama:'',color:''})
    const [showedit,setshowedit] = useState(false)
    const warna = ['#a61111','#a65611','#9ea611','#1da611','#112ca6','#9911a6']
    const [jenislaporan,setjenislaporan] = useState({
        nama:'',
        color:''
    })
    function handleEditshow(id,nama){
        seteditlaporan({id:id,nama:nama})
        setshowedit(!showedit)
    }
    return (
        <>
            {showedit?<div className='w-full space-y-1'>
                <form className='w-full flex flex-col items-start space-y-2'>
                    <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-fit lg:w-80'>
                    <input type="text" value={jenislaporan.nama} onChange={(e)=>setjenislaporan({...jenislaporan,nama:e.target.value})} className="w-full outline-none" placeholder="Masukan Jenis Laporan" />
                    </div>
                    <div className="flex space-x-3">
                    <p className="text-gray-500">Indikator</p>
                    <div className="flex space-x-1">
                    {
                        warna.map((val,index)=>(
                        <div key={index} id={val} style={{backgroundColor: val, border: `1px solid blue`}} className={`w-5 h-5 rounded-full hover:border hover:border-gray-300`} onClick={(e)=> setjenislaporan({...jenislaporan, color:e.target.id})}></div>
                        ))
                    }
                    </div>
                    </div>
                </form>
                <div className='flex space-x-2'>
                    <div className="cursor-pointer w-fit px-2 h-full rounded-md text-white bg-green-600 hover:bg-green-700">Update</div>
                    <div className='cursor-pointer text-white bg-hoveRed hover:bg-red rounded-md px-2 flex items-center' onClick={()=> setshowedit(!showedit)}>Cancel</div>
                </div>
            </div>:
            <>
            <form className='w-full flex flex-col space-y-1 items-start'>
                <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-fit lg:w-80'>
                <input type="text" value={jenislaporan.nama} onChange={(e)=>setjenislaporan({...jenislaporan,nama:e.target.value})} className="w-full outline-none" placeholder="Masukan Jenis Laporan" />
                </div>
                <div className="flex space-x-3">
                <p className="text-gray-500">Indikator</p>
                <div className="flex space-x-1">
                {
                    warna.map((val,index)=>(
                    <div key={index} id={val} style={{backgroundColor: val, border: (jenislaporan.color===val)?`2px solid #bab6ab`:``}} className={`w-5 h-5 rounded-full hover:border hover:border-gray-300`} onClick={(e)=> setjenislaporan({...jenislaporan, color:e.target.id})}></div>
                    ))
                }
                </div>
                </div>
                <div className="w-fit px-2 h-full bg-green-600 rounded-sm text-white cursor-pointer hover:bg-green-700 ">Add</div>
            </form>
            <div className='flex w-full '>
            <table className='w-full text-left overflow-x-scroll'>
                <thead className='flex w-fit bg-white rounded-tr-md rounded-tl-md border-b border-gray-200'>
                    <tr className='flex w-fit py-3 px-4 space-x-2'>
                        <th className='text-black w-10 lg:w-10'>No</th>
                        <th className='text-black w-20 lg:w-40'>Jenis Laporan</th>
                        <th className='text-black w-20 lg:w-40'>Indikator</th>
                        <th className='text-black w-20 lg:w-20'>Actions</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
                <tr  className="flex w-fit py-3 px-4 border-b border-gray-100 h-12 space-x-2">
                    <td className='h-auto w-10 line-clamp-1 lg:w-10'>1</td>
                    <td className='h-auto w-20 line-clamp-1 lg:w-40'>Laporan 1</td>
                    <td className='h-auto w-20 line-clamp-1 lg:w-40'>Laporan 1</td>
                    <td className='h-auto w-20 lg:w-20 flex space-x-1'>
                    <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={()=>handleEditshow(null,null,null)} />
                    <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={()=>console.log('delet')}/>
                    </td>
                </tr>
                </tbody>
            </table>
            </div></>}
        </>
    )
}

export default JenisLaporan