import {SearchIcon,PrinterIcon,DotsVerticalIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import GenerateToImage from '../components/Laporan/GenerateToImage'
import EditLaporan from '../components/Laporan/EditLaporan'
import DeleteLaporan from '../components/Laporan/DeleteLaporan'
function Laporan() {
  const [filter,setfilter]=useState('all')
  const [generateimg,setgenerateimg]=useState(false)
  const [editshow,seteditshow]=useState({id:1,show:false})
  const [deleteshow,setdeleteshow]=useState({id:1,show:false})
  const handleGenerateImg=()=> setgenerateimg(!generateimg)
  const handleEditshow=(id=0)=> seteditshow({id:id,show:!editshow.show})
  const handleDeleteShow = (id=0)=> setdeleteshow({id:id,show:!deleteshow.show})
  return (
    <div className='flex flex-col w-full h-full space-y-5'>
      {editshow.show?<EditLaporan handleEditshow={handleEditshow}/>:<><div className='flex justify-between w-full pr-10 space-x-1 z-10'>
        <div className='flex flex-col lg:flex-row lg:space-x-2'>
          <div className='flex justify-center items-center space-x-1'>
            <div onClick={()=>setfilter('all')} className={`text-sm ${(filter==='all')?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg px-4 py-2 cursor-pointer`}>All</div>
            <div onClick={()=>setfilter('laporan1')} className={`text-sm ${(filter==='laporan1')?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg px-4 py-2 cursor-pointer`}>Laporan1</div>
            <div onClick={()=>setfilter('laporan2')} className={`text-sm ${(filter==='laporan2')?'text-hoveRed bg-[#F4DFE1] border border-hoveRed':'text-black'} hover:text-hoveRed hover:bg-[#F4DFE1] rounded-lg px-4 py-2 cursor-pointer`}>Laporan2</div>
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-4'>
            <select className='w-full outline-none bg-transparent text-black'>
              <option value='' className='w-full'>Status</option>
              <option value='telah dilaksanakan' className='w-full'>Telah Dilaksanakan</option>
              <option value='proses' className='w-full'>Proses</option>
              <option value='perlu diperhatikan' className='w-full'>Perlu Diperhatikan</option>
            </select>
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 space-x-1'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' />
          </div>
        </div>
        </div>

      <div className='flex'>
      {deleteshow.show&&<DeleteLaporan handleDeleteShow={handleDeleteShow}/>}
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-white rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4'>
                    <th className='text-black w-[15vw] text-sm lg:w-10'><input type="checkbox" className='outline-none' /></th>
                    <th className='text-black w-[50vw] text-sm lg:w-52'>Pengirim</th>
                    <th className='text-black w-[50vw] text-sm lg:w-64'>Judul Laporan</th>
                    <th className='text-black w-[85vw] text-sm lg:w-32'>Tanggal</th>
                    <th className='text-black w-[40vw] text-sm lg:w-52'>Status</th>
                    <th className='text-black w-[20vw] text-sm lg:w-32'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              <tr  className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-auto">
                <td className='h-auto w-[15vw] lg:w-10 '><input type="checkbox" className='outline-none' /></td>
                <td className='h-auto w-[50vw] lg:w-52 flex space-x-1 items-center'>
                  <div className='w-12 h-12'>
                    <img src='https://via.placeholder.com/240x240?text=IMG' className='w-full hfull rounded-lg' />
                  </div>
                  <p className='text-sm w-full line-clamp-1'>yayan</p>
                </td>
                <td className='h-auto w-[85vw] lg:w-64 text-sm line-clamp-1'>PEMBANGUNAN MASJID DI DESA PRAMBANAN KABUPATEN JOGJA SELATAN MERAPI</td>
                <td className='h-auto w-[85vw] lg:w-32 text-sm line-clamp-1'>30/03/2022</td>
                <td className='h-auto w-[40vw] lg:w-52 text-sm line-clamp-1'>
                  <div className='bg-green-100 text-green-500 rounded-md px-3 w-fit'>TELAH DILAKSANAKAN</div>
                </td>
                <td className='h-auto w-[20vw] lg:w-32 flex space-x-1'>
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