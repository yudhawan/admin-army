import {PrinterIcon} from '@heroicons/react/outline'
import { useEffect, useState,useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getLaporan,updateLaporan} from '../features/laporanSlice'
import {getJenisLaporan} from '../features/catandlapSlice'
import GenerateToImage from '../components/Laporan/GenerateToImage'
import DetailLaporan from '../components/Laporan/DetailLaporan'
import host from '../features/host'
function Laporan() {
  const dispatch = useDispatch()
  const update = useRef()
  const {jenisLaporan} = useSelector(state => state.catandlap)
  const {laporan,loading} = useSelector(state => state.laporan)
  const [filterlaporan,setfilterlaporan]=useState('')
  const [status,setstatus] = useState('')
  const [select,setselect]=useState([])
  const [showgenerateimg,setshowgenerateimg]=useState(false)
  const [generateimg,setgenerateimg]=useState({
    image:'',
    title:'',
    format:0
  })
  const [detailshow,setdetailshow]=useState({id:1,show:false})
  const [showmenu,setshowmenu]=useState(0)
  const handleShowMenu = () => setshowmenu(0)
  const handleGenerateImg=(image,title,format)=> {
    setgenerateimg({
      image:image?.split(","),
      title:title,
      format:format
    })
    setshowgenerateimg(!showgenerateimg)
  }
  const handleDetailshow=(id=0)=> setdetailshow({id:id,show:!detailshow.show})
  const handleSelect = (e)=>{
    let newarr = []
    if(select.includes(parseInt(e.target.id))){
      newarr = select.filter(value=> value!=e.target.id)
      setselect(newarr)
    }else{
      setselect([...select, parseInt(e.target.id)])
    }
  }
  useEffect(()=>{
    if(select.length>0) update.current.disabled=false
    if(select.length==0) update.current.disabled=true
  },[select])
  useEffect(()=>{
    dispatch(getLaporan())
    dispatch(getJenisLaporan())
  },[])
  return (
    <div className='flex flex-col w-full h-full space-y-5 '>
      {detailshow.show?<DetailLaporan handleDetailshow={handleDetailshow} id={detailshow.id}/>:<><div className='flex justify-start w-full pr-10 space-x-1'>
        <div className='flex flex-col lg:flex-row lg:space-x-2 '>
          <div className='flex justify-center items-center border border-yellow-400 rounded-lg px-3 bg-orange-500 h-fit py-2'>
            <select ref={update} className='w-full outline-none bg-orange-500 text-white text-sm' disabled onChange={(e)=>             {
              dispatch(updateLaporan({id:select, status:e.target.value}))
              setselect([])
            }} >
              <option value='' className='w-full'>Update Status</option>
              <option value='koordinasi' className='w-full'>Koordinasi</option>
              <option value='disposisi' className='w-full'>Disposisi</option>
              <option value='proses' className='w-full'>Proses</option>
              <option value='selesai' className='w-full'>Selesai</option>
            </select>
          </div>
          <div className='lg:flex justify-start items-center space-x-1 overflow-x-auto hidden lg:block lg:w-72 h-fit p-1'>
            <div onClick={()=>setfilterlaporan('')} className={`text-sm ${(filterlaporan==='')?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg px-2 py-1 cursor-pointer`}>All</div>
            {
              jenisLaporan?.map((item,index)=>(
                <div key={index+1} onClick={()=>setfilterlaporan(item.nama)} className={`text-xs ${(filterlaporan===item.nama)?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg p-2 cursor-pointer `}>{item.nama}</div>
              ))
            }
          </div>
          <div className='flex justify-center items-center border border-gray-400 lg:hidden rounded-md px-4 py-2 h-fit'>
            <select className='w-full outline-none bg-transparent text-black text-sm'>
              <option value='' className='w-full'>All</option>
              {
                jenisLaporan?.map((item,index)=>(
                  <option key={index+1} value={item.nama} className="w-full">{item.nama}</option>
                ))
              }
            </select>
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-4 py-2 h-fit'>
            <select className='w-full outline-none bg-transparent text-black text-sm' value={status} onChange={(e)=>setstatus(e.target.value)}>
              <option value='' className='w-full'>Semua Status</option>
              <option value='menunggu' className='w-full'>Menunggu</option>
              <option value='koordinasi' className='w-full'>Koordinasi</option>
              <option value='disposisi' className='w-full'>Disposisi</option>
              <option value='proses' className='w-full'>Proses</option>
              <option value='selesai' className='w-full'>Selesai</option>
            </select>
          </div>
          {/* <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 py-2 space-x-1 h-fit '>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' value={search} onChange={(e)=> setsearch(e.target.value)} />
          </div> */}
        </div>
        </div>

      <div className='flex'>
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-red rounded-tr-md rounded-tl-md border border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4 space-x-1'>
                    <th className='text-gray-100 w-[15vw] text-sm lg:w-10'>({laporan.length})</th>
                    <th className='text-gray-100 w-[50vw] text-sm lg:w-56'>Pengirim</th>
                    <th className='text-gray-100 w-[50vw] text-sm lg:w-64'>Judul Laporan</th>
                    <th className='text-gray-100 w-[30vw] text-sm lg:w-32'>Tanggal</th>
                    <th className='text-gray-100 w-[40vw] text-sm lg:w-52 '>Status</th>
                    <th className='text-gray-100 w-[20vw] text-sm lg:w-20'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              {(laporan.length>0)&&laporan?.filter(val => val.jenisLaporan?.nama.toLowerCase().includes(filterlaporan.toLowerCase()))?.filter(val => val.status.toLowerCase().includes(status.toLowerCase()))?.map((item,index)=>{
                let date = new Date(item?.createdAt).toISOString().substring(0,10)
              return (<tr key={index+1} className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-24 space-x-1">
                <td className='h-auto w-[15vw] lg:w-10 '><input type="checkbox" className='outline-none' id={item.id} onClick={handleSelect} /></td>
                <td className='h-auto w-[50vw] lg:w-56 flex space-x-1 items-center'>
                  <div className='w-12 h-12'>
                    <img src={host+'/users/img/'+item.user?.picture} className='w-full hfull rounded-lg' />
                  </div>
                  <p className='text-sm w-full line-clamp-2'>{item.user?.nama}</p>
                </td>
                <td className='h-auto w-[50vw] lg:w-64 text-sm line-clamp-3 cursor-pointer' onClick={()=>setdetailshow({id:item.id,show:true})}>{item.title}</td>
                <td className='h-auto w-[30vw] lg:w-32 text-sm line-clamp-1'>{date}</td>
                <td className='h-auto w-[40vw] lg:w-52 text-sm line-clamp-1 relative'>
                  {
                    (item.status.toLowerCase()==='koordinasi')?
                    <div className='text-green-100 bg-purple-500 rounded-md px-3 w-fit'>{item.status}</div>
                    :(item.status.toLowerCase()==='disposisi')?
                    <div className='text-green-100 bg-orange-500 rounded-md px-3 w-fit'>{item.status}</div>
                    :(item.status.toLowerCase()==='proses')?
                    <div className='text-green-100 bg-blue-500 rounded-md px-3 w-fit'>{item.status}</div>
                    :(item.status.toLowerCase()==='selesai')?
                    <div className='text-green-100 bg-green-500 rounded-md px-3 w-fit'>{item.status}</div>
                    :<div className='text-green-100 bg-gray-500 rounded-md px-3 w-fit'>{item.status}</div>
                  }
                </td>
                <td className='h-auto w-[20vw] lg:w-20 flex space-x-1 relative'>
                  <PrinterIcon className='text-orange-100 w-5 h-5 cursor-pointer' onClick={()=>{
                    if(showmenu) setshowmenu(0)
                    if(!showmenu) setshowmenu(item.id)
                  }}/>
                  {
                    (showmenu===item.id)?<div className={`absolute -top-5 right-2 border border-gray-300 rounded-md p-1 flex-col divide-y bg-white`}>
                      <div className='flex cursor-pointer' onClick={()=>handleGenerateImg(item.image,item.title,1)}>
                        <p className='text-xs text-gray-500 hover:text-black'>1 Grid</p>
                      </div>
                      <div className='flex cursor-pointer' onClick={()=>handleGenerateImg(item.image,item.title,4)}>
                        <p className='text-xs text-gray-500 hover:text-black'>4 Grid</p>
                      </div>
                    </div>:<></>
                  }
                  {/* <DotsVerticalIcon className='text-gray-100 w-5 h-5 cursor-pointer' onClick={handleEditshow} /> */}
                </td>
              </tr>)})}
            </tbody>
        </table>
      </div></>}
      <div className={showgenerateimg?'block':'hidden'}><GenerateToImage handleGenerateImg={handleGenerateImg} showgenerateimg={showgenerateimg} image={generateimg.image} title={generateimg.title} format={generateimg.format} handleShowMenu={handleShowMenu} /></div>

    </div>
  )
}

export default Laporan