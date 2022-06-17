import React, { useEffect, useState } from 'react'
import {TrashIcon,DotsVerticalIcon,XIcon} from '@heroicons/react/outline'
import {useDispatch,useSelector} from 'react-redux'
import { getKeterangan,postKeterangan,deleteKeterangan,updateKeterangan, getSubKeterangan,postSubKeterangan,deleteSubKeterangan,updateSubKeterangan } from '../../features/catandlapSlice'
function Keterangan() {
    const dispatch = useDispatch()
    const {keterangan,subKeterangan,message,error,loading} = useSelector(state=>state.catandlap)
    const [ket,setket] = useState('')
    const [idket,setidket] = useState(null)
    const [subket,setsubket] = useState('')
    const [status,setstatus] = useState('hadir')
    const [editket,seteditket] = useState({id:null,ket:''})
    const [editsub,seteditsub] = useState({id:null,sub:''})
    const [showeditket,setshoweditket] = useState(false)
    const [showeditsub,setshoweditsub] = useState(false)
    function handleEditKeteranganShow(id,nama){
        seteditket({id:id,ket:nama})
        setshoweditket(!showeditket)
    }
    function handleEditSubShow(id,nama){
        seteditsub({id:id,sub:nama})
        setshoweditsub(!showeditsub)
    }
    useEffect(()=>{
        dispatch(getKeterangan())
        dispatch(getSubKeterangan())
    },[])
  return (
    <>
        <form className='w-full flex items-start space-x-2' onSubmit={(e)=>{
            e.preventDefault()
            dispatch(postKeterangan({ket:ket, status:status}))
            setket('')
            setstatus('hadir')
        }}>
            <select className='text-gray-500 p-2 border border-slate-300 outline-none rounded-lg' value={status} onChange={(e)=>setstatus(e.target.value)}>
                <option value="hadir">Hadir</option>
                <option value="tidak">Tidak Hadir</option>
            </select>
            <div className='flex p-1 lg:p-2 border border-slate-300 rounded-lg w-fit divide-x'>
                <input type="text" value={ket} onChange={(e)=>setket(e.target.value)} className="w-full outline-none text-gray-500" placeholder="Masukan Keterangan" />
            </div>
            <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black hover:border-green-300 border border-gray-300 hover:bg-green-200 flex items-center rounded-lg py-1" onClick={()=> {
            dispatch(postKeterangan({ket:ket, status:status}))
            setket('')
            setstatus('hadir')
            }}>Add</div>
        </form>
        <div className='flex w-full border border-indigo-300 justify-between px-4 py-4 rounded-xl space-x-2 lg:space-x-4 h-full'>
            <div className='flex flex-col items-center w-full space-y-1'>
                <p className='text-gray-500 font-bold'>Keterangan</p>
                <div className='w-full h-[1px] bg-slate-400'></div>
                <div className='w-full h-auto bg-orange-100 flex flex-wrap rounded-lg p-4 gap-2 relative'>
                    {showeditket&&
                    <div className='w-full h-full bg-transparent backdrop-blur-lg rounded-lg flex justify-center items-center absolute left-0 top-0 p-4'>
                        <form className='w-full flex flex-col lg:flex-row space-y-2 lg:space-x-2 items-start'  onSubmit={(e)=>{
                            e.preventDefault()
                            dispatch(updateKeterangan(editket))
                            setket('')
                            setshoweditket(!showeditket)
                        }}>
                            <div className='flex p-1 lg:p-2 border border-slate-400 rounded-lg w-60 divide-x'>
                                <input type="text" value={editket.ket} onChange={(e)=>seteditket({...editket,ket:e.target.value})} className="w-full outline-none bg-transparent text-gray-500"/>
                            </div>
                            <div className="w-fit px-2 rounded-lg border border-orange-500 hover:border-orange-500 hover:bg-orange-500 h-full text-orange-600 cursor-pointer hover:text-white" onClick={()=> {
                            dispatch(updateKeterangan(editket))
                            setket('')
                            setshoweditket(!showeditket)
                            }}>Update</div>
                            <div className="w-fit px-2 rounded-lg  h-full bg-red cursor-pointer text-white" onClick={()=> setshoweditket(false)}>Close</div>
                        </form>
                    </div>}
                    {keterangan?.map((item,index)=> 
                    <div key={index+1} className={`text-white px-1 rounded-md w-fit flex items-center space-x-2 h-fit cursor-pointer ${(idket==item.id)?'bg-orange-400':'bg-orange-600'}`} onClick={()=>setidket(item.id)}>
                        <p>{item.keterangan}</p>
                        <div className='flex items-center space-x-1'>
                            <DotsVerticalIcon className='text-white w-5 h-5 cursor-pointer hover:border-[1px] hover:border-slate-100 hover:rounded-full' onClick={()=>handleEditKeteranganShow(item.id,item.keterangan)}/>
                            <XIcon className='text-white w-5 h-5 cursor-pointer hover:border-[1px] hover:border-slate-100 hover:rounded-full' onClick={()=>dispatch(deleteKeterangan(item.id))}/>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='flex flex-col items-center w-full space-y-1'>
                <p className='text-gray-500 font-bold'>Sub Keterangan</p>
                <div className='w-full h-[1px] bg-slate-400'></div>
                <div className='w-full h-auto bg-violet-100 flex flex-col space-y-2 p-4 rounded-lg relative'>
                    <form className='flex px-2 py-1 border border-slate-300 rounded-lg w-fit divide-x bg-white' onSubmit={(e)=>{
                        e.preventDefault()
                        dispatch(postSubKeterangan({keteranganId:idket,subketerangan:subket}))
                        setsubket('')
                    }}>
                        <input type="text" value={subket} onChange={(e)=>setsubket(e.target.value)} className="w-full outline-none text-gray-500" placeholder="Sub Keterangan" />
                        <div className="w-fit px-2 h-full text-gray-500 cursor-pointer hover:text-black" onClick={()=> {
                        dispatch(postSubKeterangan({keteranganId:idket,subketerangan:subket}))
                        setsubket('')
                        }}>Add</div>
                    </form>
                    {showeditsub&&
                    <div className='w-full h-full bg-transparent backdrop-blur-lg rounded-lg flex justify-center items-center absolute left-0 top-0 p-4'>
                        <form className='w-full flex flex-col lg:flex-row space-y-2 lg:space-x-2 items-start'  onSubmit={(e)=>{
                            e.preventDefault()
                            dispatch(updateSubKeterangan(editsub))
                            setshoweditsub(!showeditsub)
                        }}>
                            <div className='flex p-1 lg:p-2 border border-slate-400 rounded-lg w-60 divide-x'>
                                <input type="text" value={editsub.sub} onChange={(e)=>seteditsub({...editsub,sub:e.target.value})} className="w-full outline-none bg-transparent text-gray-500"/>
                            </div>
                            <div className="w-fit px-2 rounded-lg border border-blue-500 hover:border-blue-500 hover:bg-blue-500 h-full text-blue-600 cursor-pointer hover:text-white" onClick={()=> {
                            dispatch(updateSubKeterangan(editsub))
                            setshoweditsub(!showeditsub)
                            }}>Update</div>
                            <div className="w-fit px-2 rounded-lg  h-full bg-red cursor-pointer text-white" onClick={()=> setshoweditsub(false)}>Close</div>
                        </form>
                    </div>}
                    <div className='flex w-full h-full flex flex-wrap rounded-lg gap-2'>
                        {subKeterangan?.filter(val => val.keteranganId==idket).map((item,index)=>
                        <div key={index+1} className={`text-white px-1 rounded-md w-fit h-fit flex items-center space-x-2 bg-violet-600`}>
                            <p>{item.subketerangan}</p>
                            <div className='flex items-center space-x-1'>
                                <DotsVerticalIcon className='text-white w-5 h-5 cursor-pointer hover:border-[1px] hover:border-slate-100 hover:rounded-full' onClick={()=>handleEditSubShow(item.id,item.subketerangan)}/>
                                <XIcon className='text-white w-5 h-5 cursor-pointer hover:border-[1px] hover:border-slate-100 hover:rounded-full' onClick={()=>dispatch(deleteSubKeterangan(item.id))}/>
                            </div>
                        </div>)}
                        {!idket&&<p className='text-gray-400'>Pilih Keterangan Untuk Melihat Sub Keterangan</p>}
                    </div>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Keterangan