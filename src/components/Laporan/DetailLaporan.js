import { useDispatch,useSelector } from 'react-redux'
import {ChevronLeftIcon,LocationMarkerIcon} from '@heroicons/react/outline'
import host from '../../features/host'
function DetailLaporan({handleDetailshow,id}) {
  const dispatch = useDispatch()
  const {laporan} = useSelector(state => state.laporan)
  return (
    <div  className='flex flex-col w-full h-auto justify-start bg-white p-5 rounded-xl'>
      <div className='flex items-center cursor-pointer' onClick={handleDetailshow}>
        <ChevronLeftIcon className='text-red hover:text-hoveRed w-8' />
        <p className='text-red hover:text-hoveRed select-none'>Back</p>
      </div>
      <div className='w-full flex flex-col justify-center items-center space-y-2'>
      {
        laporan.filter(val => val.id===id).map((val,index) => {
          let img = val.image.split(',')
        return(
          <>
            <div className='flex overflow-x-scroll p-1 space-x-1 scroll-m-2 rounded-md w-[50%] h-[50%] items-center'>
              {
                img.map((val,index) => <img key={index+1} src={host+'/posts/img/'+val} className="w-full h-full rounded-md object-cover" />)
              }
              
            </div>
            <div className='flex w-full justify-between'>
              <div className='flex-col w-1/2 space-y-2'>
                {
                  (val.status.toLowerCase()==='koordinasi')?
                  <div className='text-green-100 bg-purple-500 rounded-md px-3 w-fit'>{val.status}</div>
                  :(val.status.toLowerCase()==='disposisi')?
                  <div className='text-green-100 bg-orange-500 rounded-md px-3 w-fit'>{val.status}</div>
                  :(val.status.toLowerCase()==='proses')?
                  <div className='text-green-100 bg-blue-500 rounded-md px-3 w-fit'>{val.status}</div>
                  :(val.status.toLowerCase()==='selesai')?
                  <div className='text-green-100 bg-green-500 rounded-md px-3 w-fit'>{val.status}</div>
                  :<div className='text-green-100 bg-gray-500 rounded-md px-3 w-fit'>{val.status}</div>
                }
                <h4 className='font-bold text-lg'>{val.title}</h4>
                <h5 className='font-semibold text-gray-500 text-sm'>{val.satuan?.nama}</h5>
                <h5 className='font-semibold text-gray-500 text-sm'>{val.kategori?.kategori}</h5>
                <div className='flex items-center space-x-1'>
                  <p className='font-semibold text-gray-500 text-sm'>{val.jenisLaporan?.nama}</p>
                  <div style={{backgroundColor:val.jenisLaporan?.color}} className={`w-4 h-4 rounded-full`}></div>
                </div>
                <div className='flex items-center space-x-1'>
                  <LocationMarkerIcon className='text-blue-500 w-5 h-5' />
                  <p className='text-gray-500 text-xs'>{val.lokasi}</p>
                </div>
              </div>
              
              <div className='p-1 rounded-lg border  w-1/2 ' >
                <p className='font-bold'>Deskripsi :</p>
                <textarea className='w-full h-48 outline-none' value={val.content} readOnly/>
              </div>
            </div>

          </>
        )})
      }
      </div>
    </div>
  )
}

export default DetailLaporan