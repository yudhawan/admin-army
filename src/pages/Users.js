import {PlusIcon,SearchIcon,TrashIcon,PencilIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import AddUser from '../components/Users/AddUser'
import DeleteUser from '../components/Users/DeleteUser'
import EditUser from '../components/Users/EditUser'
function Users() {
  const [addshow,setaddshow]=useState(false)
  const [editshow,seteditshow]=useState({id:1,show:false})
  const [deleteshow,setdeleteshow]=useState({id:1,show:false})
  const handleAddshow=()=> setaddshow(!addshow)
  const handleEditshow=(id=0)=> seteditshow({id:id,show:!editshow.show})
  const handleDeleteShow = (id=0)=> setdeleteshow({id:id,show:!deleteshow.show})
  return (
    <div className='flex flex-col w-full h-full space-y-5'>
      
      {addshow?<AddUser handleAddshow={handleAddshow} />:editshow.show?<EditUser handleEditshow={handleEditshow}/>:<><div className='flex justify-between w-full pr-16 space-x-1'>
        <div className='bg-red hover:bg-hoveRed rounded-lg flex justify-center items-center py-1 px-4 space-x-3 cursor-pointer' onClick={handleAddshow}>
            <PlusIcon className='w-7 h-7 text-white' />
            <p className='text-white'>Users</p>
        </div>
        <div className='text-gray-400 hidden lg:block'>Total 1000 Users</div>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 space-x-1'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' />
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-4'>
            <select className='w-full outline-none bg-transparent'>
              <option value='' className='text-black w-full'>Filter</option>
            </select>
          </div>
        </div>
        </div>

      <div className='flex'>
      {deleteshow.show&&<DeleteUser handleDeleteShow={handleDeleteShow}/>}
        <table className='w-full text-left overflow-x-scroll'>
            <thead className='flex w-full bg-white rounded-tr-md rounded-tl-md border-b border-gray-200'>
                <tr className='flex w-full items-center py-3 px-4'>
                    {/* <th className='text-black w-[15vw] lg:w-[5%]'>No</th> */}
                    <th className='text-black w-[50vw] lg:w-[30%]'>Nama</th>
                    <th className='text-black w-[85vw] lg:w-[35%]'>Email</th>
                    <th className='text-black w-[40vw] lg:w-[25%]'>No Hp</th>
                    <th className='text-black w-[20vw] lg:w-[10%]'>Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-auto w-full h-[65vh] flex flex-col bg-white rounded-br-md rounded-bl-md'>
              <tr  className="flex w-full lg:w-full items-center py-3 px-4 border-b border-gray-100 h-auto">
                {/* <td className='h-auto w-[15vw] lg:w-[5%] '>1</td> */}
                <td className='h-auto w-[50vw] lg:w-[30%] flex space-x-1 items-center'>
                  <div className='w-12 h-12'>
                    <img src='https://via.placeholder.com/240x240?text=IMG' className='w-full hfull rounded-lg' />
                  </div>
                  <p className='text-sm w-full line-clamp-1'>yayan</p>
                </td>
                <td className='h-auto w-[85vw] lg:w-[35%] text-sm line-clamp-1'>yayansuhatra_dsad@mail.com</td>
                <td className='h-auto w-[40vw] lg:w-[25%] text-sm line-clamp-1'>085765410909</td>
                <td className='h-auto w-[20vw] lg:w-[10%] flex space-x-1'>
                  <PencilIcon className='text-green-600 w-5 h-5 cursor-pointer' onClick={handleEditshow} />
                  <TrashIcon className='text-rose-600 w-5 h-5 cursor-pointer' onClick={handleDeleteShow}/>
                </td>
            </tr>
            </tbody>
        </table>
      </div></>}
    </div>
  )
}

export default Users