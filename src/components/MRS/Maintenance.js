import {LightningBoltIcon,ClockIcon,DotsVerticalIcon,ArrowUpIcon} from '@heroicons/react/outline'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Maintenance() {
    const [tgl,settgl] = useState(new Date());
    console.log(tgl)
  return (
    <div className='flex w-full h-80 space-x-3 overflow-x-auto'>
        <div className='flex-col w-[35rem] bg-white rounded-xl p-4 space-y-3'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex-col'>
                    <p className='text-gray-600 font-bold text-lg'>Maintenance Terakhir</p>
                    <p className='text-gray-400 text-xs'>Daftar Maintenance Terakhir</p>
                </div>
                <div className='flex space-x-3 items-center'>
                    <div className='rounded-md bg-white w-40 justify-center items-center border-gray-300 border p-2'>
                        <select className='outline-none w-full text-sm text-indigo-500'>
                            <option>Aktivitas Hari Ini</option>
                            <option>Aktivitas Terlama</option>
                        </select>
                    </div>
                    <DotsVerticalIcon className='text-gray-400 w-5 h-5' />
                </div>
            </div>
            <div className='flex items-center w-full mt-1'>
                <p className='text-gray-600 font-bold w-20'>Hari Ini</p>
                <div className='w-full border-gray-300 border-dashed border h-[1px] '></div>
            </div>
            <div className='flex-col space-y-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-2 items-center'>
                        <p className='text-xs text-gray-400 w-12'>2m ago</p>
                        <div className='w-1 h-8 bg-indigo-600 rounded-lg'></div>
                        <div className='w-8 h-8 bg-indigo-600 rounded-lg p-1'>
                            <LightningBoltIcon className='text-white w-full h-full fill-white' />
                        </div>
                        <div className='flex-col'>
                            <p className='text-sm'><span className='font-semibold'>HONDA CR-V</span> Maintenance at <span className='text-indigo-500'>Jakarta</span></p>
                            <p className='text-xs text-gray-300'>Friday, June 3 2022</p>
                        </div>
                    </div>
                    <div className='text-indigo-500 bg-indigo-100 rounded-lg p-2 text-sm'>Go to Board</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-2 items-center'>
                        <p className='text-xs text-gray-400 w-12'>3h ago</p>
                        <div className='w-1 h-8 bg-rose-600 rounded-lg'></div>
                        <div className='w-8 h-8 bg-rose-600 rounded-lg p-1'>
                            <ClockIcon className='text-white w-full h-full ' />
                        </div>
                        <div className='flex-col'>
                            <p className='text-sm'><span className='font-semibold'>Kawasaki Ninja</span> Maintenance at <span className='text-indigo-500'>Jakarta</span></p>
                            <p className='text-xs text-gray-300'>Friday, June 3 2022</p>
                        </div>
                    </div>
                    <div className='text-indigo-500 bg-indigo-100 rounded-lg p-2 text-sm'>Go to Board</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-2 items-center'>
                        <p className='text-xs text-gray-400 w-12'>3h ago</p>
                        <div className='w-1 h-8 bg-rose-600 rounded-lg'></div>
                        <div className='w-8 h-8 bg-rose-600 rounded-lg p-1'>
                            <ClockIcon className='text-white w-full h-full' />
                        </div>
                        <div className='flex-col'>
                            <p className='text-sm'><span className='font-semibold'>Subaru</span> Maintenance at <span className='text-indigo-500'>Jakarta</span></p>
                            <p className='text-xs text-gray-300'>Friday, June 3 2022</p>
                        </div>
                    </div>
                    <div className='text-indigo-500 bg-indigo-100 rounded-lg p-2 text-sm'>Go to Board</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-2 items-center'>
                        <p className='text-xs text-gray-400 w-12'>24h ago</p>
                        <div className='w-1 h-8 bg-indigo-600 rounded-lg'></div>
                        <div className='w-8 h-8 bg-indigo-600 rounded-lg p-1'>
                            <LightningBoltIcon className='text-white w-full h-full fill-white' />
                        </div>
                        <div className='flex-col'>
                            <p className='text-sm'><span className='font-semibold'>YAMAHA XSR</span> Maintenance at <span className='text-indigo-500'>Jakarta</span></p>
                            <p className='text-xs text-gray-300'>Friday, June 3 2022</p>
                        </div>
                    </div>
                    <div className='text-indigo-500 bg-indigo-100 rounded-lg p-2 text-sm'>Go to Board</div>
                </div>
            </div>
        </div>
        <div></div>
        <div className='bg-white rounded-lg p-2 items-center flex w-[22rem] h-full'><Calendar className='w-full h-full' onChange={settgl} value={tgl} /></div>
        <div className='flex-col space-y-4 flex items-center w-ful h-full'>
            <div className='rounded-full bg-white p-2 rotate-45 -z-10'><ArrowUpIcon className='text-gray-600 w-6 h-6' /></div>
            <div className='flex space-x-2'>
              <div className='h-64 w-2 bg-black rounded-xl flex items-end'>
                <div className='h-[80%] w-full bg-blue-600 rounded-xl'></div>
              </div>
              <div className='h-64 w-2 bg-black rounded-xl flex items-end'>
                <div className='h-[40%] w-full bg-red rounded-xl'></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Maintenance