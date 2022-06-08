import {HomeIcon,CollectionIcon,UserGroupIcon,DatabaseIcon,PresentationChartBarIcon,DocumentIcon,ColorSwatchIcon,CubeIcon,TemplateIcon,ArchiveIcon,StatusOnlineIcon,PuzzleIcon,BriefcaseIcon,CogIcon,PaperAirplaneIcon,ChevronDoubleLeftIcon,ChevronDoubleRightIcon,LogoutIcon} from '@heroicons/react/outline'
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import Logo from './logo2.png'
import {logout} from '../features/authSlice'
function TabMenu() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showmenu,setshowmenu] = useState(false)
    const [organisasi,setorganisasi] = useState(false)
    const [setting,setsetting] = useState(false)
    const {pathname} = useLocation()
    useEffect(()=>{
        if(pathname==='/sintelijen' || pathname==='/soperasi' || pathname==='/slogistik' || pathname==='/mrs' || pathname==='/sperencanaan') setorganisasi(true)
        if(pathname==='/users' || pathname==='/database') setsetting(true)
    },[pathname])
    return (
        <>
        <div className='bg-[#f8f8fa] rounded-3xl w-[20vw] h-[95vh] lg:flex flex space-y-8 flex-col px-2 py-5 items-center fixed hidden lg:block '>
            {/* <div className='flex w-40 h-32 self-center'>
                <img src={Logo} className='w-full h-full' />
            </div> */}
            <div className='flex w-36 h-16 self-center'>
                <img src={Logo} className='w-full h-full' />
            </div>
            <div className='w-full h-full space-y-3 px-5 overflow-y-auto'>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/')}>
                    <HomeIcon className={`w-5 h-5 ${(pathname==='/')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/')?'text-[#db5454]':'text-black'} font-medium`}>Dashboard</div>
                </div>
                <div className='flex flex-col space-x-1 w-full'>
                    <div className={`flex space-x-3 cursor-pointer rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> setorganisasi(!organisasi)}>
                        <TemplateIcon className={`w-5 h-5 text-gray-500`}/>
                        <div className={`${organisasi?'text-[#db5454]':'text-black'} font-medium`}>Organisasi</div>
                    </div>
                    {
                        organisasi&&<div className='flex flex-col w-full pl-8 '>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/sintelijen')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/sintelijen')}>
                                <PuzzleIcon className={`w-4 h-4 ${(pathname==='/sintelijen')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/sintelijen')?'text-[#db5454]':'text-black'} font-medium`}>Staff Intelijen</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/spersonil')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/spersonil')}>
                                <CollectionIcon className={`w-4 h-4 ${(pathname==='/spersonil')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/spersonil')?'text-[#db5454]':'text-black'} font-medium`}>Staff Personil</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/soperasi')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/soperasi')}>
                                <StatusOnlineIcon className={`w-4 h-4 ${(pathname==='/soperasi')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/soperasi')?'text-[#db5454]':'text-black'} font-medium`}>Staff Operasi</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/slogistik')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/slogistik')}>
                                <ArchiveIcon className={`w-4 h-4 ${(pathname==='/slogistik')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/slogistik')?'text-[#db5454]':'text-black'} font-medium`}>Staff Logistik</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/sperencanaan')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/sperencanaan')}>
                                <PaperAirplaneIcon className={`w-4 h-4 ${(pathname==='/sperencanaan')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/sperencanaan')?'text-[#db5454]':'text-black'} font-medium`}>Staff Perencanaan</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/mrs')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/mrs')}>
                                <BriefcaseIcon className={`w-4 h-4 ${(pathname==='/mrs')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/mrs')?'text-[#db5454]':'text-black'} font-medium`}>MRS</div>
                            </div>
                        </div>
                    }
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/materill')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/materill')}>
                    <CubeIcon className={`w-5 h-5 ${(pathname==='/materill')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/materill')?'text-[#db5454]':'text-black'} font-medium`}>Materill</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/piranti_lunak')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/piranti_lunak')}>
                    <ColorSwatchIcon className={`w-5 h-5 ${(pathname==='/piranti_lunak')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/piranti_lunak')?'text-[#db5454]':'text-black'} font-medium`}>Piranti Lunak</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/personil')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/personil')}>
                    <CollectionIcon className={`w-5 h-5 ${(pathname==='/personil')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/personil')?'text-[#db5454]':'text-black'} font-medium`}>Personil</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/monitoring')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/monitoring')}>
                    <PresentationChartBarIcon className={`w-5 h-5 ${(pathname==='/monitoring')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/monitoring')?'text-[#db5454]':'text-black'} font-medium`}>Monitoring</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/laporan')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/laporan')}>
                    <DocumentIcon className={`w-5 h-5 ${(pathname==='/laporan')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/laporan')?'text-[#db5454]':'text-black'} font-medium`}>Laporan</div>
                </div>
                <div className='flex flex-col space-x-1 w-full'>
                    <div className={`flex space-x-3 cursor-pointer rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> setsetting(!setting)}>
                        <CogIcon className={`w-5 h-5 text-gray-500`}/>
                        <div className={`${setting?'text-[#db5454]':'text-black'} font-medium`}>Setting</div>
                    </div>
                    {
                        setting&&<div className='flex flex-col w-full pl-8 '>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/users')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/users')}>
                                <UserGroupIcon className={`w-5 h-5 ${(pathname==='/users')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/users')?'text-[#db5454]':'text-black'} font-medium`}>Users</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/database')?'bg-[#f4dfe1]':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/database')}>
                                <DatabaseIcon className={`w-5 h-5 ${(pathname==='/database')?'text-[#db5454]':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/database')?'text-[#db5454]':'text-black'} font-medium`}>Database</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        {!showmenu&&<ChevronDoubleRightIcon className='text-black w-10 h-10 border border-slate-400 absolute left-1 top-[50%] rounded-full bg-gray-200 p-1 shadow-xl block lg:hidden' onClick={()=>setshowmenu(!showmenu)}/>}
        <div className={`lg:hidden h-auto min-w-[50vw] max-w-[70vw] absolute top-[20%] left-1 flex space-x-7 justify-center items-center z-20`}>
            {showmenu&&
            <div className='w-full h-full space-y-3 px-5 overflow-y-auto py-5 relative shadow-xl rounded-xl bg-gray-400'>
                <ChevronDoubleLeftIcon className='text-gray-200 w-5 h-5 absolute right-1 top-[50%]' onClick={()=>setshowmenu(!showmenu)} />
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/')}>
                    <HomeIcon className={`w-5 h-5 ${(pathname==='/')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/')?'text-slate-600':'text-black'} font-medium`}>Dashboard</div>
                </div>
                <div className='flex flex-col space-x-1 w-full'>
                    <div className={`flex space-x-3 cursor-pointer rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> setorganisasi(!organisasi)}>
                        <TemplateIcon className={`w-5 h-5 text-gray-500`}/>
                        <div className={`${organisasi?'text-slate-600':'text-black'} font-medium`}>Organisasi</div>
                    </div>
                    {
                        organisasi&&<div className='flex flex-col w-full pl-8 '>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/sintelijen')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/sintelijen')}>
                                <PuzzleIcon className={`w-4 h-4 ${(pathname==='/sintelijen')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/sintelijen')?'text-slate-600':'text-black'} font-medium`}>Staff Intelijen</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/spersonil')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/spersonil')}>
                                <CollectionIcon className={`w-4 h-4 ${(pathname==='/spersonil')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/spersonil')?'text-slate-600':'text-black'} font-medium`}>Staff Personil</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/soperasi')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/soperasi')}>
                                <StatusOnlineIcon className={`w-4 h-4 ${(pathname==='/soperasi')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/soperasi')?'text-slate-600':'text-black'} font-medium`}>Staff Operasi</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/slogistik')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/slogistik')}>
                                <ArchiveIcon className={`w-4 h-4 ${(pathname==='/slogistik')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/slogistik')?'text-slate-600':'text-black'} font-medium`}>Staff Logistik</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/sperencanaan')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/sperencanaan')}>
                                <PaperAirplaneIcon className={`w-4 h-4 ${(pathname==='/sperencanaan')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/sperencanaan')?'text-slate-600':'text-black'} font-medium`}>Staff Perencanaan</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/mrs')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/mrs')}>
                                <BriefcaseIcon className={`w-4 h-4 ${(pathname==='/mrs')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/mrs')?'text-slate-600':'text-black'} font-medium`}>MRS</div>
                            </div>
                        </div>
                    }
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/materill')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/materill')}>
                    <CubeIcon className={`w-5 h-5 ${(pathname==='/materill')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/materill')?'text-slate-600':'text-black'} font-medium`}>Materill</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/piranti_lunak')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/piranti_lunak')}>
                    <ColorSwatchIcon className={`w-5 h-5 ${(pathname==='/piranti_lunak')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/piranti_lunak')?'text-slate-600':'text-black'} font-medium`}>Piranti Lunak</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/personil')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/personil')}>
                    <CollectionIcon className={`w-5 h-5 ${(pathname==='/personil')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/personil')?'text-slate-600':'text-black'} font-medium`}>Personil</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/monitoring')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/monitoring')}>
                    <PresentationChartBarIcon className={`w-5 h-5 ${(pathname==='/monitoring')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/monitoring')?'text-slate-600':'text-black'} font-medium`}>Monitoring</div>
                </div>
                <div className={`flex space-x-3 cursor-pointer ${(pathname==='/laporan')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/laporan')}>
                    <DocumentIcon className={`w-5 h-5 ${(pathname==='/laporan')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                    <div className={`${(pathname==='/laporan')?'text-slate-600':'text-black'} font-medium`}>Laporan</div>
                </div>
                <div className='flex flex-col space-x-1 w-full'>
                    <div className={`flex space-x-3 cursor-pointer rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> setsetting(!setting)}>
                        <CogIcon className={`w-5 h-5 text-gray-500`}/>
                        <div className={`${setting?'text-slate-600':'text-black'} font-medium`}>Setting</div>
                    </div>
                    {
                        setting&&<div className='flex flex-col w-full pl-8 '>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/users')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/users')}>
                                <UserGroupIcon className={`w-5 h-5 ${(pathname==='/users')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/users')?'text-slate-600':'text-black'} font-medium`}>Users</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer ${(pathname==='/database')?'bg-gray-200':''} rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> navigate('/database')}>
                                <DatabaseIcon className={`w-5 h-5 ${(pathname==='/database')?'text-slate-600':'text-gray-500'} text-gray-500`}/>
                                <div className={`${(pathname==='/database')?'text-slate-600':'text-black'} font-medium`}>Database</div>
                            </div>
                            <div className={`flex space-x-3 cursor-pointer rounded-xl px-2 py-2 justify-start items-center`} onClick={()=> dispatch(logout())}>
                                <LogoutIcon className={`w-5 h-5 text-gray-500'} text-gray-500`}/>
                                <div className={`text-black font-medium`}>Logout</div>
                            </div>
                        </div>
                    }
                </div>
            </div>}
        </div>
        </>
    )
}

export default TabMenu