import {BellIcon,SearchIcon} from '@heroicons/react/outline'
import {useLocation, useNavigate} from 'react-router-dom';
function Header() {
    const {pathname} = useLocation()
    return (
        <>
            <div className='lg:hidden bg-[#f8f8fa] w-full fixed top-0 left-0 h-12 flex space-x-2 justify-between items-center px-5 bg-transparent backdrop-blur-sm'>
                <div className='text-black text-xl'>{(pathname==="/")?<>Dashboard</>:(pathname==="/users")?<>Users</>:(pathname==="/personil")?<>Personil</>:(pathname==="/database")?<>Database</>:(pathname==="/monitoring")?<>Monitoring</>:<>Laporan</>}</div>
                <div className='flex justify-center items-center relative'>
                    <BellIcon className='w-7 h-7 text-black' />
                    <div className='absolute top-0 right-0 bg-blue-500 rounded-xl text-white px-1 text-xs'>3</div>
                </div>
            </div>
            <div className='lg:block hidden w-3/4 fixed top-0 right-0 h-20 lg:flex justify-between px-5 items-center bg-transparent backdrop-blur-sm'>
                <div className='text-black text-xl font-bold w-96'>{
                (pathname==="/")?<div className='flex-col'>
                    <div className='text-2xl'>Dashboard</div>
                    <p className='text-sm font-normal'>Selamat datang di Smart Report System</p>
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
                <div className='flex bg-[#f3eaea] justify-center items-center rounded-xl px-4 space-x-1 w-96 h-14'>
                    <input type="text" placeholder='Search Here...' className='w-full outline-none bg-transparent' />
                    <SearchIcon className='text-gray-400 w-6 h-6' />
                </div>
                <div className='flex justify-center items-center space-x-4'>
                    <div className='flex justify-center items-center relative'>
                        <BellIcon className='w-8 h-8 text-black' />
                        <div className='absolute top-0 right-0 bg-blue-500 rounded-xl text-white px-1 text-xs'>3</div>
                    </div>
                    <figure className='w-12 h-12'>
                        <img src='https://via.placeholder.com/48x48.png?text=A' alt='profile' className='w-full h-full rounded-lg' />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Header