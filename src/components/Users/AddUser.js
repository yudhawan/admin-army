import {ChevronLeftIcon,CameraIcon} from '@heroicons/react/outline'
import { useRef, useState } from 'react'
function AddUser({handleAddshow}) {
    const [user,setuser]=useState({
        nama:'',
        email:'',
        picture:null,
        nohp:'',
        password:''
    })
    const [picture,setpicture]=useState(null)
    const img = useRef()
  return (
    <div className='flex flex-col w-full justify-start bg-white p-5 rounded-xl'>
        <div className='flex items-center cursor-pointer w-fit' onClick={handleAddshow}>
            <ChevronLeftIcon className='text-red hover:text-hoveRed w-8 h-8' />
            <p className='text-red text-lg hover:text-hoveRed select-none'>Back</p>
        </div>
        <input  type='file' hidden name="image" accept="image/*" ref={img} onChange={(e)=>{
            setuser({...user,picture:e.target.files[0]})
            let pic = URL.createObjectURL(e.target.files[0])
            setpicture(pic)
        }} />
        <form className='flex flex-col space-y-2 mt-5'>
            <div className='w-40 h-40 relative'>
                <img className='w-full h-full rounded-xl ' src={picture?picture:'https://via.placeholder.com/240x240?text=IMG'} />
                <div onClick={()=> img.current.click()} className=' cursor-pointer flex rounded-full absolute bottom-1 right-1 bg-black p-1'><CameraIcon className='w-5 h-5 text-white'/></div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nama</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' placeholder='Agung Sanjaya' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Email</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='email' className='outline-none w-full' placeholder='agungs@gmail.com' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nomor Hp</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' placeholder='085293833123' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Password</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='password' className='outline-none w-full' placeholder='*********' />
                </div>
            </div>
            <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-60' onClick={()=>{
                handleAddshow()
            }}>Simpan</button>
        </form>
    </div>
  )
}

export default AddUser