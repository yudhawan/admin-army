import {HomeIcon,CollectionIcon,UserGroupIcon,DatabaseIcon,PresentationChartBarIcon,DocumentIcon} from '@heroicons/react/outline'
import {useLocation, useNavigate} from 'react-router-dom';
import { useState } from 'react'
function TabMenu() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    return (
        <>
        <div className='bg-[#f8f8fa] rounded-3xl w-1/5 h-[95vh] flex flex-col px-2 py-5 items-center fixed hidden lg:block'>
            <div className='w-full h-auto space-y-3 px-5'>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/')}>
                    <HomeIcon className={`w-5 h-5 ${(pathname==='/')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/')?'text-[#db5454]':'text-black'} font-medium`}>Dashboard</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/users')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/users')}>
                    <UserGroupIcon className={`w-5 h-5 ${(pathname==='/users')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/users')?'text-[#db5454]':'text-black'} font-medium`}>Users</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/personil')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/personil')}>
                    <CollectionIcon className={`w-5 h-5 ${(pathname==='/personil')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/personil')?'text-[#db5454]':'text-black'} font-medium`}>Personil</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/database')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/database')}>
                    <DatabaseIcon className={`w-5 h-5 ${(pathname==='/database')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/database')?'text-[#db5454]':'text-black'} font-medium`}>Database</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/monitoring')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/monitoring')}>
                    <PresentationChartBarIcon className={`w-5 h-5 ${(pathname==='/monitoring')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/monitoring')?'text-[#db5454]':'text-black'} font-medium`}>Monitoring</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/laporan')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/laporan')}>
                    <DocumentIcon className={`w-5 h-5 ${(pathname==='/laporan')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/laporan')?'text-[#db5454]':'text-black'} font-medium`}>Laporan</div>
                </div>
            </div>
        </div>
        <div className='lg:hidden bg-[#f8f8fa] w-full fixed bottom-0 left-0 h-16 flex space-x-7 justify-center items-center'>
            <div className={`flex flex-col space-y-1 cursor-pointer justify-start items-center`} onClick={()=> navigate('/')}>
                <HomeIcon className={`w-8 h-8 ${(pathname==='/')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                {/* <div className={`${(pathname==='/')?'text-[#db5454]':'text-black'} text-xs`}>Dashboard</div> */}
            </div>
            <div className={`flex flex-col space-y-1 cursor-pointer justify-start items-center`} onClick={()=> navigate('/users')}>
                <UserGroupIcon className={`w-8 h-8 ${(pathname==='/users')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                {/* <div className={`${(pathname==='/users')?'text-[#db5454]':'text-black'} text-xs`}>Users</div> */}
            </div>
            <div className={`flex flex-col space-y-1 cursor-pointer justify-start items-center`} onClick={()=> navigate('/personil')}>
                <CollectionIcon className={`w-8 h-8 ${(pathname==='/personil')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                {/* <div className={`${(pathname==='/personil')?'text-[#db5454]':'text-black'} text-xs`}>Personil</div> */}
            </div>
            <div className={`flex flex-col space-y-1 cursor-pointer justify-start items-center`} onClick={()=> navigate('/database')}>
                <DatabaseIcon className={`w-8 h-8 ${(pathname==='/database')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                {/* <div className={`${(pathname==='/database')?'text-[#db5454]':'text-black'} text-xs`}>Database</div> */}
            </div>
            <div className={`flex flex-col space-y-1 cursor-pointer justify-start items-center`} onClick={()=> navigate('/monitoring')}>
                <PresentationChartBarIcon className={`w-8 h-8 ${(pathname==='/monitoring')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                {/* <div className={`${(pathname==='/monitoring')?'text-[#db5454]':'text-black'} text-xs`}>Monitoring</div> */}
            </div>
            <div className={`flex flex-col space-y-1 cursor-pointer justify-start items-center`} onClick={()=> navigate('/laporan')}>
                <DocumentIcon className={`w-8 h-8 ${(pathname==='/laporan')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                {/* <div className={`${(pathname==='/laporan')?'text-[#db5454]':'text-black'} text-xs`}>Laporan</div> */}
            </div>
        </div>
        </>
    )
}

export default TabMenu