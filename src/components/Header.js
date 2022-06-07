import {SearchIcon,XIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import {getPersonil} from '../features/personilSlice'
import { useDispatch,useSelector } from 'react-redux'
import {logout} from '../features/authSlice'
import host from '../features/host';
function Header() {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const [search,setsearch] = useState("")
    const {personil,loading} = useSelector(state=>state.personil)
    const [showmenu,setshowmenu]=useState(false)
    useEffect(()=>{
        dispatch(getPersonil())
        if(pathname=='/')setshowmenu(false)
    },[pathname])
    return (
        <div className="fixed top-0 right-0 lg:w-[77%] lg:mr-2 z-10">
            <div className='lg:hidden bg-[#f8f8fa] w-full h-12 flex space-x-2 justify-between items-center px-5 bg-transparent backdrop-blur-sm z-20'>
                <div className='text-black text-xl'>{(pathname==="/")?<div>Dashboard</div>:(pathname==="/users")?<div>Users</div>:(pathname==="/personil")?<div>Personil</div>:(pathname==="/database")?<div>Database</div>:(pathname==="/monitoring")?<div>Monitoring</div>:(pathname==="/piranti_lunak")?<div>Piranti Lunak</div>:(pathname==="/materill")?<div>Materill</div>:<div>Laporan</div>}</div>
                
            </div>
            <div className='lg:block hidden w-full h-20 lg:flex justify-between px-5 items-center bg-transparent backdrop-blur-sm z-20'>
                <div className='text-black text-xl font-bold w-96'>{
                (pathname==="/")?<div className='flex-col'>
                    <div className='text-2xl'>Dashboard</div>
                    <p className='text-sm font-normal'>Selamat datang di Sistem Manajemen Satuan</p>
                </div>
                :(pathname==="/mrs")?<div className='flex-col'>
                    <div className='text-2xl'>MRS</div>
                    <p className='text-sm font-normal'>Medical Registry System</p>
                </div>
                :(pathname==="/sintelijen")?<div className='flex-col'>
                    <div className='text-2xl'>Staff Intelijen</div>
                    <p className='text-sm font-normal'>Organisasi</p>
                </div>
                :(pathname==="/spersonil")?<div className='flex-col'>
                    <div className='text-2xl'>Staff Personil</div>
                    <p className='text-sm font-normal'>Organisasi</p>
                </div>
                :(pathname==="/soperasi")?<div className='flex-col'>
                    <div className='text-2xl'>Staff Operasi</div>
                    <p className='text-sm font-normal'>Organisasi</p>
                </div>
                :(pathname==="/slogistik")?<div className='flex-col'>
                    <div className='text-2xl'>Staff Logistik</div>
                    <p className='text-sm font-normal'>Organisasi</p>
                </div>
                :(pathname==="/sperencanaan")?<div className='flex-col'>
                    <div className='text-2xl'>Staff Perencanaan</div>
                    <p className='text-sm font-normal'>Organisasi</p>
                </div>
                :(pathname==="/materill")?<div className='flex-col'>
                    <div className='text-2xl'>Materill</div>
                    <p className='text-sm font-normal'>Data Inventaris</p>
                </div>
                :(pathname==="/piranti_lunak")?<div className='flex-col'>
                    <div className='text-2xl'>Piranti Lunak</div>
                    <p className='text-sm font-normal'>Interconnection Drive System</p>
                </div>
                :(pathname==="/users")?<div className='flex-col'>
                    <div className='text-2xl'>Users</div>
                    <p className='text-sm font-normal'>Daftar user </p>
                </div>
                :(pathname==="/personil")?<div className='flex-col'>
                    <div className='text-2xl'>Personil</div>
                    <p className='text-sm font-normal'>Database Personil Satuan</p>
                </div>
                :(pathname==="/database")?<div className='flex-col'>
                    <div className='text-2xl'>Database</div>
                    <p className='text-sm font-normal'>Menambahkan Kategori dan Jenis Laporan</p>
                </div>
                :(pathname==="/monitoring")?<div className='flex-col'>
                    <div className='text-2xl'>Monitoring</div>
                    <p className='text-sm font-normal'>Digunakan untuk memonitoring setiap laporan</p>
                </div>
                :(pathname==="/laporan")?<div className='flex-col'>
                    <div className='text-2xl'>Laporan</div>
                    <p className='text-sm font-normal'>Daftar seluruh laporan</p>
                </div>:<></>
                }</div>
                <div className='relative'>
                    <div className='flex bg-[#f3eaea] justify-center items-center rounded-xl px-4 space-x-1 w-96 h-14'>
                        <input type="text" placeholder='Search Here...' className='w-full outline-none bg-transparent' value={search} onChange={(e)=> setsearch(e.target.value)} />
                        {search?<XIcon className='text-gray-400 w-6 h-6 cursor-pointer' onClick={()=>setsearch('')} />:<SearchIcon className='text-gray-400 w-6 h-6' />}
                    </div>
                    {search&&<div className='absolute bg-white w-full rounded-xl'>
                        <ul className='px-4 py-1'>
                            {
                                personil?.filter(val => val.nama.toLowerCase().includes(search.toLowerCase()) || val.satuan.toLowerCase().includes(search.toLowerCase()) || val.infiltrasi.toLowerCase().includes(search.toLowerCase())).map((item,index)=>{
                                    return(
                                        <li key={index} className='flex items-center justify-start px-2 py-1 hover:bg-gray-200 cursor-pointer'>
                                            <div className='flex items-center'>
                                                <div className='w-8 h-8'>
                                                    <img src={host+`/users/img/${item.picture}`} className='w-full h-full rounded-lg' />
                                                </div>
                                                <div className='ml-2 flex-col'>
                                                    <div className='text-gray-700 text-sm'>{item.nama}</div>
                                                    <p className='text-xs text-gray-400'>{item.satuan}</p>

                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>}
                </div>
                <div className='flex justify-center items-center space-x-4'>
                    {/* <div className='flex justify-center items-center relative cursor-pointer'>
                        <BellIcon className='w-8 h-8 text-gray-600 ' />
                        <div className='absolute top-0 right-0 bg-blue-500 rounded-xl text-white px-1 text-xs'>3</div>
                    </div> */}
                    <figure className='w-12 h-12 relative'>
                        <img src='https://via.placeholder.com/48x48.png?text=A' alt='profile' className='w-full h-full rounded-xl cursor-pointer' onClick={()=> setshowmenu(!showmenu)} />
                        {showmenu&&<div className='flex flex-col items-center divide-y fixed z-50 -bottom-15 w-28  p-2 rounded-lg right-0 bg-[#F8F8FA]'>
                            {/* <p className='text-sm text-gray-500 cursor-pointer font-semibold hover:text-gray-700'>Setting</p> */}
                            <p className='text-sm text-rose-500 cursor-pointer font-semibold hover:text-rose-700' onClick={()=> dispatch(logout())}>Logout</p>
                        </div>}
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Header