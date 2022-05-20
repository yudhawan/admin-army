import {ChevronLeftIcon,CameraIcon} from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import {postUsers} from '../../features/usersSlice'
import {useDispatch,useSelector} from 'react-redux'
function AddUser({handleAddshow}) {
    const dispatch = useDispatch()
    const [user,setuser]=useState({
        nama:'',
        email:'',
        nohp:'',
        role:'',
        password:'',
        picture:null,
    })
    const [validation,setvalidation]=useState('')
    const [picture,setpicture]=useState(null)
    const img = useRef()
    function cekValidation(){
        if(user.nama==='') return setvalidation('Nama tidak boleh kosong')
        if(user.email==='') return setvalidation('Email tidak boleh kosong')
        if(user.nohp==='') return setvalidation('Nomor HP tidak boleh kosong')
        if(user.password==='') return setvalidation('Password tidak boleh kosong')
        if(user.role==='') return setvalidation('Role tidak boleh kosong')
        if(user.picture===null) return setvalidation('Foto tidak boleh kosong')
        return handleSubmit()
    }
    const handleSubmit=()=> {
        dispatch(postUsers(user))
        handleAddshow()
    }
    
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
        <form className='flex flex-col space-y-2 mt-5' onSubmit={(e)=>{
            e.preventDefault()
            cekValidation()
        }}>
            <div className='w-40 h-40 relative'>
                <img className='w-full h-full rounded-xl ' src={picture?picture:'https://via.placeholder.com/240x240?text=IMG'} />
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
                <div className='flex space-x-2'>
                    <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                        <input type='email' className='outline-none w-full' placeholder='agungs@gmail.com' value={user.email} onChange={(e)=> setuser({...user, email:e.target.value})} />
                    </div>
                    <p className='text-xs text-gray-400'>*jangan memasukkan email yang pernah didaftarkan</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nomor Hp</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='number' className='outline-none w-full' placeholder='085293833123' value={user.nohp} onChange={(e)=>setuser({...user, nohp:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Role</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full' value={user.role} onChange={(e)=>setuser({...user, role:e.target.value})} >
                        <option>---/---</option>
                        <option value="intelijen">Staff Intelijen</option>
                        <option value="logistik">Staff Logistik</option>
                        <option value="operasional">Staff Operasional</option>
                        <option value="perencanaan">Staff Intelijen</option>
                        <option value="drive">Piranti Lunak</option>
                        <option value="materill">Materill</option>
                        <option value="medical">MRS</option>
                        <option value="laporan">Laporan</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Password</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='password' className='outline-none w-full' placeholder='*********' value={user.password} onChange={(e)=>setuser({...user, password:e.target.value})} />
                </div>
            </div>
            {validation?<p className='text-red text-xs'>{validation}</p>:null}
            <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-60' onClick={cekValidation}>Simpan</button>
        </form>
    </div>
  )
}

export default AddUser