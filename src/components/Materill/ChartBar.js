import { useState,useEffect } from 'react'
import {getData,getDataMaintenance} from '../../features/materillSlice'
import {useDispatch,useSelector} from 'react-redux'
import {DonutChart} from 'react-circle-chart'
function ChartBar() {
    const dispatch = useDispatch()
    const {materill,maintenance} = useSelector(state=>state.materill)
    const [inventaris,setinventaris] = useState([])
    useEffect(()=>{
        dispatch(getData())
        setinventaris({value:materill.length*100/materill.length,label:'inventaris',color:'#750dd1'})
    },[])
    // #0dd16f
    // #d1c70d
    // #bf0d16
  return (
    <div className='flex space-x-2 lg:space-x-8'>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
            <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center'><DonutChart trackWidth="sm" trackColor='#E5E7EB' items={[inventaris]} size="80" totalSx={{fontSize:'16px'}} /></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
               <p className='text-gray-500 font-semibold ml-2'>TOTAL INVENTARIS</p>
               <p className='text-gray-500 font-semibold'>{materill.length}</p>
            </div>
        </div>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
            <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center'><DonutChart trackWidth="sm" trackColor='#E5E7EB' items={[inventaris]} size="80" totalSx={{fontSize:'16px'}} /></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
               <p className='text-gray-500 font-semibold ml-2'>TOTAL SENJATA</p>
               <p className='text-gray-500 font-semibold'>{materill.length}</p>
            </div>
        </div>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
        <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center'><DonutChart trackWidth="sm" trackColor='#E5E7EB' items={[inventaris]} size="80" totalSx={{fontSize:'16px'}} /></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
               <p className='text-gray-500 font-semibold ml-2'>TOTAL ALMATSUS</p>
               <p className='text-gray-500 font-semibold'>{materill.length}</p>
            </div>
        </div>
        <div className='flex space-x-1 items-center relative h-16 -z-10'>
        <div className='absolute left-0 top-0 h-16 w-16 bg-white flex justify-center rounded-full items-center'><DonutChart trackWidth="sm" trackColor='#E5E7EB' items={[inventaris]} size="80" totalSx={{fontSize:'16px'}} /></div>
            <div className='bg-white w-56 h-10 rounded-lg flex space-x-3 items-center justify-between pl-16 pr-3'>
               <p className='text-gray-500 font-semibold ml-2'>TOTAL MAINTENANCE</p>
               <p className='text-gray-500 font-semibold'>{materill.length}</p>
            </div>
        </div>
    </div>
  )
}

export default ChartBar