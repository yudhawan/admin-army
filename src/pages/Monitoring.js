import {SearchIcon,AdjustmentsIcon,ArrowsExpandIcon} from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import MapZone from '../components/Monitoring/MapZone'
import {useDispatch,useSelector} from 'react-redux'
import {getJenisLaporan} from '../features/catandlapSlice'
import {getLaporan} from '../features/laporanSlice'
import host from '../features/host'
function Monitoring() {
  const dispatch = useDispatch()
  const {jenisLaporan} = useSelector(state=>state.catandlap)
  const {laporan} = useSelector(state=>state.laporan)
  const [fullmap,setfullmap] = useState(false)
  const [search,setsearch] = useState('')
  const [filter,setfilter]=useState({
    time:true,
    laporan:''
  })
  const [datefilter,setdatefilter] = useState(()=>{
    
      let d = (laporan.length>0)?new Date(laporan.slice(0,1)[0].createdAt):new Date()
      d.setDate(d.getDate()-2)
      let newdate = new Date(d).toISOString().slice(0,10)
      return newdate
    
  })

  const [location,setlocation] = useState({
    longitude:0,
    latitude:0
  })
  
  const [showfilter,setshowfilter]=useState(false)
  useEffect(()=>{
    dispatch(getJenisLaporan())
    dispatch(getLaporan())
  },[])
  return (
    <div className='flex w-full h-[85vh] justify-between space-x-6'>
      <div className={`w-full h-auto flex flex-col space-y-5 ${fullmap?'hidden':'block'}`}>
        <div className='flex bg-white rounded-lg space-x-2 p-2 px-3 items-center relative'>
          <SearchIcon className='text-gray-500 w-5 h-5' />
          <input type='text' className='outline-none w-full' placeholder='Search...' value={search} onChange={(e)=> setsearch(e.target.value)} />
          <AdjustmentsIcon className={`${showfilter?'text-red':'text-gray-500'} w-5 h-5 hover:text-hoveRed cursor-pointer`} onClick={()=>setshowfilter(!showfilter)} />
          {showfilter&&<div className='absolute -bottom-24 z-10 right-0 bg-[#F4DFE1] rounded-lg flex flex-col p-2 space-y-1'>
            <div className='flex items-center space-x-1'>
                <p className='font-poppins text-gray-500 text-sm'>Terbaru?</p>
                <input type='checkbox' className='outline-none w-full checked' checked={filter.time} onChange={(e)=> setfilter({...filter, time:!filter.time})}/>
            </div>
            <div className='flex flex-col'>
              <p className='font-poppins text-gray-500 text-sm'>Laporan</p>
              <div className='rounded-md border border-gray-400 bg-white py-1 w-fit px-2'>
                  <select className='outline-none w-full text-sm text-gray-500' value={filter.laporan} onChange={(e)=> setfilter({...filter, laporan:e.target.value})}>
                      <option value="">All</option>
                      {
                        jenisLaporan.map((item,index)=>(
                          <option key={index+1} value={item.nama}>
                            <p className={`text-[${item.color}]`}>{item.nama}</p>
                          </option>
                        ))
                      }
                  </select>
              </div>
            </div>
          </div>}
        </div>
        <div className='flex-col w-full space-y-2 overflow-y-auto'>
        {
          laporan.filter(val => val.jenisLaporan?.nama.toLowerCase().includes(filter.laporan.toLowerCase())).filter(val => val.title.toLowerCase().includes(search.toLowerCase())).filter(val=> {
            if(!filter.time){
              let tgl = new Date(val.createdAt).toISOString().substring(0,10)
              return tgl.includes(datefilter)
           }
           return val
          }).map((item,index)=>{
            let img = item.image?item.image.split(","):[]
            return(
            <div key={index+1} className='w-full h-40 bg-white hover:bg-slate-50 cursor-pointer flex justify-between rounded-xl items-center p-4 space-x-7 relative' onClick={()=>setlocation({longitude:item.longitude, latitude:item.latitude})}>
              <figure className='w-full h-full'>
                  <img src={host+'/posts/img/'+img[0]} className='w-full h-full object-cover rounded-lg' />
              </figure>
              <div className='w-full flex-col space-y-4'>
                  <div className='text-sm text-black font-semibold'>{item.title}</div>
                  <div className='text-gray-500 line-clamp-2 text-xs'>{item.content}</div>
                  <div className='text-xs text-blue-500 cursor-pointer'>{item.lokasi}</div>
              </div>
              <div style={{backgroundColor:item.jenisLaporan?.color}} className='absolute w-5 h-5 rounded-full top-2 right-2'></div>
            </div>
          )})
        }
        </div>
      </div>
      <div className='flex relative -z-10'>
        <div className='w-full h-full' >
          <MapZone long={location.longitude} lat={location.latitude} fullmap={fullmap} />
        </div>
        {/* <ArrowsExpandIcon onClick={()=>setfullmap(!fullmap)} className='w-8 h-8 text-gray-500 absolute top-1 right-1 cursor-pointer'/> */}
      </div>
    </div>
  )
}

export default Monitoring