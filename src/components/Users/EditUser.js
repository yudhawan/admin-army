import {ChevronLeftIcon,CameraIcon} from '@heroicons/react/outline'
import {getUsers,updateUsers} from '../../features/usersSlice'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState,useRef } from 'react'
import host from '../../features/host'
function EditUser({handleEditshow,id}) {
    const dispatch = useDispatch()
    const {users,loading} = useSelector(state=>state.users)
    const [data,setdata]=useState(users.filter(value=>value.id===id)[0])
    const [user,setuser]=useState({
        nama:data?.nama,
        email:data?.email,
        nohp:data?.nohp,
        password:data?.password,
        picture:data?.picture,
    })
    const [picture,setpicture]=useState(null)
    const img = useRef()
    useEffect(() => {
      dispatch(getUsers())
    }, [handleEditshow])
  return (
    <div className='flex flex-col w-full justify-start bg-white p-5 rounded-xl'>
        <div className='flex items-center cursor-pointer w-fit' onClick={handleEditshow}>
            <ChevronLeftIcon className='text-red hover:text-hoveRed w-8 h-8' />
            <p className='text-red text-lg hover:text-hoveRed select-none'>Back</p>
        </div>
        <input  type='file' hidden name="image" accept="image/*" ref={img} onChange={(e)=>{
            setuser({...user,picture:e.target.files[0]})
            let pic = URL.createObjectURL(e.target.files[0])
            setpicture(pic)
        }} />
        <div className='text-gray-500'>Update User</div>
        <form className='flex flex-col space-y-2 mt-5'>
            <div className='w-40 h-40 relative'>
                <img className='w-full h-full rounded-xl ' src={picture?picture:host+'/users/img/'+user.picture} />
                <div onClick={()=> img.current.click()} className=' cursor-pointer flex rounded-full absolute bottom-1 right-1 bg-black p-1'><CameraIcon className='w-5 h-5 text-white'/></div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nama</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' placeholder='Agung Sanjaya' value={user.nama} onChange={(e)=>setuser({...user, nama:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Email</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='email' className='outline-none w-full' placeholder='agungs@gmail.com' value={user.email} onChange={(e)=> setuser({...user, email:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nomor Hp</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='number' className='outline-none w-full' placeholder='085293833123' value={user.nohp} onChange={(e)=>setuser({...user, nohp:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Password</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='password' className='outline-none w-full' placeholder='*********' value={user.password} onChange={(e)=>setuser({...user, password:e.target.value})} />
                </div>
            </div>
            <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-60' onClick={()=>{
                handleEditshow()
            }}>Simpan</button>
        </form>
    </div>
  )
}

export default EditUser