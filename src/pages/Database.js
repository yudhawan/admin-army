import { useState } from "react"
import Kategori from "../components/Databases/Kategori"
import JenisLaporan from "../components/Databases/JenisLaporan"
import Satuan from "../components/Databases/Satuan"
import Keterangan from "../components/Databases/Keterangan"
function Database() {
  const [selected,setselected]=useState('kategori')
  
  
  return (
    <div className='flex flex-col items-center bg-white rounded-xl p-4 w-full h-[80vh] space-y-5'>
      <div className="w-fit border border-slate-300 rounded-md p-1 flex justify-center space-x-3">
        <div onClick={()=>setselected('kategori')} className={`px-1 rounded-md hover:bg-hoveRed hover:text-white cursor-pointer ${(selected==='kategori')?'bg-red text-white':'bg-white text-red'}`}>Kategori</div>
        <div onClick={()=>setselected('laporan')} className={`px-1 rounded-md hover:bg-hoveRed hover:text-white cursor-pointer ${(selected==='laporan')?'bg-red text-white':'bg-white text-red'}`}>Laporan</div>
        <div onClick={()=>setselected('satuan')} className={`px-1 rounded-md hover:bg-hoveRed hover:text-white cursor-pointer ${(selected==='satuan')?'bg-red text-white':'bg-white text-red'}`}>Satuan</div>
        <div onClick={()=>setselected('keterangan')} className={`px-1 rounded-md hover:bg-hoveRed hover:text-white cursor-pointer ${(selected==='keterangan')?'bg-red text-white':'bg-white text-red'}`}>Keterangan</div>
      </div>
      
      {(selected==='kategori')?<Kategori/>:(selected==='laporan')?<JenisLaporan/>:(selected==='satuan')?<Satuan/>:(selected==='keterangan')?<Keterangan/>:<></>}
    </div>
  )
}

export default Database