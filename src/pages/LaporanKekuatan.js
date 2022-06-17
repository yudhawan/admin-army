import { useEffect, useLayoutEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPersonil} from '../features/personilSlice'
import {getLaporan,getLaporanKekuatan,getLaporanKekuatanInDuty} from '../features/laporanSlice'
import {ClockIcon} from '@heroicons/react/outline'
import img3 from './img3.jpg'
function LaporanKekuatan() {
  const dispatch = useDispatch()
  const {laporan,laporankekuatan,laporankekuataninduty} = useSelector(state => state.laporan)
  const {personil} = useSelector(state => state.personil)
  const [kurang,setkurang] = useState(()=>parseInt((personil.filter(x => x.kehadiran==='tidak').length*100)/personil.length))
  const [hadir,sethadir] = useState(()=>parseInt((personil.filter(x => x.kehadiran==='hadir').length*100)/personil.length))
  useEffect(()=>{
    dispatch(getPersonil())
    dispatch(getLaporan())
    dispatch(getLaporanKekuatan())
    dispatch(getLaporanKekuatanInDuty())
  },[])
  return (
    <div className='w-full h-[87vh] flex justify-between space-x-4'>
      <div className='h-full w-80 flex-col space-y-4'>
        <div className='bg-white rounded-xl w-full h-auto flex-col flex p-4 space-y-2'>
          <p className='text-gray-600 font-semibold'>Apel Kekuatan</p>
          <p className='text-rose-600 text-xl font-bold'>Sat 81 Kopassus</p>
          <p className='text-gray-600 text-xs font-semibold'>{new Date().toDateString()}</p>
          <div className='w-full h-auto p-3 bg-white shadow-xl flex rounded-xl'>
            <div className='flex-col w-full'>
              <div className='flex w-full justify-between'>
                <p className='text-gray-500 font-semibold'>TOP</p>
                <p className='text-gray-700'>465</p>
              </div>
              <div className='bg-gray-700 rounded-xl h-3 relative'>
                <div className='absolute top-0 left-0 bg-green-500 w-full h-3 rounded-xl'></div>
              </div>
            </div>
            {/* <div></div> */}
          </div>
          <div className='w-full h-auto p-3 bg-white shadow-xl flex rounded-xl'>
            <div className='flex-col w-full'>
              <div className='flex w-full justify-between'>
                <p className='text-gray-500 font-semibold'>NYATA</p>
                <p className='text-gray-700'>{personil.length}</p>
              </div>
              <div className='bg-gray-700 rounded-xl h-3 relative'>
                <div className='absolute top-0 left-0 bg-rose-500 w-full h-3 rounded-xl'></div>
              </div>
            </div>
            {/* <div></div> */}
          </div>
          <div className='w-full h-auto p-3 bg-white shadow-xl flex rounded-xl'>
            <div className='flex-col w-full'>
              <div className='flex w-full justify-between'>
                <p className='text-gray-500 font-semibold'>HADIR</p>
                <p className='text-gray-700'>{personil.filter(x => x.kehadiran==='hadir').length}</p>
              </div>
              <div className='bg-gray-700 rounded-xl h-3 relative'>
                <div style={{width:hadir+'%'}} className={`absolute top-0 left-0 bg-blue-500 h-3 rounded-xl`}></div>
              </div>
            </div>
            {/* <div></div> */}
          </div>
          <div className='w-full h-auto p-3 bg-white shadow-xl flex rounded-xl'>
            <div className='flex-col w-full'>
              <div className='flex w-full justify-between'>
                <p className='text-gray-500 font-semibold'>KURANG</p>
                <p className='text-gray-700'>{personil.filter(x => x.kehadiran==='tidak').length}</p>
              </div>
              <div className='bg-gray-700 rounded-xl h-3 relative'>
                <div style={{width:kurang+'%'}} className={`absolute top-0 left-0 bg-orange-500 h-3 rounded-xl`}></div>
              </div>
            </div>
            {/* <div></div> */}
          </div>
        </div>
        <div style={{ backgroundImage: `linear-gradient(to left, rgba(199, 44, 44,0.9),rgba(232, 84, 84,0.7)),url(${img3})`,backgroundSize:'cover' }} className='w-full h-[27rem] rounded-xl p-3 flex-col flex justify-end'>
          <p className='text-white italic text-2xl font-bold'>SIAP</p>
          <p className='text-white italic text-2xl font-bold'>SETIA</p>
          <p className='text-white italic text-2xl font-bold'>BERANI</p>
        </div>
      </div>
      <div className='w-full h-full overflow-auto rounded-xl bg-white p-4 flex flex-wrap gap-4'>
        {
          laporankekuatan.map((val,index)=>{
            let startDate = new Date(val.startDate).toISOString().substring(0,10)
            let endDate = new Date(val.endDate).toISOString().substring(0,10)
            let anggota = JSON.parse(val.personil)
            return(
                <div key={index+1} className={`'w-80 h-fit p-2 flex flex-col justify-center space-y-1 mt-1 ${(val.keterangan.status==='hadir')?'bg-indigo-50':'bg-violet-50'} rounded-xl`}>
                    <div className='w-full justify-between flex items-center space-x-5'>
                        <p className='text-gray-500 font-bold text-sm'>{(val.keterangan.status==='hadir')?<>Hadir</>:<>KURANG</>}</p>
                        <div className='flex space-x-1'>
                            <ClockIcon className='w-4 h-4 text-red' />
                            <p className='text-gray-500 text-xs'>{startDate}</p>
                            <p className='text-gray-500 text-xs'>{endDate}</p>
                        </div>
                    </div>
                    <div className='w-full flex space-x-1 items-center'>
                        <p className='text-gray-500 text-[10px]'>{val.keterangan.keterangan}</p>
                        <p className='text-gray-500 text-[10px]'>|</p>
                        <p className='text-gray-500 text-[10px]'>{val.sub.subketerangan}</p>
                    </div>
                    <p className='text-gray-500 text-xs font-semibold flex'>Anggota: {JSON.parse(val.personil).length}</p>
                    <div className={`w-full h-20 items-center overflow-y-auto flex-col ${(val.keterangan.status==='hadir')?'bg-indigo-200':'bg-violet-200'} p-1 rounded-sm`}>
                        {
                            personil?.map((val,index)=>{
                            if(anggota.includes(val.id))return (<p key={index+1} className='text-gray-500 text-xs line-clamp-1'>{val.nama} </p>)
                            })
                        }
                    </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LaporanKekuatan