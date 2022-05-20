import React, { useEffect, useState } from 'react'
import {TrashIcon,PencilIcon,XIcon} from '@heroicons/react/outline'
import {useDispatch,useSelector} from 'react-redux'
import { getJenisLaporan,postJenisLaporan,deleteJenisLaporan,updateJenisLaporan } from '../../features/catandlapSlice'
function JenisLaporan() {
    const dispatch = useDispatch()
    const {jenisLaporan,loading,error,status,message} = useSelector(state=>state.catandlap)
    const [editlaporan,seteditlaporan] = useState({id:'',nama:'',color:''})
    const [showedit,setshowedit] = useState(false)
    const warna = ['#a61111','#a65611','#9ea611','#1da611','#112ca6','#9911a6']
    const [validation,setvalidation] = useState('')
    const [jenislaporan,setjenislaporan] = useState({
        nama:'',
        color:''
    })
    function handleEditshow(id,nama,color){
        seteditlaporan({id:id,nama:nama,color:color})
        setshowedit(!showedit)
    }
    function handleValidation(){
        if(jenislaporan.nama==='') return setvalidation('Nama tidak boleh kosong')
        if(jenislaporan.color==='') return setvalidation('Indikator tidak boleh kosong')
        setvalidation('')
        return submit()
    }
    const submit=()=> {
        dispatch(postJenisLaporan(jenislaporan))
        setjenislaporan({
            nama:'',
            color:''
        })
    }
    useEffect(()=>{
        dispatch(getJenisLaporan())
    },[])
    return (
        <>
            {showedit?<div className='w-full space-y-1'>
                <form className='w-full flex flex-col items-start space-y-2'>
                    <div className='flex p-1 lg:p-2 border border-[#ab54db] rounded-lg w-fit lg:w-80'>
                    <input type="text" value={editlaporan.nama} onChange={(e)=>seteditlaporan({...editlaporan,nama:e.target.value})} className="w-full outline-none"/>
                    </div>
                    <div className="flex space-x-3">
                    <p className="text-gray-500">Indikator</p>
                    <div className="flex space-x-1">
                    {
                        warna.map((val,index)=>(
                        <div key={index} id={val} style={{backgroundColor: val, border: (editlaporan.color===val)?`2px solid #bab6ab`:``}} className={`w-5 h-5 rounded-full hover:border hover:border-gray-300`} onClick={(e)=> seteditlaporan({...editlaporan, color:e.target.id})}></div>
                        ))
                    }
                    </div>
                    </div>
                </form>
                <div className='flex space-x-2'>
                    <div className="cursor-pointer w-fit px-2 h-full rounded-md text-white bg-green-600 hover:bg-green-700" onClick={()=>{
                        dispatch(updateJenisLaporan(editlaporan))
                        seteditlaporan({id:'',nama:'',color:''})
                        setshowedit(!showedit)
                    }}>Update</div>
                    <div className='cursor-pointer text-white bg-hoveRed hover:bg-red rounded-md px-2 flex items-center' onClick={()=> setshowedit(!showedit)}>Cancel</div>
                </div>
            </div>:
            <>
            <form className='w-full flex flex-col space-y-1 items-start' onSubmit={(e)=>{
                e.preventDefault()
                handleValidation()
            }}>
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
                <div className="w-fit px-2 h-full bg-green-600 rounded-sm text-white cursor-pointer hover:bg-green-700 " onClick={handleValidation}>Add</div>
            </form>
            {validation&&<div className='w-fit text-rose-600 text-sm bg-rose-100'>{validation}</div>}
            <div className='flex w-full '>
            <table className='w-full text-left overflow-x-scroll'>
                <thead className='flex w-fit bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                    <tr className='flex w-fit py-3 px-4 space-x-2'>
                        <th className='text-black w-10 lg:w-10'>No</th>
                        <th className='text-black w-20 lg:w-60'>Jenis Laporan</th>
                        <th className='text-black w-20 lg:w-20'>Indikator</th>
                        <th className='text-black w-20 lg:w-20'>Actions</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
                    {
                        jenisLaporan&&jenisLaporan.map((item,index)=> (
                        <tr key={index+1} className="flex w-fit py-3 px-4 border-b border-gray-100 h-12 space-x-2">
                            <td className='h-auto w-10 line-clamp-1 lg:w-10'>{index+1}</td>
                            <td className='h-auto w-20 line-clamp-1 lg:w-60'>{item.nama}</td>
                            <td className='h-auto w-20 line-clamp-1 lg:w-20'><div style={{backgroundColor: item.color}} className={`w-5 h-5 rounded-full hover:border hover:border-gray-300`} onClick={(e)=> setjenislaporan({...jenislaporan, color:e.target.id})}></div></td>
                            <td className='h-auto w-20 lg:w-20 flex space-x-1'>
                            <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={()=>handleEditshow(item.id,item.nama,item.color)} />
                            <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={()=> dispatch(deleteJenisLaporan(item.id))}/>
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

export default JenisLaporan