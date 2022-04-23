import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPersonil} from '../features/personilSlice'
import {getLaporan} from '../features/laporanSlice'
import { useNavigate } from 'react-router-dom'
import {ArrowRightIcon,CollectionIcon,DocumentIcon,BadgeCheckIcon} from '@heroicons/react/outline'
import host from '../features/host'
function Home() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {personil} = useSelector(state => state.personil)
  const {laporan} = useSelector(state => state.laporan)
  useEffect(()=>{
    dispatch(getPersonil())
    dispatch(getLaporan())
  },[])
  return (
    <div className='flex flex-col justify-center p-4 w-full h-full space-y-5'>
      {/* chart 1 */}
      <div className='flex justify-start w-full h-auto space-x-8'>
        <div className='bg-white flex p-4 rounded-xl items-center space-x-3'>
          <div className='flex-col'>
            <p className='text-xs text-gray-400'>Jumlah Personil</p>
            <p className='text-2xl'>{personil.length}</p>
          </div>
          <CollectionIcon className='text-orange-500 w-7 h-7' />
        </div>
        <div className='bg-white flex p-4 rounded-xl items-center space-x-3'>
          <div className='flex-col'>
            <p className='text-xs text-gray-400'>Jumlah Laporan</p>
            <p className='text-2xl'>{laporan.length}</p>
          </div>
          <DocumentIcon className='text-slate-500 w-7 h-7' />
        </div>
        <div className='bg-white flex p-4 rounded-xl items-center space-x-3'>
          <div className='flex-col'>
            <p className='text-xs text-gray-400'>Laporan Selesai</p>
            <p className='text-2xl'>{laporan.filter(val => val.status==="selesai").length}</p>
          </div>
          <BadgeCheckIcon className='text-green-500 w-7 h-7' />
        </div>
      </div>
      <div className='flex space-x-10'>
        <div className='flex-col w-fit bg-white px-4 py-2 rounded-md'>
          <p>Laporan Minggu Ini</p>
          <p className='text-green-500'>{laporan.length} Laporan</p>
          <div className='flex w-full'>
            <div className='flex w-full items-baseline space-x-4'>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-10 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Senin</p>
              </div>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-20 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Selasa</p>
              </div>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-32 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Rabu</p>
              </div>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-16 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Kamis</p>
              </div>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-20 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Jumat</p>
              </div>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-32 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Sabtu</p>
              </div>
              <div className='flex flex-col space-y-1 items-center'>
                <div className='w-8 h-8 bg-[#f8e4e4] hover:bg-red rounded-md'></div>
                <p className='text-xs text-gray-500'>Minggu</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md px-4 py-2 flex flex-col justify-center items-center space-y-2'>
          <p>Grafik Personil</p>
          <div className='rotate-12 w-32 h-32 border-[20px] border-t-red border-r-yellow-500 border-b-green-500 border-l-transparent rounded-full'></div>
          <div className='flex space-x-4 justify-center items-center'>
            <div className='flex flex-col justify-center items-center space-y-1'>
              <div className='flex space-x-1 items-center'>
                <div className='w-3 h-3 bg-red'></div>
                <p className='text-sm text-gray-400'>Operasi</p>
              </div>
              <p>0</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-1'>
              <div className='flex space-x-1 items-center'>
                <div className='w-3 h-3 bg-yellow-500'></div>
                <p className='text-sm text-gray-400'>Recovery</p>
              </div>
              <p>0</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-1'>
              <div className='flex space-x-1 items-center'>
                <div className='w-3 h-3 bg-green-500'></div>
                <p className='text-sm text-gray-400'>Siap Tugas</p>
              </div>
              <p>0</p>
            </div>
           
          </div>
        </div>
      </div>
      <div className='flex-col w-fit  space-y-2 py-2 rounded-md'>
        <div className='flex justify-between'>
            <p>Laporan Terakhir</p>
            <ArrowRightIcon className='w-5 h-5 cursor-pointer' onClick={()=>navigate('/laporan')} />
        </div>
        <div className='flex w-full rounded-xl space-x-4'>
          {
            laporan.slice(0,3).map((val,index)=>(
              <div className='bg-white rounded-xl p-3 flex-col space-y-2 w-60' key={index+1}>
                <div className='flex space-x-2'>
                  <img className='w-6 h-6 rounded-lg' src={host+'/users/img/'+val.user?.picture} />
                  <p className='text-sm'>{val.user?.nama}</p>
                </div>
                <p className='text-gray-800 text-sm'>{val.title}</p>
                <div className='flex space-x-2'>
                  <p className='text-xs text-rose-400'>{val.kategori?.kategori}</p>
                  {
                    (val.status.toLowerCase()==='koordinasi')?
                    <div className='text-xs text-purple-500 rounded-md px-3 w-fit'>{val.status}</div>
                    :(val.status.toLowerCase()==='disposisi')?
                    <div className='text-xs text-orange-500 rounded-md px-3 w-fit'>{val.status}</div>
                    :(val.status.toLowerCase()==='proses')?
                    <div className='text-xs text-blue-500 rounded-md px-3 w-fit'>{val.status}</div>
                    :(val.status.toLowerCase()==='selesai')?
                    <div className='text-xs text-green-500 rounded-md px-3 w-fit'>{val.status}</div>
                    :<div className='text-xs text-gray-500 rounded-md px-3 w-fit'>{val.status}</div>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home