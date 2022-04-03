import {BellIcon} from '@heroicons/react/outline'
import {useLocation, useNavigate} from 'react-router-dom';
function Header() {
    const {pathname} = useLocation()
    return (
        <>
            <div className='lg:hidden bg-[#f8f8fa] w-full fixed top-0 left-0 h-12 flex space-x-2 justify-between items-center px-5'>
                <div className='text-black text-xl'>{(pathname==="/")?<>Dashboard</>:(pathname==="/users")?<>Users</>:(pathname==="/personil")?<>Personil</>:(pathname==="/monitoring")?<>Monitoring</>:<>Laporan</>}</div>
                <div className='flex justify-center items-center relative'>
                    <BellIcon className='w-7 h-7 text-black' />
                    <div className='absolute top-0 right-0 bg-blue-500 rounded-xl text-white px-1 text-xs'>3</div>
                </div>
            </div>
            <div className='lg:block hidden w-3/4 fixed top-0 right-0 h-20 lg:flex justify-between px-5 items-center'>
                <div className='text-black text-xl font-bold'>{(pathname==="/")?<>Dashboard</>:(pathname==="/users")?<>Users</>:(pathname==="/personil")?<>Personil</>:(pathname==="/monitoring")?<>Monitoring</>:<>Laporan</>}</div>
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