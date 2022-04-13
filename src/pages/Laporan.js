import {SearchIcon,PrinterIcon,DotsVerticalIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import GenerateToImage from '../components/Laporan/GenerateToImage'
import EditLaporan from '../components/Laporan/EditLaporan'
import DeleteLaporan from '../components/Laporan/DeleteLaporan'
function Laporan() {
  const dispatch = useDispatch()
  const {jenisLaporan} = useSelector(state => state.catandlap)
  const [filter,setfilter]=useState('all')
  const [statusshow,setstatusshow]=useState(false)
  const [generateimg,setgenerateimg]=useState(false)
  const [editshow,seteditshow]=useState({id:1,show:false})
  const [deleteshow,setdeleteshow]=useState({id:1,show:false})
  const handleGenerateImg=()=> setgenerateimg(!generateimg)
  const handleEditshow=(id=0)=> seteditshow({id:id,show:!editshow.show})
  const handleDeleteShow = (id=0)=> setdeleteshow({id:id,show:!deleteshow.show})
  return (
    <div className='flex flex-col w-full h-full space-y-5'>
      {editshow.show?<EditLaporan handleEditshow={handleEditshow}/>:<><div className='flex justify-between w-full pr-10 space-x-1 z-10'>
        <div className='flex flex-col lg:flex-row lg:space-x-2 '>
          <div className='flex justify-center items-center border border-yellow-400 rounded-lg px-3 bg-orange-500 h-fit py-2'>
            <select className='w-full outline-none bg-orange-500 text-white text-sm' disabled>
              <option value='' className='w-full'>Update Status</option>
              <option value='telah dilaksanakan' className='w-full'>Telah Dilaksanakan</option>
              <option value='proses' className='w-full'>Proses</option>
              <option value='perlu diperhatikan' className='w-full'>Perlu Diperhatikan</option>
            </select>
          </div>
          <div className='lg:flex justify-start items-center space-x-1 overflow-x-auto hidden lg:block lg:w-72 h-fit p-1'>
            <div onClick={()=>setfilter('all')} className={`text-sm ${(filter==='all')?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg px-2 py-1 cursor-pointer`}>All</div>
            {
              jenisLaporan?.map((item,index)=>(
                <div key={index+1} onClick={()=>setfilter(item.nama)} className={`text-xs ${(filter===item.nama)?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg p-2 cursor-pointer `}>{item.nama}</div>
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
            <select className='w-full outline-none bg-transparent text-black text-sm'>
              <option value='' className='w-full'>Status</option>
              <option value='telah dilaksanakan' className='w-full'>Telah Dilaksanakan</option>
              <option value='proses' className='w-full'>Proses</option>
              <option value='perlu diperhatikan' className='w-full'>Perlu Diperhatikan</option>
            </select>
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 py-2 space-x-1 h-fit'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' />
          </div>
        </div>
        </div>

      <div className='flex'>
      {deleteshow.show&&<DeleteLaporan handleDeleteShow={handleDeleteShow}/>}
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-white rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4 space-x-1'>
                    <th className='text-[#000] w-[15vw] text-sm lg:w-10'><input type="checkbox" className='outline-none' /></th>
                    <th className='text-[#000] w-[50vw] text-sm lg:w-56'>Pengirim</th>
                    <th className='text-[#000] w-[50vw] text-sm lg:w-64'>Judul Laporan</th>
                    <th className='text-[#000] w-[30vw] text-sm lg:w-32'>Tanggal</th>
                    <th className='text-[#000] w-[40vw] text-sm lg:w-52'>Status</th>
                    <th className='text-[#000] w-[20vw] text-sm lg:w-20'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              <tr  className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-24 space-x-1">
                <td className='h-auto w-[15vw] lg:w-10 '><input type="checkbox" className='outline-none' /></td>
                <td className='h-auto w-[50vw] lg:w-56 flex space-x-1 items-center'>
                  <div className='w-12 h-12'>
                    <img src='https://via.placeholder.com/240x240?text=IMG' className='w-full hfull rounded-lg' />
                  </div>
                  <p className='text-sm w-full line-clamp-2'>Yudhawan Anis Shobirin</p>
                </td>
                <td className='h-auto w-[50vw] lg:w-64 text-sm line-clamp-3'>PEMBANGUNAN MASJID DI DESA PRAMBANAN KABUPATEN JOGJA SELATAN MERAPI</td>
                <td className='h-auto w-[30vw] lg:w-32 text-sm line-clamp-1'>30/03/2022</td>
                <td className='h-auto w-[40vw] lg:w-52 text-sm line-clamp-1 relative'>
                  <div className='bg-green-100 text-green-500 rounded-md px-3 w-fit'>TELAH DILAKSANAKAN</div>
                </td>
                <td className='h-auto w-[20vw] lg:w-20 flex space-x-1'>
                  <PrinterIcon className='text-orange-600 w-5 h-5 cursor-pointer' onClick={handleGenerateImg}/>
                  <DotsVerticalIcon className='text-gray-600 w-5 h-5 cursor-pointer' onClick={handleEditshow} />
                </td>
            </tr>
            </tbody>
        </table>
      </div></>}
      <div className={generateimg?'block':'hidden'}><GenerateToImage handleGenerateImg={handleGenerateImg} generateimg={generateimg}/></div>

    </div>
  )
}

export default Laporan