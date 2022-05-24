import {PlusIcon,SearchIcon,TrashIcon,PencilIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getUsers,deleteUsers,clearStatus} from '../features/usersSlice'
import AddUser from '../components/Users/AddUser'
import host from '../features/host'
function Users() {
  const dispatch = useDispatch()
  const {users,loading,status} = useSelector(state=>state.users)
  const [addshow,setaddshow]=useState(false)
  const [search,setsearch]=useState('')
  // const [editshow,seteditshow]=useState({id:1,show:false})
  const handleAddshow=()=> setaddshow(!addshow)
  // const handleEditshow=(id=0)=> seteditshow({id:id,show:!editshow.show})
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(clearStatus())
  },[])
  return (
    <div className='flex flex-col w-full h-full space-y-5'>
      
      {addshow?<AddUser handleAddshow={handleAddshow} />:<><div className='flex justify-between w-full pr-16 space-x-1'>
        <div className='bg-red hover:bg-hoveRed rounded-lg flex justify-center items-center py-1 px-4 space-x-3 cursor-pointer' onClick={handleAddshow}>
            <PlusIcon className='w-7 h-7 text-white' />
            <p className='text-white'>Users</p>
        </div>
        <div className='text-gray-400 hidden lg:block'>{users?.filter(val => val.nama.toLowerCase().includes(search.toLowerCase())).length} Users</div>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 space-x-1'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' value={search} onChange={(e)=>setsearch(e.target.value)} />
          </div>
          {/* <div className='flex justify-center items-center border border-gray-400 rounded-md px-4'>
            <select className='w-full outline-none bg-transparent'>
              <option value='' className='text-black w-full'>Filter</option>
            </select>
          </div> */}
        </div>
        </div>
      {(status===501)?<div className='bg-rose-100 text-sm text-red px-2 w-fit'>Email pernah didaftarkan</div>:null}
      <div className='flex'>
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-red rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4'>
                    {/* <th className='text-black w-[15vw] lg:w-[5%]'>No</th> */}
                    <th className='text-gray-100 w-[50vw] lg:w-80'>Nama</th>
                    <th className='text-gray-100 w-[85vw] lg:w-80'>Email</th>
                    <th className='text-gray-100 w-[40vw] lg:w-32'>No Hp</th>
                    <th className='text-gray-100 w-[40vw] lg:w-32'>Role</th>
                    <th className='text-gray-100 w-[20vw] lg:w-24'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              {
                users?.filter(val => val.nama.toLowerCase().includes(search.toLowerCase())).map((value,index)=>(
                  <tr key={index+1} className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-auto">
                    {/* <td className='h-auto w-[15vw] lg:w-[5%] '>1</td> */}
                    <td className='h-auto w-[50vw] lg:w-80 flex space-x-1 items-center'>
                      <div className='w-12 h-10'>
                        <img src={host+`/users/img/${value.picture}`} className='w-full h-full rounded-lg' />
                      </div>
                      <p className='text-sm w-full line-clamp-1'>{value.nama}</p>
                    </td>
                    <td className='h-auto w-[85vw] lg:w-80 text-sm line-clamp-1'>{value.email}</td>
                    <td className='h-auto w-[40vw] lg:w-32 text-sm line-clamp-1'><p className='cursor-pointer' onClick={()=>{
                      const newTab = window.open(`https://api.whatsapp.com/send?phone=${value.nohp}`, '_blank', 'noopener,noreferrer')
                      if (newTab) newTab.opener = null
                    }}>{value.nohp}</p></td>
                    <td className='h-auto w-[40vw] lg:w-32 text-sm line-clamp-1'>{value.role}</td>
                    <td className='h-auto w-[20vw] lg:w-[10%] flex space-x-1'>
                      {/* <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={()=>handleEditshow(value.id)} /> */}
                      <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={()=>dispatch(deleteUsers(value.id))}/>
                    </td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div></>}
    </div>
  )
}

export default Users