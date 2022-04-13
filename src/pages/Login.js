import { useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../features/authSlice'
function Login() {
    const dispatch = useDispatch()
    const {token,loading,error} = useSelector(state=>state.auth)
    const [validation,setvalidation]= useState('')
    const [data,setdata]=useState({
        username:'',
        password:''
    })
    function handleValidation(e){
        e.preventDefault()
        if(data.username=='') return setvalidation('Username harus diisi')
        if(data.password=='') return setvalidation('Password harus diisi')
        handleSubmit()
    }
    const handleSubmit = () => dispatch(login(data))
  return (
    <div className='flex w-full h-[80vh] justify-center items-center absolute z-50 top-0 left-0'>
        <form className='flex-col rounded-xl space-y-2 p-5 justify-start' onSubmit={handleValidation}>
            <div className='text-gray-500'>Login Admin</div>
            <div className='flex-col space-y-1'>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' placeholder="Username" value={data.username} onChange={(e)=> setdata({...data,username:e.target.value})} />
                </div>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='password' className='outline-none w-full' placeholder="Password" value={data.password} onChange={(e)=> setdata({...data,password:e.target.value})} />
                </div>
                {validation&&<div className="text-red bg-rose-100 px-2 py-1">{validation}</div>}
            </div>
            {error&&<div className="text-red bg-rose-100 px-2 py-1">{error}</div>}
            <button className="bg-green-600 text-white font-semibold rounded-lg py-1 px-4 flex items-center" onClick={handleValidation} >
                {loading?<p>Loading</p>:<p>Login</p>}
            </button>
        </form>
    </div>
  )
}

export default Login