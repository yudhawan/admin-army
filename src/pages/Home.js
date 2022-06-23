import { useEffect, useLayoutEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPersonil} from '../features/personilSlice'
import {getLaporan,getLaporanKekuatan,getLaporanKekuatanInDuty} from '../features/laporanSlice'
import { useNavigate } from 'react-router-dom'
import LineChartPersonil from '../components/Dashboard/LineChartPersonil'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import {ArrowRightIcon,CollectionIcon,DocumentIcon,BadgeCheckIcon,LibraryIcon,ArrowUpIcon} from '@heroicons/react/outline'
import host from '../features/host'
import {DonutChart} from 'react-circle-chart'
import { parse } from 'postcss'
function Home() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {laporan,laporankekuatan,laporankekuataninduty} = useSelector(state => state.laporan)
  const {personil} = useSelector(state => state.personil) 
  const [tugasOperasi,setTugasOperasi] = useState({})
  const [recovery,setRecovery] = useState({})
  const [siapTugas,setSiapTugas] = useState({})
  const [kurang,setKurang] = useState({})
  const [hadir,setHadir] = useState({})
  const [laporanMingguan,setLaporanMingguan] = useState([])
  useEffect(()=>{
    dispatch(getPersonil())
    dispatch(getLaporan())
    dispatch(getLaporanKekuatan())
    dispatch(getLaporanKekuatanInDuty())
  },[])
  useEffect(()=>{
    setLaporanMingguan([...new Set(laporan.filter(val => {
        let date = new Date(val.createdAt)
        let today = new Date()
        let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
        return date > nextweek
      }).map(val => {
      let date = new Date(val.createdAt).toDateString()
      return date
    }))])
    setTugasOperasi({value:parseInt(personil.filter(val => val.status==='tugas_operasi').length*100/personil.length), label:"Tugas Operasi",color:'#DB5454'})
    setRecovery({value: parseInt(personil.filter(val => val.status==='recovery').length*100/personil.length) || 0, label:"Recovery", color:'#EAB308'})
    setSiapTugas({value: parseInt(personil.filter(val => val.status==='siap_tugas').length*100/personil.length), label:"Siap Tugas",color:'#22C55E'})
    setKurang({value: (personil.filter(val => val.kehadiran==='tidak').length*100/personil.length).toFixed(1), label:"Kurang",color:'#22C55E'})
    setHadir({value: (personil.filter(val => val.kehadiran==='hadir').length*100/personil.length).toFixed(1), label:"Hadir",color:'#3B82F6'})
  },[personil,laporan])
  return (
    <div className='flex w-full h-full space-x-4'>
      {/* left */}
      <div className='flex flex-col justify-start w-fit h-full space-y-4'>
        {/* chart 1 */}
        <div className='flex justify-start w-full h-auto space-x-7'>
          <div className='bg-white flex p-4 rounded-xl items-center space-x-3'>
            <div className='flex-col'>
              <p className='text-lg text-gray-400'>Jumlah Personil</p>
              <p className='text-2xl'>{personil.length}</p>
            </div>
            <CollectionIcon className='text-orange-500 w-7 h-7' />
          </div>
          <div className='bg-white flex p-4 rounded-xl items-center space-x-3'>
            <div className='flex-col'>
              <p className='text-lg text-gray-400'>Jumlah Laporan</p>
              <p className='text-2xl'>{laporan.length}</p>
            </div>
            <DocumentIcon className='text-slate-500 w-7 h-7' />
          </div>
          <div className='bg-white flex p-4 rounded-xl items-center space-x-3'>
            <div className='flex-col'>
              <p className='text-lg text-gray-400'>Laporan Selesai</p>
              <p className='text-2xl'>{laporan.filter(val => val.status==="selesai").length}</p>
            </div>
            <BadgeCheckIcon className='text-green-500 w-7 h-7' />
          </div>
        </div>
        {/* chart 2 linechart personil */}
        <LineChartPersonil/>
        {/* chart 3 */}
        <div className='flex space-x-2'>
          <div className='flex-col h-60 w-96 bg-white px-4 py-2 rounded-md'>
            <p>Laporan Minggu Ini</p>
            <p className='text-green-500'>{laporan.filter(val => {
                  let date = new Date(val.createdAt)
                  let today = new Date()
                  let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
                  return date > nextweek
                }).length} Laporan</p>
            <div className='flex w-full h-3/4 '>
              <div className='flex w-full h-full space-x-4 items-end'>
              {
                
                laporanMingguan?.sort((data1,data2) => {
                  return new Date(data1) - new Date(data2)
                }).map(val=>{
                  let value = laporan.filter(x=> {
                    let theDate = new Date(x.createdAt).toDateString()
                    return theDate===val
                  }).length/110*100
                  return(
                    <div className='flex flex-col space-y-1 items-center'>
                      <p className='text-xs text-red'>{value.toFixed(1)}%</p>
                      <div style={{height:(value>110)?'110px':value+'px'}} className={`w-8 bg-[#f8e4e4] hover:bg-red rounded-md`}></div>
                      <p className='text-xs text-gray-500'>{(val.split(' ')[0]==='Sun')?<>Minggu</>:(val.split(' ')[0]==='Mon')?<>Senin</>:(val.split(' ')[0]==='Tue')?<>Selasa</>:(val.split(' ')[0]==='Wed')?<>Rabu</>:(val.split(' ')[0]==='Thu')?<>Kamis</>:(val.split(' ')[0]==='Fri')?<>Jumat</>:(val.split(' ')[0]==='Sat')?<>Sabtu</>:<></>}</p>
                      <p className='text-xs text-green-500'>{val.split(' ')[2]} {val.split(' ')[1]}</p>
                    </div>
                  )
                })
              }
                
              </div>
            </div>
          </div>
          {/* chart 3 */}
          <div className='bg-white rounded-md px-4 py-2 flex flex-col justify-center items-center space-y-2'>
            <p>Grafik Personil</p>
            {/* <div className='rotate-12 w-32 h-32 border-[20px] border-t-red border-r-yellow-500 border-b-green-500 border-l-transparent rounded-full'></div> */}
            <DonutChart items={[tugasOperasi,recovery,siapTugas]} size="120" totalSx={{fontSize:'22px'}} />
            <div className='flex space-x-4 justify-center items-center'>
              <div className='flex flex-col justify-center items-center space-y-1'>
                <div className='flex space-x-1 items-center'>
                  <div className='w-3 h-3 bg-red'></div>
                  <p className='text-sm text-gray-400'>Operasi</p>
                </div>
                <p>{personil.filter(val => val.status==='tugas_operasi').length}</p>
              </div>
              <div className='flex flex-col justify-center items-center space-y-1'>
                <div className='flex space-x-1 items-center'>
                  <div className='w-3 h-3 bg-yellow-500'></div>
                  <p className='text-sm text-gray-400'>Recovery</p>
                </div>
                <p>{personil.filter(val => val.status==='recovery').length}</p>
              </div>
              <div className='flex flex-col justify-center items-center space-y-1'>
                <div className='flex space-x-1 items-center'>
                  <div className='w-3 h-3 bg-green-500'></div>
                  <p className='text-sm text-gray-400'>Siap Tugas</p>
                </div>
                <p>{personil.filter(val => val.status==='siap_tugas').length}</p>
              </div>
            
            </div>
          </div>
        </div>
        {/* chart 4 laporan terakhir */}
        <div className='flex-col w-fit space-y-2 py-2 rounded-md'>
          <div className='flex justify-between'>
              <p>Laporan Terakhir</p>
              <ArrowRightIcon className='w-5 h-5 cursor-pointer' onClick={()=>navigate('/laporan')} />
          </div>
          <div className='flex w-[51vw] rounded-xl space-x-4'>
            {
              laporan.slice(0,3).map((val,index)=>(
                <div className='bg-white rounded-xl p-3 flex-col space-y-2 w-56' key={index+1}>
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
      {/* right */}
      <div className='flex flex-col mt-[1px] justify-start space-y-4'>
        <div className='flex space-x-4'>
          <div className='flex-col space-y-4'>
            <div className='flex space-x-1 items-center relative h-16 -z-10'>
              <div className='absolute left-0 top-0 shadow-md h-16 w-16 bg-white flex justify-center rounded-full items-center border-t-indigo-500 border-r-indigo-500 border-b-indigo-500 border-l-indigo-500 border-4 rotate-45'><p className='-rotate-45 text-gray-500 font-semibold'>100%</p></div>
              <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
                <p className='text-gray-500 font-semibold ml-2'>TOP</p>
                <p className='text-gray-500 font-semibold'>1020</p>
              </div>
            </div>
            <div className='flex space-x-1 items-center relative h-16 -z-10'>
              <div className='absolute left-0 top-0 shadow-md h-16 w-16 bg-white flex justify-center rounded-full items-center border-t-green-500 border-r-green-500 border-b-green-500 border-l-green-500 border-l-transparent border-4 rotate-45'><p className='-rotate-45 text-gray-500 font-semibold'>100%</p></div>
              <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
                <p className='text-gray-500 font-semibold ml-2'>NYATA</p>
                <p className='text-gray-500 font-semibold'>{personil.length}</p>
              </div>
            </div>
            <div className='flex space-x-1 items-center relative h-16 -z-10'>
              <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center'><DonutChart trackWidth="sm" trackColor='#E5E7EB' items={[kurang]} size="80" totalSx={{fontSize:'16px'}} /></div>
              <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
                <p className='text-gray-500 font-semibold ml-2'>KURANG</p>
                <p className='text-gray-500 font-semibold'>{personil.filter(val=> {
                  let now = new Date()
                  let enddate = new Date(val.endDate)
                  if(enddate > now) if(val.kehadiran==='tidak') return val
                  
                  }).length}</p>
              </div>
            </div>
            <div className='flex space-x-1 items-center relative h-16 -z-10'>
              <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center'><DonutChart trackWidth="sm" trackColor='#E5E7EB' items={[hadir]} size="80" totalSx={{fontSize:'16px'}} /></div>
              <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
                <p className='text-gray-500 font-semibold ml-2'>HADIR</p>
                <p className='text-gray-500 font-semibold'>{personil.filter(val=> val.kehadiran==='hadir').length}</p>
              </div>
            </div>
          </div>
          <div className='flex-col space-y-3 flex items-center w-ful h-full'>
            <div className='rounded-full bg-white p-2 rotate-45 -z-10'><ArrowUpIcon className='text-gray-600 w-6 h-6' /></div>
            <div className='flex space-x-2'>
              <div className='h-60 w-2 bg-black rounded-xl flex items-end'>
                <div style={{height:parseInt(personil.filter(val=> val.kehadiran==='hadir').length*100/personil.length)+"%"}} className='w-full bg-blue-600 rounded-xl'></div>
              </div>
              <div className='h-60 w-2 bg-black rounded-xl flex items-end'>
                <div style={{height:parseInt(personil.filter(val=> val.kehadiran==='tidak').length*100/personil.length)+"%"}}  className='h-[40%] w-full bg-red rounded-xl'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-2'>
          <div className='flex flex-col w-36 space-y-2 justify-center items-center h-auto bg-white rounded-lg p-4 cursor-pointer' onClick={()=> navigate('/materill')}>
            <div className='rounded-md bg-gradient-to-tl from-[#8a19e0] to-[#c01bcf] px-3 py-2'><LibraryIcon className='w-5 h-5 text-white' /></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>RANTIS</p>
            <p className='text-gray-400 text-xs'>SIAP GERAK</p>
            <div className='h-[1px] w-full bg-gray-200'></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>20</p>
          </div>
          <div className='flex flex-col w-36 space-y-2 justify-center items-center h-auto bg-white rounded-lg p-4'>
            <div className='rounded-md bg-gradient-to-tl from-[#8a19e0] to-[#c01bcf] px-3 py-2'><LibraryIcon className='w-5 h-5 text-white' /></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>SENJATA</p>
            <p className='text-gray-400 text-xs'>SIAP GERAK</p>
            <div className='h-[1px] w-full bg-gray-200'></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>2035</p>
          </div>
          <div className='flex flex-col w-36 space-y-2 justify-center items-center h-auto bg-white rounded-lg p-4'>
            <div className='rounded-md bg-gradient-to-tl from-[#8a19e0] to-[#c01bcf] px-3 py-2'><LibraryIcon className='w-5 h-5 text-white' /></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>ALMATSUS</p>
            <p className='text-gray-400 text-xs'>SIAP GERAK</p>
            <div className='h-[1px] w-full bg-gray-200'></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>48</p>
          </div>
          <div className='flex flex-col w-36 space-y-2 justify-center items-center h-auto bg-white rounded-lg p-4'>
            <div className='rounded-md bg-gradient-to-tl from-[#8a19e0] to-[#c01bcf] px-3 py-2'><LibraryIcon className='w-5 h-5 text-white' /></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>AMATSUS</p>
            <p className='text-gray-400 text-xs'>SIAP GERAK</p>
            <div className='h-[1px] w-full bg-gray-200'></div>
            <p className='text-gray-600 line-clamp-1 font-bold'>62</p>
          </div>
        </div>
        <div className='flex space-x-2'>
          <div className='flex-col w-36 bg-white rounded-xl'>
            <div style={{ backgroundImage: `linear-gradient(to left, rgba(43, 196, 59,0.9),rgba(84, 232, 99,0.7)),url(${img2})`,backgroundSize:'cover' }} className='w-full h-44 rounded-t-xl p-2'>
              <p className='text-white text-xl font-bold'>375</p>
              <p className='text-white text-sm'>PERSONIL</p>
            </div>
            <div className='flex p-3 w-full'>
              <p className='uppercase text-sm font-semibold text-gray-500'>didalam kesatrian</p>
            </div>
          </div>
          <div className='flex-col w-36 bg-white rounded-xl'>
            <div style={{ backgroundImage: `linear-gradient(to left, rgba(199, 44, 44,0.9),rgba(232, 84, 84,0.7)),url(${img1})`,backgroundSize:'cover' }} className='w-full h-44 rounded-t-xl p-2'>
              <p className='text-white text-xl font-bold'>125</p>
              <p className='text-white text-sm'>PERSONIL</p>
            </div>
            <div className='flex p-3 w-full'>
              <p className='uppercase text-sm font-semibold text-gray-500'>didalam kesatrian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home